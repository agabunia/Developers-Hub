import "./OffersPage.css";
import { featuredOffers, type Offers } from "./offers.mock";

const offerImages = import.meta.glob("../../assets/offers/*", {
  eager: true,
  import: "default",
  query: "?url",
}) as Record<string, string>;

function getOfferAssetUrl(fileName: string) {
  return offerImages[`../../assets/offers/${fileName}`];
}

function ArrowIcon() {
  return (
    <svg className="offers-card_arrow-icon" viewBox="0 0 28 28" aria-hidden="true">
      <path d="M4 14h19" />
      <path d="m16 7 7 7-7 7" />
    </svg>
  );
}

function OfferCard({ offer }: { offer: Offers }) {
  const imageUrl = getOfferAssetUrl(offer.image_location);
  const logoUrl = getOfferAssetUrl(offer.logo_location);

  return (
    <article className="offers-card">
      <div className="offers-card_media">
        {imageUrl ? (
          <img className={`offers-card_image offers-card_image-${offer.id}`} src={imageUrl} alt="" loading="lazy" />
        ) : (
          <div className="offers-card_image-placeholder" aria-hidden="true" />
        )}

        {logoUrl ? (
          <img className="offers-card_logo" src={logoUrl} alt="" loading="lazy" />
        ) : (
          <span className="offers-card_logo offers-card_logo-fallback">Offer</span>
        )}
      </div>

      <a className="offers-card_body" href={`/offers/${offer.id}`} aria-label={`View offer ${offer.id}`}>
        <p>{offer.text}</p>
        <span className="offers-card_arrow">
          <ArrowIcon />
        </span>
      </a>
    </article>
  );
}

export default function OffersPage() {
  return (
    <main className="offers-page">
      <section className="offers-page_inner" aria-labelledby="offers-page-title">
        <h1 id="offers-page-title">Special offers for you</h1>

        <div className="offers-page_list">
          {featuredOffers
          // .slice(0, 3)
          .map((offer) => (
            <OfferCard key={offer.id} offer={offer} />
          ))}
        </div>

        <nav className="offers-page_pagination" aria-label="Offers pages">
          <a className="offers-page_page offers-page_page-active" href="/offers?page=1" aria-current="page">
            1
          </a>
          <a className="offers-page_page" href="/offers?page=2">
            2
          </a>
          <a className="offers-page_page" href="/offers?page=3">
            3
          </a>
          <a className="offers-page_page" href="/offers?page=4">
            4
          </a>
          <span className="offers-page_page">...</span>
        </nav>
      </section>
    </main>
  );
}
