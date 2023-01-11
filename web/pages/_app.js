import React from "react";
import "../styles/globals.css";
import Layout from "../components/Layout";


function MyApp({ Component, pageProps }) {
  return (
    <React.StrictMode>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </React.StrictMode>
  );
}

export default MyApp;
