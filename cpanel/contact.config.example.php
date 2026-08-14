<?php
/**
 * Copy this file to contact.config.php in the same folder as contact.php
 * (public_html on cPanel). contact.config.php is blocked by .htaccess.
 */
return [
  'smtp_host' => 'mail.fumbo.ai',
  'smtp_port' => 587,
  'smtp_secure' => false,
  'smtp_user' => 'hello@fumbo.ai',
  'smtp_pass' => '',
  'smtp_from' => 'Fumbo Ai <hello@fumbo.ai>',
  'contact_to' => 'hello@fumbo.ai',
];
