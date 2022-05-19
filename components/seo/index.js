import React from 'react';
import PropTypes from 'prop-types';
import Head from 'next/head';
import { useRouter } from 'next/router'

const PROD_URL = 'https://www.wangbaoqi.tech';
const faviconSrc = '/favicon.webp';
  
function SEO({
  description = '',
  title,
  seoTitle,
  ogImage,
  canonicalPath,
}) {
  let metaTagTitle = title || 'Nate Wang blog';
  let pageTitle = seoTitle || metaTagTitle;

  const GENERIC_DESCRIPTION = `${title} Focus on JavaScript, React, CSS, FrontEnd, Algorithm and more!`;
  const metaDescription = description || GENERIC_DESCRIPTION;
  const router = useRouter()



  const ogImageAlt = ogImage
    ? 'Banner for site, showing page title in a playful way'
    : 'Banner for , featuring a word map and a cute 3D avatar';

  const actualOgImage =
    PROD_URL + (ogImage || '/assets/svg/me.webp');

  return (
    <Head>
      <title>{pageTitle}</title>
      <meta charSet="utf-8" />
      <meta name="description" content={metaDescription} />

      {/* TODO: Are these necessary? */}
      <meta httpEquiv="x-ua-compatible" content="ie=edge" />
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1, shrink-to-fit=no"
      />

      <meta name="robots" content="follow, index" />
      <meta property="og:url" content={`${PROD_URL}${router.asPath}`} />
      <meta property="og:site_name" content={metaTagTitle} />
      <meta property="og:title" content={metaTagTitle} />
      <meta property="og:description" content={metaDescription} />
      <meta property="og:type" content="website" />
      <meta property="og:image" content={actualOgImage} />
      <meta property="og:image:alt" content={ogImageAlt} />
      <meta property="og:image:width" content="1280" />
      <meta property="og:image:height" content="675" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:creator" content="@baoqi_wang" />
      <meta name="twitter:title" content={metaTagTitle} />
      <meta name="twitter:description" content={metaDescription} />
      <meta name="twitter:image" content={actualOgImage} />

      <link rel="icon" type="image/png" href={`${faviconSrc}`} />
      <link
        rel="canonical"
        href={canonicalPath ? canonicalPath : `${PROD_URL}${router.asPath}`}
      />
    </Head>
  );
}

SEO.propTypes = {
  description: PropTypes.string,
  lang: PropTypes.string,
  meta: PropTypes.arrayOf(PropTypes.object),
  title: PropTypes.string,
};

export default SEO;
