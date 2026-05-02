import { feedItems, type FeedItemType } from "../../projectDetails.mock";
import "./Feed.css";

const feedImages = import.meta.glob("../../../../assets/developers/developers_feed/*", {
  eager: true,
  import: "default",
  query: "?url",
}) as Record<string, string>;

// const logoImages = import.meta.glob("../../../../assets/developers/logos/*", {
//   eager: true,
//   import: "default",
//   query: "?url",
// }) as Record<string, string>;

function getFeedImageUrl(imageLocation: string) {
  return feedImages[`../../../../assets/developers/developers_feed/${imageLocation}`];
}

// Change this if your logo path/folder is different
// function getLogoUrl(logoLocation: string) {
//   return logoImages[`../../../../assets/developers/logos/${logoLocation}`];
// }

type FeedProps = {
  developerId: number;
};

export default function Feed({ developerId }: FeedProps) {
  const developerFeed = feedItems.filter((item) => item.developer_id === developerId);

  return (
    <section className="feed-section">
      {developerFeed.length === 0 ? (
        <p className="feed-empty">No feed items yet</p>
      ) : (
        <div className="feed-container">
          {developerFeed.map((item) => (
            <FeedItem key={item.id} item={item} />
          ))}
        </div>
      )}
    </section>
  );
}

function FeedItem({ item }: { item: FeedItemType }) {
  const imageUrl = item.content_location ? getFeedImageUrl(item.content_location) : null;

  return (
    <article className="feed-item">
      <div className="feed-item_header">
        <div className="feed-item_title-block">
          {item.title_geo && <h3 className="feed-item_title-geo">{item.title_geo}</h3>}
          {item.title_end && <p className="feed-item_title-end">{item.title_end}</p>}
        </div>

        <div className="feed-item_brand">
          <div className="feed-item_brand-text">
            <span>BLOX</span>
            <span>ბლოქსი</span>
          </div>

          <div className="feed-item_logo">
            <span>◆</span>
          </div>
        </div>
      </div>

      <div className="feed-item_divider" />

      <div className="feed-item_content">
        {item.description_end && (
          <p className="feed-item_description">{item.description_end}</p>
        )}

        {item.description_geo && (
          <p className="feed-item_description-geo">{item.description_geo}</p>
        )}
      </div>

      {item.type === "image" && imageUrl && (
        <div className="feed-item_media">
          <img src={imageUrl} alt={item.title_end || item.title_geo || "Feed item"} className="feed-item_image" />
        </div>
      )}

      {item.type === "video" && item.video_url && (
        <div className="feed-item_media feed-item_media-video">
          <iframe
            className="feed-item_video"
            src={item.video_url}
            title={item.title_end || item.title_geo || "Feed video"}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>
      )}

      <span className="feed-item_date">
        {new Date(item.date).toLocaleDateString()}
      </span>
    </article>
  );
}