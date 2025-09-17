<?php
/**
 * Plugin Name: Modern WordPress Blocks
 * Description: A portfolio set of custom Gutenberg blocks (Feature Grid, Testimonials, Pricing, FAQ, Hero, Slider).
 * Version: 1.0.2
 * Author: Your Name
 * Text Domain: modern-wordpress-blocks
 */

if ( ! defined( 'ABSPATH' ) ) exit;

/**
 * Register all blocks (via block.json in each /build/{block} folder)
 */
function mwb_register_blocks() {
    $blocks = [
        'feature-grid',
        'testimonial-grid',
        'pricing-table',
        'faq-accordion',
        'hero-cta',
        'content-slider',
    ];

    foreach ( $blocks as $block ) {
        $path = __DIR__ . '/build/' . $block;
        if ( file_exists( $path . '/block.json' ) ) {
            register_block_type( $path );
        }
    }
}
add_action( 'init', 'mwb_register_blocks' );

/**
 * 🔒 Layer 1:
 * Force‑enqueue block styles manually in case the theme
 * (Elementor, premium templates, etc.) disables block.json auto style loading.
 */
function mwb_enqueue_block_styles() {
    if ( is_admin() ) return;

    $blocks = [
        'feature-grid',
        'testimonial-grid',
        'pricing-table',
        'faq-accordion',
        'hero-cta',
        'content-slider',
    ];

    foreach ( $blocks as $block ) {
        $style_path = plugin_dir_path( __FILE__ ) . "build/$block/style.css";
        $style_url  = plugin_dir_url( __FILE__ ) . "build/$block/style.css";

        if ( file_exists( $style_path ) && ! wp_style_is( "mwb-$block-style", 'enqueued' ) ) {
            wp_enqueue_style(
                "mwb-$block-style",
                $style_url,
                [],
                filemtime( $style_path ) // cache‑busting
            );
        }
    }
}
add_action( 'wp_enqueue_scripts', 'mwb_enqueue_block_styles', 9 );

/**
 * 🔒 Layer 2 fallback:
 * Some page templates (e.g. Elementor Canvas) don’t call wp_head/wp_footer,
 * so even enqueued CSS never reaches the HTML.
 * This filter outputs <style> inline once per block type to guarantee rendering.
 */
function mwb_inline_css_fallback( $block_content, $block ) {
    if ( is_admin() || empty( $block['blockName'] ) ) {
        return $block_content;
    }

    static $map = [
        'mwb/feature-grid'     => 'feature-grid',
        'mwb/testimonial-grid' => 'testimonial-grid',
        'mwb/pricing-table'    => 'pricing-table',
        'mwb/faq-accordion'    => 'faq-accordion',
        'mwb/hero-cta'         => 'hero-cta',
        'mwb/content-slider'   => 'content-slider',
    ];

    $name = $block['blockName'];
    if ( ! isset( $map[ $name ] ) ) {
        return $block_content;
    }

    static $inlined = [];
    $slug = $map[ $name ];

    // Only inline once per block type
    if ( isset( $inlined[ $slug ] ) ) {
        return $block_content;
    }

    // Don’t inline if enqueue worked
    if ( wp_style_is( "mwb-$slug-style", 'enqueued' ) ) {
        return $block_content;
    }

    $css_file = plugin_dir_path( __FILE__ ) . "build/$slug/style.css";
    if ( file_exists( $css_file ) ) {
        $css = file_get_contents( $css_file );
        if ( $css ) {
            $inlined[ $slug ] = true;
            $style_tag = '<style id="mwb-' . esc_attr( $slug ) . '-inline">' . $css . '</style>';
            return $style_tag . $block_content;
        }
    }

    return $block_content;
}
add_filter( 'render_block', 'mwb_inline_css_fallback', 10, 2 );