import Heading from "@theme/Heading";
import Link from "@docusaurus/Link";
import styles from "./styles.module.css";
import type { ReactNode } from "react";

type FeatureItem = {
  title: string;
  png: string;
  description: ReactNode;
  link?: string;
};

const FeatureList: FeatureItem[] = [
  {
    title: "Open Source",
    png: require("@site/static/img/open-source.png").default,
    link: "https://github.com/fetchclient/vscode-fetch-client",
    description: (
      <>
        Fetch Client is open source on GitHub, full transparency and
        community-driven development.
      </>
    ),
  },
  {
    title: "AI Prompt Integration",
    png: require("@site/static/img/ai-logo.png").default,
    link: "./docs/extension/features/advanced/ai-prompt-generation",
    description: (
      <>
        Prompt generation for create test cases in Fetch Client's JSON format
        and API documentation.
      </>
    ),
  },
  {
    title: "Lightweight & Fast",
    png: require("@site/static/img/api.png").default,
    link: "./docs/extension/introduction",
    description: (
      <>
        Minimal resource usage and instant response. Fetch Client is designed to
        be lightweight and fast.
      </>
    ),
  },
  {
    title: "No Backend Required",
    png: require("@site/static/img/no-backend.png").default,
    link: "./docs/extension/features/workspace",
    description: (
      <>
        Operates entirely on the client side. All data stored locally, ensuring
        privacy and reducing latency.
      </>
    ),
  },
  {
    title: "Code-Free Testing",
    png: require("@site/static/img/ui-testing.png").default,
    link: "./docs/extension/features/testing",
    description: (
      <>
        Test API responses without writing code. Create tests using a visual
        editor and see results immediately.
      </>
    ),
  },
  {
    title: "Pre-Run Requests",
    png: require("@site/static/img/checklist.png").default,
    link: "./docs/extension/features/advanced/pre-requests",
    description: (
      <>
        Run API requests before your main API call to prepare data,
        authentication, and chain APIs.
      </>
    ),
  },
  {
    title: "Scheduled Requests",
    png: require("@site/static/img/repeat.png").default,
    link: "./docs/extension/features/advanced/auto-requests",
    description: (
      <>
        Schedule and run API calls automatically with set intervals, reducing
        manual intervention.
      </>
    ),
  },
  {
    title: "Performance Test",
    png: require("@site/static/img/perf-test-logo.png").default,
    link: "./docs/extension/features/advanced/performance-testing",
    description: (
      <>
        Simulate concurrent users to measure API performance, throughput, and
        response times.
      </>
    ),
  },
  {
    title: "Data-Driven Test",
    png: require("@site/static/img/data-driven-logo.png").default,
    link: "./docs/extension/features/advanced/data-driven-testing",
    description: (
      <>
        Execute API requests with multiple datasets for efficient data-driven
        testing.
      </>
    ),
  },
  {
    title: "CLI",
    png: require("@site/static/img/cli-logo.png").default,
    link: "./docs/cli/introduction",
    description: (
      <>Command line for automation, scripting, and CI/CD integration.</>
    ),
  },
  {
    title: "API Quality Gate Test",
    png: require("@site/static/img/quality-check.png").default,
    link: "./docs/extension/features/advanced/api-quality-gate",
    description: (
      <>
        Automatically validate API quality with assertions, performance
        thresholds, and exit codes.
      </>
    ),
  },
  {
    title: "Mock Server",
    png: require("@site/static/img/mock-server.png").default,
    link: "./docs/extension/features/advanced/mock-server",
    description: (
      <>
        Create local mock APIs with customizable responses to test, and debug
        without backend dependencies.
      </>
    ),
  },
];

function Feature({ title, png, description, link }: FeatureItem) {
  const body = (
    <>
      <img src={png} alt="" className={styles.icon} loading="lazy" />
      <Heading as="h3">{title}</Heading>
      <p>{description}</p>
    </>
  );
  return link ? (
    <Link className={styles.card} to={link.replace(/^\.\//, "/")}>
      {body}
    </Link>
  ) : (
    <div className={styles.card}>{body}</div>
  );
}

export default function HomepageFeatures(): ReactNode {
  return (
    <section className={styles.features}>
      <div className="container">
        <Heading as="h2" className={styles.title}>
          Everything you need to build and test APIs
        </Heading>
        <div className={styles.grid}>
          {FeatureList.map((props) => (
            <Feature key={props.title} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
