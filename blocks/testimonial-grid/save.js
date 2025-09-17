import { useBlockProps, RichText } from '@wordpress/block-editor';

export default function save({ attributes }) {
  const { testimonials = [] } = attributes;

  return (
    <div {...useBlockProps.save()} className="testimonial-grid">
      {testimonials.map((t, i) => (
        <div key={i} className="testimonial-item">
          {t.imageUrl && <img src={t.imageUrl} alt={t.name} />}
          <RichText.Content tagName="h4" value={t.name} />
          <RichText.Content tagName="p" value={t.quote} />
        </div>
      ))}
    </div>
  );
}
