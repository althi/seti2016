<?php
/*
Plugin Name:  cPanel & WHM® Site Software
Description:  Integrates WordPress into cPanel's Site Software management.  If this plugin is disabled, cPanel will no longer be able to manage this installation correctly, which could lead to <strong>data loss</strong>.
Plugin URI:   https://documentation.cpanel.net/display/CKB/How+to+Install+WordPress+With+cPanel
Version:      1.0
Author:       cPanel, Inc.
Author URI:   https://cpanel.com/
License:      GPL v2 or later
Network:      true

*/

/*
 * The core updates are disabled because they interfere with the updater provided
 * by cPanel & WHM® Site Software.  Upstream updates will be provided in a timely
 * manner for Site Software.
 *
 * If you disable this plugin, cPanel's Site Software will be unable to manage this
 * installation properly, which could lead to data loss.  For example, if you, your
 * reseller, or a server administrator force an update via Site Software, it will
 * overwrite already up-to-date files.  This can happen because when WordPress® core
 * updates occur, they don't notify cPanel's Site Software, so it is unaware of the
 * version change -- it will believe the software to be out of date and update it,
 * again.  Also, if a Site Software update is forced, this plugin will be re-enabled.
 *
 * Disable this plugin at your own risk.
 */
remove_action( 'wp_version_check', 'wp_version_check' );
remove_action( 'admin_init', '_maybe_update_core' );
add_filter( 'pre_transient_update_core', create_function( '$a', "return null;" ) );
add_filter( 'pre_site_transient_update_core', create_function( '$a', "return null;" ) );
