import clsx from "clsx";
import Heading from "@theme/Heading";
import HomepageFeatures from "@site/src/components/HomepageFeatures";
import HeroSlider from "@site/src/components/HeroSlider";
import Layout from "@theme/Layout";
import Link from "@docusaurus/Link";
import Tabs from "@theme/Tabs";
import TabItem from "@theme/TabItem";
import CodeBlock from "@theme/CodeBlock";
import type { ReactNode } from "react";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";

import styles from "./index.module.css";
import AnimatedLogo from "../components/AnimatedLogo";

const MARKETPLACE_URL =
  "https://marketplace.visualstudio.com/items?itemName=GanesanChandran.fetch-client";
const GITHUB_URL = "https://github.com/fetchclient/vscode-fetch-client";
const CLI_URL = "https://www.npmjs.com/package/@fetch-client/cli";

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <header className={styles.heroBanner}>
      <div className={clsx("container", styles.heroGrid)}>
        <div className={styles.heroText}>
          <AnimatedLogo size={96} />
          <Heading as="h1" className={styles.heroTitle}>
            {siteConfig.title}
          </Heading>
          <p className={styles.heroSubtitle}>{siteConfig.tagline}</p>
          <div className={styles.buttons}>
            <Link className="button button--primary" to={MARKETPLACE_URL}>
              Install from Marketplace
            </Link>
            <Link
              className={clsx("button button--outline", styles.ghost)}
              to="/docs/extension/introduction"
            >
              Get Started
            </Link>
            <Link
              className={clsx("button button--outline", styles.ghost)}
              to={GITHUB_URL}
            >
              GitHub
            </Link>
          </div>
          <div className={styles.badges}>
            <a href={GITHUB_URL}>
              <img
                alt="VS Code repository"
                src="https://img.shields.io/badge/Open%20Source-%E2%9D%A4-red.svg"
              />
            </a>
            <a href={MARKETPLACE_URL}>
              <img
                alt="Visual Studio Marketplace installs"
                src="https://vsmarketplacebadges.dev/installs-short/GanesanChandran.fetch-client.svg?logo=visualstudiocode&logoColor=white&color=007ACC&label=VS%20Code%20installs"
              />
            </a>
            <a href={MARKETPLACE_URL}>
              <img
                alt="Visual Studio Marketplace version"
                src="https://vsmarketplacebadges.dev/version-short/GanesanChandran.fetch-client.svg?logo=visualstudiocode&logoColor=white&color=007ACC&label=VS%20Code"
              />
            </a>
            <a href={CLI_URL}>
              <img
                alt="npm downloads"
                src="https://img.shields.io/npm/dt/@fetch-client/cli?color=4cb70f&logo=npm&label=npm%20downloads"
              />
            </a>
            <a href={CLI_URL}>
              <img
                alt="npm cli version"
                src="https://img.shields.io/npm/v/@fetch-client/cli?color=4cb70f&logo=npm&label=npm"
              />
            </a>
          </div>
        </div>
        <HeroSlider />
      </div>
    </header>
  );
}

const steps = [
  {
    title: "Install",
    text: "Add Fetch Client from the VS Code Marketplace. No sign-up needed.",
  },
  {
    title: "Send a request",
    text: "Create a request, press Send, and inspect the response in the editor.",
  },
  {
    title: "Test and automate",
    text: "Add tests, run collections, and reuse them in CI with the CLI.",
  },
];

function QuickStart() {
  return (
    <section className={styles.section}>
      <div className="container">
        <Heading as="h2" className={styles.sectionTitle}>
          Up and running in minutes
        </Heading>
        <ol className={styles.steps}>
          {steps.map((s, i) => (
            <li key={s.title} className={styles.step}>
              <span className={styles.stepNum}>{i + 1}</span>
              <Heading as="h3">{s.title}</Heading>
              <p>{s.text}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

function CliSection() {
  return (
    <section className={clsx(styles.section, styles.sectionAlt)}>
      <div className={clsx("container", styles.cliGrid)}>
        <div>
          <Heading as="h2" className={styles.sectionTitle}>
            Take your collections to CI/CD
          </Heading>
          <p>
            Run the same requests, tests and quality gates from your terminal or
            pipeline with the Fetch Client CLI.
          </p>
          <Link className="button button--primary" to="/docs/cli/introduction">
            Explore the CLI
          </Link>
        </div>
        <Tabs groupId="home-cli">
          <TabItem value="install" label="Install" default>
            <CodeBlock language="bash">
              npm install -g @fetch-client/cli
            </CodeBlock>
          </TabItem>
          <TabItem value="run" label="Run">
            <CodeBlock language="bash">
              {'fc-cli run --col "Regression Tests"'}
            </CodeBlock>
          </TabItem>
        </Tabs>
      </div>
    </section>
  );
}

function FinalCta() {
  return (
    <section className={clsx(styles.section, styles.cta)}>
      <div className="container text--center">
        <Heading as="h2" className={styles.sectionTitle}>
          Ready to test your APIs without leaving VS Code?
        </Heading>
        <div className={styles.buttonsCenter}>
          <Link className="button button--primary" to={MARKETPLACE_URL}>
            Install Fetch Client
          </Link>
          <Link className="button button--secondary" to="/blog">
            See what's new
          </Link>
        </div>
      </div>
    </section>
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
          "https://github.com/fetchclient/vscode-fetch-client",
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
        codeRepository: "https://github.com/fetchclient/vscode-fetch-client",
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
      <main>
        <HomepageFeatures />
        <QuickStart />
        <CliSection />
        <FinalCta />
      </main>
    </Layout>
  );
}
