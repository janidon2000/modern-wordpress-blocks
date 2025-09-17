import { RichText } from '@wordpress/block-editor';

export default function save({ attributes }) {
  const { slides, activeIndex } = attributes;

  return (
    <div className="mwb-slider" data-active-index={activeIndex}>
      <div className="mwb-slider__track" style={{ transform: `translateX(-${activeIndex * 100}%)` }}>
        {slides.map((slide, i) => (
          <div className="mwb-slide" key={i}>
            {slide.imageUrl && <img src={slide.imageUrl} alt={slide.imageAlt || ''} />}
            <RichText.Content tagName="h3" className="slide-title" value={slide.title} />
            <RichText.Content tagName="p" className="slide-text" value={slide.text} />
          </div>
        ))}
      </div>

      {slides.length > 1 && (
        <div className="mwb-slider__controls">
          <button className="mwb-prev">‹</button>
          <button className="mwb-next">›</button>
        </div>
      )}
    </div>
  );
}