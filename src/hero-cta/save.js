import { RichText } from '@wordpress/block-editor';

export default function save({ attributes }) {
  const {
    title,
    subtitle,
    heroImageUrl,
    heroImageAlt,
    primaryLabel,
    primaryUrl,
    secondaryLabel,
    secondaryUrl,
  } = attributes;

  return (
    <section className="mwb-hero">
      <div className="mwb-hero__inner">
        <div className="mwb-hero__image">
          {heroImageUrl && <img src={heroImageUrl} alt={heroImageAlt} />}
        </div>

        <div className="mwb-hero__content">
          <RichText.Content tagName="h1" className="mwb-hero__title" value={title} />
          <RichText.Content tagName="p" className="mwb-hero__subtitle" value={subtitle} />
          <div className="mwb-hero__cta">
            <RichText.Content
              tagName="a"
              className="hero-btn primary"
              value={primaryLabel}
              href={primaryUrl}
            />
            <RichText.Content
              tagName="a"
              className="hero-btn secondary"
              value={secondaryLabel}
              href={secondaryUrl}
            />
          </div>
        </div>
      </div>
    </section>
  );
}