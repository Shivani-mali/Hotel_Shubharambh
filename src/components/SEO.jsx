import { Helmet } from 'react-helmet-async';

const SEO = ({ title, description, url, image, schema }) => {
  const siteName = "हॉटेल शुभारंभ Lodging & Family Restaurant (हॉटेल शुभारंभ Lodging & Family Restaurant)";
  const fullTitle = title ? `${title} | ${siteName}` : siteName;
  const defaultDesc = "मुडशिंगी मधील सर्वोत्तम फॅमिली रेस्टॉरंट, आरामदायक लॉजिंग आणि तुमच्या खास क्षणांसाठी फंक्शन हॉल. अस्सल कोल्हापुरी चवीचा अनुभव.";
  const metaDesc = description || defaultDesc;
  const pageUrl = url ? `https://hotelshubharambh.com${url}` : "https://hotelshubharambh.com";
  const metaImage = image || "https://hotelshubharambh.com/hero.png";

  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={metaDesc} />
      <link rel="canonical" href={pageUrl} />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content={pageUrl} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={metaDesc} />
      <meta property="og:image" content={metaImage} />

      {/* Twitter */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content={pageUrl} />
      <meta property="twitter:title" content={fullTitle} />
      <meta property="twitter:description" content={metaDesc} />
      <meta property="twitter:image" content={metaImage} />

      {/* Structured Data */}
      {schema && (
        <script type="application/ld+json">
          {JSON.stringify(schema)}
        </script>
      )}
    </Helmet>
  );
};

export default SEO;
