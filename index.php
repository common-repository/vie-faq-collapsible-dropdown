<?php

/**
 * Plugin Name: Vie FAQ Collapsible Dropdown
 * Description: This plugin is a simple, reliable and quick solution for using "question-answer"-blocks with the gutenberg editor. It can be used perfectly for "Frequently Asked Questions (FAQ)".
 * Version: 1.0.0
 * Author: AUTbite
 * Author URI: https://www.autbite.com
 *
 * @package vie_faq
 */

defined( 'ABSPATH' ) || exit;

/**
 * Load all translations for our plugin from the MO file.
*/
add_action( 'init', 'vie_faq_load_textdomain' );

function vie_faq_load_textdomain() {
	load_plugin_textdomain( 'vie_faq', false, basename( __DIR__ ) . '/languages' );
}

/**
 * Registers all block assets so that they can be enqueued through Gutenberg in
 * the corresponding context.
 *
 * Passes translations to JavaScript.
 */
function vie_faq_register_block() {

	// Loads dependencies
	$asset_file = include( plugin_dir_path( __FILE__ ) . 'build/index.asset.php');

	// Loads additional JavaScript code for open-close functionality  
	wp_enqueue_script(
		'vie_faq-additional',
		plugins_url( 'script.js', __FILE__ ),
		array(),
		'1.0.,0',
		true
	);

	// Loads JavaScript for block
	wp_register_script(
		'vie_faq',
		plugins_url( 'build/index.js', __FILE__ ),
		$asset_file['dependencies'],
		$asset_file['version']
	);

	// Loads editor styles
	wp_register_style(
		'vie_faq-editor-css',
		plugins_url( 'editor.css', __FILE__ ),
		array( 'wp-edit-blocks' ),
		filemtime( plugin_dir_path( __FILE__ ) . 'editor.css' )
	);

	// Loads front-end styles
	wp_register_style(
		'vie_faq-style-css',
		plugins_url( 'style.css', __FILE__ ),
		array( ),
		filemtime( plugin_dir_path( __FILE__ ) . 'style.css' )
	);

	register_block_type( 'vie-faq/vie-faq', array(
		'style' => 'vie_faq-style-css',
		'editor_style' => 'vie_faq-editor-css',
		'editor_script' => 'vie_faq',
	) );

}
add_action( 'init', 'vie_faq_register_block' );
