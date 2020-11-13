import React from "react";

import Layout from "../components/Layout";
import SEO from "../components/seo";

const NotFoundPage = () => (
  <Layout >
    <SEO title="404: Not found" />
    <h1>404: PAGINA NÃO ENCONTRADA</h1>
    <p>Ooopppsss...! Essa Pagina não existe mais! </p>
  </Layout>
);

export default NotFoundPage;
