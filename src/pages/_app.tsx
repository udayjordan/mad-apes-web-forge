import { AppProps } from 'next/app';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import '../styles/globals.css';

function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter();
  const canonicalUrl = `https://madapes.co${router.asPath}`.split('?')[0];

  return (
    <>
      <Head>
        <title>MAD APES - Digital Agency That Delivers</title>
        <meta name="description" content="We create stunning websites, powerful applications, and result-driven marketing campaigns that transform your business and amplify your brand presence." />
        
        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content={canonicalUrl} />
        <meta property="og:title" content="MAD APES - Digital Agency That Delivers" />
        <meta property="og:description" content="We create stunning websites, powerful applications, and result-driven marketing campaigns that transform your business and amplify your brand presence." />
        <meta property="og:image" content="https://res.cloudinary.com/dl9qyibyu/image/upload/v1750662223/MAD%20APES%20IMAGES/BRAND_IMG6_bs2vdx.jpg" />
        
        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:url" content={canonicalUrl} />
        <meta name="twitter:title" content="MAD APES - Digital Agency That Delivers" />
        <meta name="twitter:description" content="We create stunning websites, powerful applications, and result-driven marketing campaigns that transform your business and amplify your brand presence." />
        <meta name="twitter:image" content="https://res.cloudinary.com/dl9qyibyu/image/upload/v1750662223/MAD%20APES%20IMAGES/BRAND_IMG6_bs2vdx.jpg" />
        
        {/* Canonical URL */}
        <link rel="canonical" href={canonicalUrl} />
        
        {/* Favicon */}
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <meta name="theme-color" content="#000000" />
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
