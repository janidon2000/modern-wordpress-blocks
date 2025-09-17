import { __ } from '@wordpress/i18n';
import {
  RichText,
  MediaUpload,
  MediaUploadCheck,
  URLInputButton,
  InspectorControls,
} from '@wordpress/block-editor';
import { PanelBody, Button } from '@wordpress/components';
import { Fragment } from '@wordpress/element';

export default function Edit({ attributes, setAttributes }) {
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
    <Fragment>
      <InspectorControls>
        <PanelBody title={__('Hero Settings', 'modern-wordpress-blocks')}>
          <MediaUploadCheck>
            <MediaUpload
              onSelect={(media) =>
                setAttributes({ heroImageUrl: media.url, heroImageAlt: media.alt })
              }
              allowedTypes={['image']}
              render={({ open }) => (
                <Button onClick={open} variant="secondary">
                  {heroImageUrl
                    ? __('Replace Hero Image', 'modern-wordpress-blocks')
                    : __('Upload Hero Image', 'modern-wordpress-blocks')}
                </Button>
              )}
            />
          </MediaUploadCheck>
          {heroImageUrl && (
            <Button
              variant="link"
              onClick={() => setAttributes({ heroImageUrl: '', heroImageAlt: '' })}
              style={{ marginTop: '0.5rem', color: '#dc3232' }}
            >
              {__('Remove Image', 'modern-wordpress-blocks')}
            </Button>
          )}
        </PanelBody>
      </InspectorControls>

      <section className="mwb-hero">
        <div className="mwb-hero__inner">
          <div className="mwb-hero__image">
            {heroImageUrl ? (
              <img src={heroImageUrl} alt={heroImageAlt} />
            ) : (
              <div className="mwb-hero__placeholder">
                {__('Upload a hero image…', 'modern-wordpress-blocks')}
              </div>
            )}
          </div>

          <div className="mwb-hero__content">
            <RichText
              tagName="h1"
              className="mwb-hero__title"
              value={title}
              onChange={(val) => setAttributes({ title: val })}
              placeholder={__('Hero Title…', 'modern-wordpress-blocks')}
            />
            <RichText
              tagName="p"
              className="mwb-hero__subtitle"
              value={subtitle}
              onChange={(val) => setAttributes({ subtitle: val })}
              placeholder={__('Hero Subtitle…', 'modern-wordpress-blocks')}
            />
            <div className="mwb-hero__cta">
              <div>
                <RichText
                  tagName="a"
                  className="hero-btn primary"
                  value={primaryLabel}
                  onChange={(val) => setAttributes({ primaryLabel: val })}
                  placeholder={__('Primary button…')}
                />
                <URLInputButton
                  url={primaryUrl}
                  onChange={(url) => setAttributes({ primaryUrl: url })}
                />
              </div>
              <div>
                <RichText
                  tagName="a"
                  className="hero-btn secondary"
                  value={secondaryLabel}
                  onChange={(val) => setAttributes({ secondaryLabel: val })}
                  placeholder={__('Secondary button…')}
                />
                <URLInputButton
                  url={secondaryUrl}
                  onChange={(url) => setAttributes({ secondaryUrl: url })}
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </Fragment>
  );
}