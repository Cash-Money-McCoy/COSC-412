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

// ** MySQL settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define( 'DB_NAME', 'xxx' );

/** MySQL database username */
define( 'DB_USER', 'xxx' );

/** MySQL database password */
define( 'DB_PASSWORD', 'xxx' );

/** MySQL hostname */
define( 'DB_HOST', 'x.x.x.x' );

/** Database Charset to use in creating database tables. */
define( 'DB_CHARSET', 'utf8mb4' );

/** The Database Collate type. Don't change this if in doubt. */
define( 'DB_COLLATE', '' );

/**#@+
 * Authentication Unique Keys and Salts.
 *
 * Change these to different unique phrases!
 * You can generate these using the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}
 * You can change these at any point in time to invalidate all existing cookies. This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define( 'AUTH_KEY',         'ClHzguv>d}CU_kMnQbZD/yN,q1Qo3}-Q(;S&?#e;*hXciPYj`i6J5DG#m0,JZa=,' );
define( 'SECURE_AUTH_KEY',  '`#b)w!]BslN_no.KzTc4H|N2eI~671]TIO^6[%/0Cjv*mL|b_Kk.Eo+<4qkfvjph' );
define( 'LOGGED_IN_KEY',    '!=H-Z|h|+hSUkhz3>$M2$] `v)Z0}}/Zo2wHY9J,)keNasUs/kNBDhQb)y1weR2A' );
define( 'NONCE_KEY',        'MZs ne!Uf2lQWJS<(J[WqDoKd3{``EmwB/>+$(yl@,)JEi<{PmTZ/(&l^/Ne8Ax6' );
define( 'AUTH_SALT',        '31OgkGkJSkU[oiQnyH-#4pE2(@bt3g128]dzin.FE=n53Lc e|Y3m`xh(O`Cs,ye' );
define( 'SECURE_AUTH_SALT', 'dZ}9& xDdGC-xLd{sj.h_W/Ju+^XJzsK].Ilip~8t_(52x%/}G)oh!IPTXqR*i:j' );
define( 'LOGGED_IN_SALT',   'ZHo-_LY`y)`B{D/+Cl$L&0?1O6o19o@We(WSBG0Pix^Cz!ylYgWtkl8VA[kQaATK' );
define( 'NONCE_SALT',       'RHC(]g2jvp5hC#GajhAG_=*6iCU_DYp6nq37R]<1}WIN4>8JR4(8y}~i?>~cNEkO' );

define('FS_METHOD', 'direct');
define('FS_METHOD', 'ssh2');

/**#@-*/

/**
 * WordPress Database Table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 */
$table_prefix = 'wp_';

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
define( 'WP_DEBUG', false );

/* That's all, stop editing! Happy publishing. */

/** Absolute path to the WordPress directory. */
if ( ! defined( 'ABSPATH' ) ) {
	define( 'ABSPATH', dirname( __FILE__ ) . '/' );
}

/** Sets up WordPress vars and included files. */
require_once( ABSPATH . 'wp-settings.php' );
