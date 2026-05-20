import { useState, useMemo } from "react";
import Pagination from "../../../../components/ui/pagination";
import { getGalleryByType, type GalleryItemType } from "./gallery.mock";
import "./Gallery.css";

const galleryImages = import.meta.glob("../../../../assets/developers/developers_projects/*", {
  eager: true,
  import: "default",
  query: "?url",
}) as Record<string, string>;

function getGalleryImageUrl(imageLocation: string) {
  return galleryImages[`../../../../assets/developers/developers_projects/${imageLocation}`];
}

type FilterType = "all" | "photo" | "video";
type GalleryProps = {
  developerId: number;
};

const ITEMS_PER_PAGE = 12;

export default function Gallery({ developerId }: GalleryProps) {
  const [activeFilter, setActiveFilter] = useState<FilterType>("all");
  const [currentPage, setCurrentPage] = useState(1);

  const allGallery = useMemo(() => {
    const type = activeFilter === "all" ? undefined : (activeFilter as "photo" | "video");
    return getGalleryByType(developerId, type);
  }, [developerId, activeFilter]);

  const totalPages = Math.ceil(allGallery.length / ITEMS_PER_PAGE);
  const paginatedGallery = useMemo(() => {
    const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
    return allGallery.slice(startIndex, startIndex + ITEMS_PER_PAGE);
  }, [allGallery, currentPage]);

  const handleFilterChange = (filter: FilterType) => {
    setActiveFilter(filter);
    setCurrentPage(1);
  };

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <section className="gallery-section">
      {/* Filter Bar */}
      <div className="gallery-filter-bar">
        <button
          className={`gallery-filter-btn ${activeFilter === "all" ? "active" : ""}`}
          onClick={() => handleFilterChange("all")}
        >
          <span className="gallery-filter-icon">◇</span>
          All
        </button>
        <button
          className={`gallery-filter-btn ${activeFilter === "photo" ? "active" : ""}`}
          onClick={() => handleFilterChange("photo")}
        >
          <span className="gallery-filter-icon">📷</span>
          Photo
        </button>
        <button
          className={`gallery-filter-btn ${activeFilter === "video" ? "active" : ""}`}
          onClick={() => handleFilterChange("video")}
        >
          <span className="gallery-filter-icon">▶️</span>
          Video
        </button>
      </div>

      {/* Gallery Header */}
      <div className="gallery-header">
        <h3 className="gallery-title">
          {activeFilter === "all" && "Gallery"}
          {activeFilter === "photo" && "Photos"}
          {activeFilter === "video" && "Videos"}
          <span className="gallery-count">{allGallery.length}</span>
        </h3>
      </div>

      {/* Gallery Grid */}
      {paginatedGallery.length === 0 ? (
        <div className="gallery-empty">
          <p>No {activeFilter === "all" ? "items" : activeFilter} found</p>
        </div>
      ) : (
        <div className="gallery-grid">
          {paginatedGallery.map((item) => (
            <GalleryCard key={item.id} item={item} />
          ))}
        </div>
      )}

      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={handlePageChange}
        className="gallery-pagination"
      />
    </section>
  );
}

function GalleryCard({ item }: { item: GalleryItemType }) {
  const imageUrl = getGalleryImageUrl(item.image_location);
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <div
        className="gallery-card"
        onClick={() => setIsModalOpen(true)}
        role="button"
        tabIndex={0}
        onKeyDown={(e) => e.key === "Enter" && setIsModalOpen(true)}
      >
        <div className="gallery-card_image-wrapper">
          {item.video_url ? (
            <>
              <iframe
                className="gallery-card_video"
                src={item.video_url}
                title={item.title_eng}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
              {/* Transparent click-capture layer so card click opens modal */}
              <div className="gallery-card_video-overlay" />
            </>
          ) : imageUrl ? (
            <img
              src={imageUrl}
              alt={item.title_eng || "Gallery item"}
              className="gallery-card_image"
            />
          ) : null}

          {/* Hover Overlay */}
          <div className="gallery-card_overlay">
            <div className="gallery-card_play-icon">
              {item.video_url ? (
                <>
                  <span className="play-button">▶</span>
                  <span className="gallery-type-badge">Video</span>
                </>
              ) : (
                <span className="gallery-type-badge">Photo</span>
              )}
            </div>
          </div>
        </div>

        {item.title_eng && (
          <div className="gallery-card_content">
            <h4 className="gallery-card_title">{item.title_eng}</h4>
            {item.title_geo && <p className="gallery-card_title-geo">{item.title_geo}</p>}
            <span className="gallery-card_date">{new Date(item.date).toLocaleDateString()}</span>
          </div>
        )}
      </div>

      {/* Modal */}
      {isModalOpen && (
        <GalleryModal item={item} onClose={() => setIsModalOpen(false)} imageUrl={imageUrl} />
      )}
    </>
  );
}

function GalleryModal({
  item,
  onClose,
  imageUrl,
}: {
  item: GalleryItemType;
  onClose: () => void;
  imageUrl: string;
}) {
  return (
    <div className="gallery-modal" onClick={onClose}>
      <div className="gallery-modal_content" onClick={(e) => e.stopPropagation()}>
        <button className="gallery-modal_close" onClick={onClose} aria-label="Close modal">
          ✕
        </button>

        {item.video_url ? (
          <iframe
            className="gallery-modal_video"
            src={item.video_url}
            title={item.title_eng}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        ) : imageUrl ? (
          <img
            src={imageUrl}
            alt={item.title_eng}
            className="gallery-modal_image"
          />
        ) : null}

        {item.title_eng && (
          <div className="gallery-modal_info">
            <h3 className="gallery-modal_title">{item.title_eng}</h3>
            {item.title_geo && <p className="gallery-modal_title-geo">{item.title_geo}</p>}
            <span className="gallery-modal_date">{new Date(item.date).toLocaleDateString()}</span>
          </div>
        )}
      </div>
    </div>
  );
}