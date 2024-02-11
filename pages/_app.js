import "../styles/globals.css";
import { motion } from "framer-motion";
import Layout from "@components/Layout/Layout";
import Footer from "@components/Footer/Footer";
import AriSignature from "@components/AriSignature/AriSignature";
import { useEffect, useState } from "react";
import Head from "next/head";
import Script from "next/script";

function MyApp({ Component, pageProps, router }) {
  const [mode, setMode] = useState("light");

  useEffect(() => {
    // Add listener to update styles
    window
      .matchMedia("(prefers-color-scheme: dark)")
      .addEventListener("change", (e) =>
        onSelectMode(e.matches ? "dark" : "light")
      );

    // Setup dark/light mode for the first time
    onSelectMode(
      window.matchMedia("(prefers-color-scheme: dark)").matches
        ? "dark"
        : "light"
    );

    // Remove listener
    return () => {
      window
        .matchMedia("(prefers-color-scheme: dark)")
        .removeEventListener("change", () => {});
    };
  }, []);

  const onSelectMode = (mode) => {
    setMode(mode);
  };

  return (
    <>
      <Script
        strategy="lazyOnload"
        src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS_ID}`}
      />
      <Script id="gtag-init" strategy="lazyOnload">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS_ID}', {
            page_path: window.location.pathname,
          });
        `}
      </Script>
      <Head>
        {mode === "dark" ? (
          <link rel="icon" href="/faviconLight.ico" />
        ) : (
          <link rel="icon" href="/faviconDark.ico" />
        )}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="true"
        />
      </Head>
      <motion.div
        key={router.route}
        initial="pageInitial"
        animate="pageAnimate"
        variants={{
          pageInitial: {
            opacity: 0,
          },
          pageAnimate: {
            opacity: 1,
          },
        }}
      >
        <Layout>
          <Component {...pageProps} />
        </Layout>
        <Footer />
        <AriSignature />
      </motion.div>
    </>
  );
}

export default MyApp;
