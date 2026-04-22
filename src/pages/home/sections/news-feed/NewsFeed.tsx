import "./NewsFeed.css";
import { newsFeedItems, type NewsFeedItem } from "./newsFeed.mock";

const newsImages = import.meta.glob("../../../../assets/home/news-feed/*", {
  eager: true,
  import: "default",
  query: "?url",
}) as Record<string, string>;

function getNewsImageUrl(imageLocation: string) {
  return newsImages[`../../../../assets/home/news-feed/${imageLocation}`];
}

function HeartIcon() {
  return (
    <svg className="news-feed_meta-icon news-feed_meta-icon-heart" viewBox="0 0 24 24" aria-hidden="true">
      <path d="M12 20.4 4.6 13A4.7 4.7 0 0 1 11.2 6.4l.8.8.8-.8A4.7 4.7 0 0 1 19.4 13L12 20.4Z" />
    </svg>
  );
}

function CommentIcon() {
  return (
    <svg className="news-feed_meta-icon" viewBox="0 0 24 24" aria-hidden="true">
      <path d="M5 5.3h14v10.2H8.7L5 18.8V5.3Z" />
      <path d="M8.2 8.8h7.6M8.2 12h5.6" />
    </svg>
  );
}

function BookmarkIcon() {
  return (
    <svg className="news-feed_meta-icon" viewBox="0 0 24 24" aria-hidden="true">
      <path d="M7.3 4.8h9.4v15l-4.7-3.1-4.7 3.1v-15Z" />
    </svg>
  );
}

function BrandBadge({ item }: { item: NewsFeedItem }) {
  return (
    <div className="news-feed_brand" aria-label={`${item.brand} ${item.brandLabel}`}>
      <span className="news-feed_brand-text">
        <strong>{item.brand}</strong>
        <span>{item.brandLabel}</span>
      </span>
      <span className="news-feed_brand-mark">{item.brandMark}</span>
    </div>
  );
}

function NewsFeedCard({ item }: { item: NewsFeedItem }) {
  const imageUrl = getNewsImageUrl(item.image_location);

  return (
    <article className="news-feed_card">
      <div className="news-feed_card-main">
        <div className="news-feed_media">
          {imageUrl ? (
            <img className="news-feed_image" src={imageUrl} alt={item.title} loading="lazy" />
          ) : (
            <div className="news-feed_image-placeholder" aria-label={item.image_location}>
              <span>{item.brand}</span>
            </div>
          )}
        </div>

        <div className="news-feed_content">
          <BrandBadge item={item} />
          <h3>{item.title}</h3>
          <p>{item.excerpt}</p>
        </div>
      </div>

      <div className="news-feed_card-footer">
        <div className="news-feed_actions" aria-label="Article activity">
          <span className="news-feed_metric">
            <HeartIcon />
            {item.likes}
          </span>
          <span className="news-feed_metric">
            <CommentIcon />
            {item.comments}
          </span>
          <span className="news-feed_metric news-feed_metric-bookmark">
            <BookmarkIcon />
          </span>
        </div>

        <div className="news-feed_timestamp">
          <span>{item.date}</span>
          <span>{item.time}</span>
        </div>

        <a className="news-feed_more" href={`/news/${item.id}`}>
          სრულად ნახვა &gt;
        </a>
      </div>
    </article>
  );
}

export default function NewsFeed() {
  return (
    <section className="news-feed" aria-labelledby="news-feed-title">
      <div className="news-feed_heading">
        <span aria-hidden="true" />
        <h2 id="news-feed-title">News feed</h2>
        <span aria-hidden="true" />
      </div>

      <div className="news-feed_list">
        {newsFeedItems.map((item) => (
          <NewsFeedCard key={item.id} item={item} />
        ))}
      </div>

      <nav className="news-feed_pagination" aria-label="News pages">
        <a className="news-feed_page news-feed_page-active" href="/news?page=1" aria-current="page">
          1
        </a>
        <a className="news-feed_page" href="/news?page=2">
          2
        </a>
        <a className="news-feed_page" href="/news?page=3">
          3
        </a>
        <a className="news-feed_page" href="/news?page=4">
          4
        </a>
        <span className="news-feed_page">...</span>
      </nav>
    </section>
  );
}
