import clsx from "clsx";
import Heading from "@theme/Heading";
import HomepageFeatures from "@site/src/components/HomepageFeatures";
import Layout from "@theme/Layout";
import Link from "@docusaurus/Link";
import ReactMarkdown from "react-markdown";
import type { ReactNode } from "react";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";

import styles from "./index.module.css";
import AnimatedLogo from "../components/AnimatedLogo";

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <header className={styles.heroBanner}>
      <div className="container">
        <AnimatedLogo />
        <Heading as="h1" className="hero__title">
          {siteConfig.title}
        </Heading>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
        <div className={styles.buttons}>
          <Link
            className={clsx(
              "button button--secondary button--lg",
              styles.buttonSpace,
              styles.buttonLeftSpace,
            )}
            to="https://marketplace.visualstudio.com/items?itemName=GanesanChandran.fetch-client"
          >
            ⬇️ Download
          </Link>
          <Link
            className={clsx(
              "button button--secondary button--lg",
              styles.buttonSpace,
            )}
            to="/docs/extension/introduction"
          >
            ▶️ Get Started
          </Link>
        </div>
        <div className={styles.detailsAlignement}>
          <ReactMarkdown>
            [![Visual Studio Marketplace
            Installs](https://vsmarketplacebadges.dev/installs-short/GanesanChandran.fetch-client.svg)](https://marketplace.visualstudio.com/items?itemName=GanesanChandran.fetch-client)
            [![Visual Studio
            Version](https://vsmarketplacebadges.dev/version-short/GanesanChandran.fetch-client.svg)](https://marketplace.visualstudio.com/items?itemName=GanesanChandran.fetch-client)
          </ReactMarkdown>
        </div>
      </div>
    </header>
  );
}

export default function Home(): ReactNode {
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": "https://fetchclient.github.io/#organization",
        name: "Fetch Client",
        url: "https://fetchclient.github.io/",
        logo: "https://fetchclient.github.io/img/fetch-client.png",
        sameAs: [
          "https://github.com/Ganesan-Chandran/vscode-fetch-client",
          "https://marketplace.visualstudio.com/items?itemName=GanesanChandran.fetch-client",
        ],
      },
      {
        "@type": "SoftwareApplication",
        name: "Fetch Client",
        applicationCategory: "DeveloperApplication",
        operatingSystem: "Windows, macOS, Linux",
        description:
          "Free and open-source REST API client for Visual Studio Code with API testing, automation, data-driven testing, performance testing and CLI support.",
        url: "https://fetchclient.github.io/",
        image: "https://fetchclient.github.io/img/fetch-client.png",
        codeRepository:
          "https://github.com/Ganesan-Chandran/vscode-fetch-client",
        isAccessibleForFree: true,
        author: {
          "@id": "https://fetchclient.github.io/#organization",
        },
      },
    ],
  };
  return (
    <Layout
      title="Fetch Client - Free REST API Client for VS Code"
      description="Free, open-source REST API client for VS Code. Test and automate requests, run performance and data-driven tests, and execute API collections with the CLI."
    >
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(structuredData),
        }}
      />
      <HomepageHeader />
      <main className={styles.mainStyle}>
        <HomepageFeatures />
      </main>
    </Layout>
  );
}
