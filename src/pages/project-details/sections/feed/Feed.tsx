import { feedItems, type FeedItemType } from "../../projectDetails.mock";
import "./Feed.css";

const feedImages = import.meta.glob("../../../../assets/developers/developers_feed/*", {
  eager: true,
  import: "default",
  query: "?url",
}) as Record<string, string>;

function getFeedImageUrl(imageLocation: string) {
  return feedImages[`../../../../assets/developers/developers_feed/${imageLocation}`];
}

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
    <div className="feed-item">
      {item.type === "image" && imageUrl && (
        <div className="feed-item_media">
          <img src={imageUrl} alt={item.title_end} className="feed-item_image" />
        </div>
      )}

      {item.type === "video" && item.video_url && (
        <div className="feed-item_media">
          <iframe
            className="feed-item_video"
            src={item.video_url}
            title={item.title_end}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>
      )}

      <div className="feed-item_content">
        {item.title_end && <h3 className="feed-item_title">{item.title_end}</h3>}
        {item.title_geo && <p className="feed-item_title-geo">{item.title_geo}</p>}

        {item.description_end && <p className="feed-item_description">{item.description_end}</p>}
        {item.description_geo && <p className="feed-item_description-geo">{item.description_geo}</p>}

        <span className="feed-item_date">{new Date(item.date).toLocaleDateString()}</span>
      </div>
    </div>
  );
}
