import React from "react";
import { Helmet } from "react-helmet";

const SITE_NAME = "Natarajan and Co";

const SEO = ({ title, description }) => {
  const fullTitle = title ? `${title} | ${SITE_NAME}` : `${SITE_NAME} | UltraTech Building Solutions, Karaikudi`;

  return (
    <Helmet>
      <title>{fullTitle}</title>
      {description && <meta name="description" content={description} />}
    </Helmet>
  );
};

export default SEO;
