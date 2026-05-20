import "./Pagination.css";

type PaginationProps = {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
  maxVisible?: number;
  className?: string;
};

export default function Pagination({
  currentPage,
  totalPages,
  onPageChange,
  maxVisible = 4,
  className,
}: PaginationProps) {
  if (totalPages <= 1) return null;

  const visiblePages = Array.from(
    { length: Math.min(totalPages, maxVisible) },
    (_, idx) => idx + 1,
  );

  return (
    <nav
      className={["pagination", className].filter(Boolean).join(" ")}
      aria-label="Pages"
    >
      {visiblePages.map((page) => (
        <button
          key={page}
          className={`pagination__button${currentPage === page ? " pagination__button--active" : ""}`}
          type="button"
          onClick={() => onPageChange(page)}
          aria-current={currentPage === page ? "page" : undefined}
        >
          {page}
        </button>
      ))}
      {totalPages > maxVisible && (
        <span className="pagination__ellipsis">...</span>
      )}
    </nav>
  );
}