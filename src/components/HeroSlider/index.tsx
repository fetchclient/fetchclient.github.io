import { useCallback, useEffect, useState } from "react";
import useBaseUrl from "@docusaurus/useBaseUrl";
import styles from "./styles.module.css";

type Slide = {
  label: string;
  caption: string;
  // Path under /static, e.g. "/img/response.png"
  image: string;
  alt: string;
};

// Add new slides here; the slider, dots and autoplay pick them up automatically.
const slides: Slide[] = [
  {
    label: "Extension",
    caption: "AI prompt generation for test cases and documentation",
    image: "/img/ai-prompt-tab.png",
    alt: "Fetch Client AI prompt generation tab in VS Code",
  },
  {
    label: "Extension",
    caption: "Build and send requests right inside VS Code",
    image: "/img/slide/slide-img-1.png",
    alt: "Fetch Client request editor in VS Code",
  },
  {
    label: "Extension",
    caption: "Inspect responses, tests and results in one place",
    image: "/img/slide/slide-img-2.png",
    alt: "Fetch Client response viewer",
  },
  {
    label: "CLI",
    caption: "Run collections from your terminal and CI/CD",
    image: "/img/cli/fc-run-col.png",
    alt: "Fetch Client CLI running a collection",
  },
  {
    label: "CLI",
    caption: "Performance tests from the command line",
    image: "/img/cli/cli-perf-run.png",
    alt: "Fetch Client CLI performance test output",
  },
];

const INTERVAL_MS = 4000;

function SlideImage({ slide, active }: { slide: Slide; active: boolean }) {
  const src = useBaseUrl(slide.image);
  return (
    <figure
      className={active ? styles.slideActive : styles.slide}
      aria-hidden={!active}
    >
      <img src={src} alt={slide.alt} loading="lazy" />
      <figcaption>
        <span className={styles.badge}>{slide.label}</span>
        {slide.caption}
      </figcaption>
    </figure>
  );
}

export default function HeroSlider() {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const count = slides.length;

  const go = useCallback(
    (next: number) => setIndex((next + count) % count),
    [count],
  );

  useEffect(() => {
    const reduce = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    if (paused || reduce || count < 2) return;
    const id = window.setInterval(
      () => setIndex((i) => (i + 1) % count),
      INTERVAL_MS,
    );
    return () => window.clearInterval(id);
  }, [paused, count]);

  return (
    <div
      className={styles.slider}
      role="region"
      aria-roledescription="carousel"
      aria-label="Fetch Client screenshots"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocus={() => setPaused(true)}
      onBlur={() => setPaused(false)}
    >
      <div className={styles.viewport} aria-live={paused ? "polite" : "off"}>
        {slides.map((s, i) => (
          <SlideImage key={s.image} slide={s} active={i === index} />
        ))}
      </div>
      {count > 1 && (
        <div className={styles.controls}>
          <button
            type="button"
            className={styles.arrow}
            aria-label="Previous slide"
            onClick={() => go(index - 1)}
          >
            &#8249;
          </button>
          <div className={styles.dots}>
            {slides.map((s, i) => (
              <button
                key={s.image}
                type="button"
                className={i === index ? styles.dotActive : styles.dot}
                aria-label={`Show slide ${i + 1}: ${s.caption}`}
                aria-current={i === index}
                onClick={() => go(i)}
              />
            ))}
          </div>
          <button
            type="button"
            className={styles.arrow}
            aria-label="Next slide"
            onClick={() => go(index + 1)}
          >
            &#8250;
          </button>
        </div>
      )}
    </div>
  );
}
