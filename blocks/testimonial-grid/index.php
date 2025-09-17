<?php
/**
 * Plugin Name: Modern Blocks – Testimonial Grid
 * Description: A custom Gutenberg block for displaying testimonials in a responsive grid.
 */

function modern_blocks_register_testimonial_grid() {
    register_block_type( __DIR__ . '/blocks/testimonial-grid' );
}
add_action( 'init', 'modern_blocks_register_testimonial_grid' );
