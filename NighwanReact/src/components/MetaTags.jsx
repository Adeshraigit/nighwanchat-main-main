import React from 'react';
import { Helmet } from 'react-helmet';

const MetaTags = () => {
  return (
    <Helmet>
      {/* Meta Tags */}
      <meta charset="UTF-8" />
      <meta http-equiv="X-UA-Compatible" content="IE=edge" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />

      {/* Page Title */}
      <title>NTPL</title>

      {/* Google Fonts */}
      <link rel="preconnect" href="https://fonts.googleapis.com/" />
      <link rel="preconnect" href="https://fonts.gstatic.com/" crossorigin />
      <link
        href="https://fonts.googleapis.com/css2?family=DM+Sans:ital,opsz,wght@0,9..40,100;0,9..40,200;0,9..40,300;0,9..40,400;0,9..40,500;0,9..40,600;0,9..40,700;0,9..40,800;1,9..40,100;1,9..40,200;1,9..40,300;1,9..40,400;1,9..40,500;1,9..40,600&amp;family=Syne:wght@400;500;600&amp;family=Yantramanav:wght@100;300;400;500;700;900&amp;display=swap"
        rel="stylesheet"
      />

      {/* Icon Libraries */}
      <link
        rel="stylesheet"
        href="https://cdn.jsdelivr.net/gh/iconoir-icons/iconoir@main/css/iconoir.css"
      />
      <link
        rel="stylesheet"
        href="https://maxst.icons8.com/vue-static/landings/line-awesome/line-awesome/1.3.0/css/line-awesome.min.css"
      />
    </Helmet>
  );
};

export default MetaTags;