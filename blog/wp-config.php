<?php
/**
 * The base configuration for WordPress
 *
 * The wp-config.php creation script uses this file during the
 * installation. You don't have to use the web site, you can
 * copy this file to "wp-config.php" and fill in the values.
 *
 * This file contains the following configurations:
 *
 * * MySQL settings
 * * Secret keys
 * * Database table prefix
 * * ABSPATH
 *
 * @link https://codex.wordpress.org/Editing_wp-config.php
 *
 * @package WordPress
 */

/*
 * cPanel & WHM® Site Software
 *
 * Core updates should be disabled entirely by the cPanel & WHM® Site Software
 * plugin, as Site Software will provide the updates.  The following line acts
 * as a safeguard, to avoid automatically updating if that plugin is disabled.
 *
 * Allowing updates outside of the Site Software interface in cPanel & WHM®
 * could lead to DATA LOSS.
 *
 * Re-enable automatic background updates at your own risk.
 */
define( 'WP_AUTO_UPDATE_CORE', false );

// ** MySQL settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define('DB_NAME', 'setiufla_wp');

/** MySQL database username */
define('DB_USER', 'setiufla_wp');

/** MySQL database password */
define('DB_PASSWORD', '3ao$r9de');

/** MySQL hostname */
define('DB_HOST', 'localhost');

/** Database Charset to use in creating database tables. */
define('DB_CHARSET', 'utf8');

/** The Database Collate type. Don't change this if in doubt. */
define('DB_COLLATE', '');

/**#@+
 * Authentication Unique Keys and Salts.
 *
 * Change these to different unique phrases!
 * You can generate these using the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}
 * You can change these at any point in time to invalidate all existing cookies. This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define('AUTH_KEY',         'aZZpnkzxQkxxFwOp5bwSKENHZiXc94ALT6mJZlCFiqNjTofOlGDdNBbiH8MQ3Goa');
define('SECURE_AUTH_KEY',  'CmBgyQi0IL1zDCLGhxLULK9fyMlOiTJjMLlJ590wCb4GR_UOc9rhzf2UxVrNGu6u');
define('LOGGED_IN_KEY',    '1ne4JrsQucxKHUcEyjRBEHD4Ydam6xfiz5k2tz6MYRtpxMR2Ql3sLWGukY4PiKO_');
define('NONCE_KEY',        'bwSOJD8Tgw8DLBOgPPddR7KOl597IPZhQ9lnqeHXTyCg1Tv_V5AGy6R6IxmhQscE');
define('AUTH_SALT',        '7E0B0G1io8z8b2tKePv3mMcBGbBeBt6Zk1wIBXeYLd92smsl7WmpVU5V7Q8G56PI');
define('SECURE_AUTH_SALT', 'X9XfOOqfFCb0KlKQMbdqTslvFH6La91iF0Bc7V1Br3p8wrvR2A_NuEdMXnhtOToM');
define('LOGGED_IN_SALT',   'vMOGHDML9ZsKvgZgjDeUKjQq0UwTgfJRVekMdqPUHKCvNX5ycP52WNeRpKYRkjDU');
define('NONCE_SALT',       'Z1AyFSQvVUPhZbsUfA2mjg2sYBvTJMQU_crynPi28joXNWu0HsDqqe0xcKtyRUIo');

/**#@-*/

/**
 * WordPress Database Table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 */
$table_prefix  = 'wp_';

/**
 * For developers: WordPress debugging mode.
 *
 * Change this to true to enable the display of notices during development.
 * It is strongly recommended that plugin and theme developers use WP_DEBUG
 * in their development environments.
 *
 * For information on other constants that can be used for debugging,
 * visit the Codex.
 *
 * @link https://codex.wordpress.org/Debugging_in_WordPress
 */
define('WP_DEBUG', false);

/* That's all, stop editing! Happy blogging. */

/** Absolute path to the WordPress directory. */
if ( !defined('ABSPATH') )
	define('ABSPATH', dirname(__FILE__) . '/');

/** Sets up WordPress vars and included files. */
require_once(ABSPATH . 'wp-settings.php');
