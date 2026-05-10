import { useMemo, useState } from "react";
import {
  getReviewStatsByDeveloper,
  getReviewsByDeveloper,
  type ReviewType,
} from "./review.mock";
import "./Review.css";

const avatarImages = import.meta.glob(
  "../../../../assets/users/*",
  {
    eager: true,
    import: "default",
    query: "?url",
  },
) as Record<string, string>;

const ITEMS_PER_PAGE = 3;

type ReviewProps = {
  developerId: number;
};

function getAvatarUrl(imageLocation?: string) {
  if (!imageLocation) return undefined;

  return avatarImages[
    `../../../../assets/users/${imageLocation}`
  ];
}

export default function Review({ developerId }: ReviewProps) {
  const [currentPage, setCurrentPage] = useState(1);

  const developerReviews = useMemo(
    () => getReviewsByDeveloper(developerId),
    [developerId],
  );
  const stats = useMemo(
    () => getReviewStatsByDeveloper(developerId),
    [developerId],
  );
  const totalPages = Math.ceil(developerReviews.length / ITEMS_PER_PAGE);
  const visibleReviews = useMemo(() => {
    const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
    return developerReviews.slice(startIndex, startIndex + ITEMS_PER_PAGE);
  }, [currentPage, developerReviews]);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  return (
    <section className="review-section" aria-labelledby="review-title">
      <div className="review-summary" id="review-title">
        <div className="review-summary_item">
          <CommentIcon className="review-summary_icon" />
          <span>Comments</span>
          <strong>{stats.comments_count}</strong>
        </div>
        <div className="review-summary_item">
          <StarIcon className="review-summary_icon" />
          <span>Rating</span>
          <strong>{stats.ratings_count}</strong>
        </div>
      </div>

      <div className="review-panel">
        {visibleReviews.length === 0 ? (
          <p className="review-empty">No reviews yet</p>
        ) : (
          <div className="review-list">
            {visibleReviews.map((review) => (
              <ReviewCard key={review.id} review={review} />
            ))}
          </div>
        )}

        {totalPages > 1 && (
          <div className="review-pagination" aria-label="Review pages">
            {Array.from({ length: Math.min(totalPages, 4) }, (_, idx) => {
              const page = idx + 1;

              return (
                <button
                  key={page}
                  className={`review-pagination_button ${
                    currentPage === page ? "active" : ""
                  }`}
                  onClick={() => handlePageChange(page)}
                  aria-current={currentPage === page ? "page" : undefined}
                >
                  {page}
                </button>
              );
            })}
            {totalPages > 4 && (
              <span className="review-pagination_ellipsis">...</span>
            )}
          </div>
        )}
      </div>
    </section>
  );
}

function ReviewCard({ review }: { review: ReviewType }) {
  const avatarUrl = getAvatarUrl(review.author_avatar_location);

  return (
    <article className="review-card">
      <div className="review-card_avatar">
        {avatarUrl ? (
          <img src={avatarUrl} alt={review.author_name} />
        ) : (
          <DefaultAvatarIcon />
        )}
      </div>

      <div className="review-card_body">
        <div className="review-card_header">
          <div>
            <h3 className="review-card_author">{review.author_name}</h3>
            <div className="review-card_rating" aria-label={`${review.rating} out of 5`}>
              <span>{review.rating.toFixed(1)}</span>
              <RatingStars rating={review.rating} />
            </div>
          </div>

          <div className="review-card_actions">
            <ReviewAction
              icon={<HeartIcon />}
              value={review.likes}
              label="Likes"
              accent
            />
            <ReviewAction
              icon={<SmallCommentIcon />}
              value={review.replies}
              label="Replies"
            />
          </div>
        </div>

        
      </div>
      <p className="review-card_comment">{review.comment_geo}</p>
    </article>
  );
}

function ReviewAction({
  icon,
  value,
  label,
  accent = false,
}: {
  icon: React.ReactNode;
  value: number;
  label: string;
  accent?: boolean;
}) {
  return (
    <button
      className={`review-action ${accent ? "review-action-accent" : ""}`}
      type="button"
      aria-label={`${label}: ${value}`}
    >
      {icon}
      <span>{value}</span>
    </button>
  );
}

function RatingStars({ rating }: { rating: number }) {
  return (
    <span className="review-stars" aria-hidden="true">
      {Array.from({ length: 5 }, (_, idx) => (
        <span
          key={idx}
          className={`review-star ${idx < Math.floor(rating) ? "filled" : ""}`}
        >
          {idx < Math.floor(rating) ? "★" : "☆"}
        </span>
      ))}
    </span>
  );
}

function CommentIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M4 4h16v12H8l-4 4V4Z"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinejoin="round"
      />
      <path
        d="M8 8h8M8 11h8"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
    </svg>
  );
}

function SmallCommentIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M5 5h14v11H8l-3 3V5Z"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinejoin="round"
      />
      <path
        d="M8 9h8M8 12h8"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
    </svg>
  );
}

function StarIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="m12 3 2.7 5.48 6.05.88-4.38 4.27 1.03 6.02L12 16.8l-5.4 2.85 1.03-6.02-4.38-4.27 6.05-.88L12 3Z"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function HeartIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M12 20s-7-4.35-7-9.55A3.92 3.92 0 0 1 8.95 6.5 4.17 4.17 0 0 1 12 7.82a4.17 4.17 0 0 1 3.05-1.32A3.92 3.92 0 0 1 19 10.45C19 15.65 12 20 12 20Z"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function DefaultAvatarIcon() {
  return (
    <svg viewBox="0 0 56 56" fill="none" aria-hidden="true">
      <circle cx="28" cy="22" r="6" stroke="currentColor" strokeWidth="4" />
      <path
        d="M15 43c2.1-7.1 7.2-10.5 13-10.5S38.9 35.9 41 43"
        stroke="currentColor"
        strokeWidth="4"
        strokeLinecap="round"
      />
    </svg>
  );
}
