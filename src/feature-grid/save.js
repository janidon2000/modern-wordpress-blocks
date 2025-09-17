import { RichText } from '@wordpress/block-editor';

export default function save({ attributes }) {
  const { items } = attributes;

  return (
    <div className="mwb-feature-grid">
      {items.map((item, index) => (
        <div key={index} className="mwb-feature-card">
          <RichText.Content
            tagName="div"
            className="mwb-feature-card__icon"
            value={item.icon}
          />
          <RichText.Content
            tagName="h3"
            className="mwb-feature-card__title"
            value={item.title}
          />
          <RichText.Content
            tagName="p"
            className="mwb-feature-card__text"
            value={item.text}
          />
        </div>
      ))}
    </div>
  );
}