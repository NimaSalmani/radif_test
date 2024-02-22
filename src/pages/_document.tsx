import { Html, Head, Main, NextScript } from "next/document";
import Layout from "../components/elements/Layout/Layout/Layout";

export default function Document() {
  return (
    <Html lang="fa">
      <Head />
      <body dir="rtl">
        <Layout>
          <Main />
          <NextScript />
        </Layout>
      </body>
    </Html>
  );
}
