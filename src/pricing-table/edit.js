import { __ } from '@wordpress/i18n';
import { RichText, URLInputButton, InspectorControls } from '@wordpress/block-editor';
import { PanelBody, Button, ToggleControl } from '@wordpress/components';
import { Fragment } from '@wordpress/element';

export default function Edit({ attributes, setAttributes }) {
  const { plans } = attributes;

  const updatePlan = (index, field, value) => {
    const newPlans = [...plans];
    newPlans[index][field] = value;
    setAttributes({ plans: newPlans });
  };

  const addPlan = () => {
    setAttributes({
      plans: [
        ...plans,
        {
          title: "New Plan",
          price: "$0",
          features: ["Feature 1", "Feature 2"],
          featured: false,
          ctaLabel: "Sign Up",
          ctaUrl: "#",
        },
      ],
    });
  };

  const removePlan = (index) => {
    const newPlans = [...plans];
    newPlans.splice(index, 1);
    setAttributes({ plans: newPlans });
  };

  return (
    <Fragment>
      <InspectorControls>
        <PanelBody title={__('Pricing Table Settings', 'modern-wordpress-blocks')}>
          <Button onClick={addPlan} variant="secondary">{__('Add Plan')}</Button>
        </PanelBody>
      </InspectorControls>

      <div className="mwb-pricing-table">
        {plans.map((plan, index) => (
          <div
            key={index}
            className={`mwb-pricing-plan ${plan.featured ? 'is-featured' : ''}`}
          >
            <RichText
              tagName="h3"
              className="plan-title"
              value={plan.title}
              onChange={(val) => updatePlan(index, 'title', val)}
              placeholder="Plan Title"
            />

            <RichText
              tagName="div"
              className="price"
              value={plan.price}
              onChange={(val) => updatePlan(index, 'price', val)}
              placeholder="$0/mo"
            />

            <ul>
              {plan.features.map((feature, fIndex) => (
                <li key={fIndex}>
                  <RichText
                    tagName="span"
                    value={feature}
                    onChange={(val) => {
                      const newPlans = [...plans];
                      newPlans[index].features[fIndex] = val;
                      setAttributes({ plans: newPlans });
                    }}
                    placeholder="Feature..."
                  />
                </li>
              ))}
            </ul>

            <ToggleControl
              label={__('Feature this plan?', 'modern-wordpress-blocks')}
              checked={plan.featured}
              onChange={(val) => updatePlan(index, 'featured', val)}
            />

            <RichText
              tagName="a"
              className="plan-cta"
              value={plan.ctaLabel}
              onChange={(val) => updatePlan(index, 'ctaLabel', val)}
              placeholder="CTA Label"
            />

            <URLInputButton
              url={plan.ctaUrl}
              onChange={(url) => updatePlan(index, 'ctaUrl', url)}
            />

            <Button
              variant="link"
              isDestructive
              onClick={() => removePlan(index)}
              style={{ marginTop: '0.5rem' }}
            >
              {__('Remove Plan')}
            </Button>
          </div>
        ))}
      </div>
    </Fragment>
  );
}