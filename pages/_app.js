import "../styles/globals.css";
import { motion } from "framer-motion";
import Layout from "@components/Layout/Layout";
import Footer from "@components/Footer/Footer";
import AriSignature from "@components/AriSignature/AriSignature";
import { useEffect, useState } from "react";
import Head from "next/head";

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
