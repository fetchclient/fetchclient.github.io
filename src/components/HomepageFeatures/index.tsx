import clsx from "clsx";
import Heading from "@theme/Heading";
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
    link: "https://github.com/Ganesan-Chandran/vscode-fetch-client",
    description: (
      <>
        Fetch Client is open source on GitHub, full transparency and
        community-driven development.
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
        Schedule and run API calls automatically with set intervals, reducing
        manual intervention.
      </>
    ),
  },
];

function Feature({ title, png, description, link }: FeatureItem) {
  return (
    <div className={clsx("col col--4")}>
      <div className="text--center">
        <img
          src={png}
          alt={title}
          style={{ height: "100px", width: "100px" }}
        />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">
          {link ? (
            <a
              className="custom-link"
              href={link}
              target="_blank"
              rel="noopener noreferrer"
            >
              {title}
            </a>
          ) : (
            title
          )}
        </Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

function chunkArray<T>(array: T[], size: number): T[][] {
  const chunks: T[][] = [];
  for (let i = 0; i < array.length; i += size) {
    chunks.push(array.slice(i, i + size));
  }
  return chunks;
}

export default function HomepageFeatures(): ReactNode {
  const rows = chunkArray(FeatureList, 3);

  return (
    <section className={styles.features}>
      <div className="container">
        {rows.map((row, rowIndex) => (
          <div
            key={rowIndex}
            className="row"
            style={{ justifyContent: "center" }}
          >
            {row.map((props, idx) => (
              <Feature key={idx} {...props} />
            ))}
          </div>
        ))}
      </div>
    </section>
  );
}
