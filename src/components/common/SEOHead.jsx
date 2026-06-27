import React from 'react';
import { Helmet } from 'react-helmet-async';

export default function SEOHead({ title, description, path = '' }) {
  const siteUrl = 'https://www.zenithwebsolutions.com';
  const fullUrl = `${siteUrl}${path}`;
  const defaultImage = `${siteUrl}/og-image.jpg`;

  return (
    <Helmet>
      {/* Basic Title & Meta */}
      <title>{title} | Zenith Web Solutions</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={fullUrl} />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content={fullUrl} />
      <meta property="og:title" content={`${title} | Zenith Web Solutions`} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={defaultImage} />
      <meta property="og:site_name" content="Zenith Web Solutions" />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:url" content={fullUrl} />
      <meta name="twitter:title" content={`${title} | Zenith Web Solutions`} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={defaultImage} />

      {/* App Specific */}
      <meta name="robots" content="index, follow" />
    </Helmet>
  );
}
