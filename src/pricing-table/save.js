import { RichText } from '@wordpress/block-editor';

export default function save({ attributes }) {
  const { plans } = attributes;

  return (
    <div className="mwb-pricing-table">
      {plans.map((plan, index) => (
        <div
          key={index}
          className={`mwb-pricing-plan ${plan.featured ? 'is-featured' : ''}`}
        >
          <RichText.Content tagName="h3" className="plan-title" value={plan.title} />
          <RichText.Content tagName="div" className="price" value={plan.price} />

          <ul>
            {plan.features.map((feature, fIndex) => (
              <li key={fIndex}>
                <RichText.Content value={feature} />
              </li>
            ))}
          </ul>

          <RichText.Content
            tagName="a"
            className="plan-cta"
            value={plan.ctaLabel}
            href={plan.ctaUrl}
          />
        </div>
      ))}
    </div>
  );
}