import { feedItems, type FeedItemType } from "./Feed.mock";
import "./Feed.css";

const feedImages = import.meta.glob(
  "../../../../assets/developers/developers_feed/*",
  {
    eager: true,
    import: "default",
    query: "?url",
  },
) as Record<string, string>;

const logoImages = import.meta.glob(
  "../../../../assets/developers/developers_logos/*",
  {
    eager: true,
    import: "default",
    query: "?url",
  },
) as Record<string, string>;

function getFeedImageUrl(imageLocation: string) {
  return feedImages[
    `../../../../assets/developers/developers_feed/${imageLocation}`
  ];
}

function getLogoUrl(logoLocation: string) {
  return logoImages[
    `../../../../assets/developers/developers_logos/${logoLocation}`
  ];
}

type FeedProps = {
  developerId: number;
};

export default function Feed({ developerId }: FeedProps) {
  const developerFeed = feedItems.filter(
    (item) => item.developer_id === developerId,
  );

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
  const imageUrl = item.content_location
    ? getFeedImageUrl(item.content_location)
    : null;
  const logoUrl = item.logo_location
    ? getLogoUrl(item.logo_location)
    : undefined;

  return (
    <article className="feed-item">
      <div className="feed-item_header">
        <div className="feed-item_title-block">
          {item.title_geo && (
            <h3 className="feed-item_title-geo">{item.title_geo}</h3>
          )}
        </div>

        <div className="feed-item_brand">
          <div className="feed-item_brand-text">
            <p className="feed-details_title">{item.name_eng}</p>
            <p className="feed-details_title">{item.name_geo}</p>
          </div>

          <div className="feed-item_logo">
            <img
              src={logoUrl}
              alt={item.name_eng || item.name_geo || "Developer logo"}
              className="feed-item_logo__img"
            />
          </div>
        </div>
      </div>

      <div className="feed-item_divider" />

      <div className="feed-item_content">{item.description_geo}</div>

      {item.type === "image" && imageUrl && (
        <div className="feed-item_media">
          <img
            src={imageUrl}
            alt={item.title_eng || item.title_geo || "Feed item"}
            className="feed-item_image"
          />
        </div>
      )}

      {item.type === "video" && item.video_url && (
        <div className="feed-item_media feed-item_media-video">
          <iframe
            className="feed-item_video"
            src={item.video_url}
            title={item.title_eng || item.title_geo || "Feed video"}
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
