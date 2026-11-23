import ExecutionEnvironment from "@docusaurus/ExecutionEnvironment";

function closeOverlay(): void {
  document.querySelector(".img-zoom-overlay")?.remove();
  document.body.classList.remove("img-zoom-open");
}

function openOverlay(source: HTMLImageElement): void {
  closeOverlay();
  const overlay = document.createElement("div");
  overlay.className = "img-zoom-overlay";
  overlay.setAttribute("role", "dialog");
  overlay.setAttribute("aria-modal", "true");
  overlay.setAttribute("aria-label", source.alt || "Enlarged image");
  const img = document.createElement("img");
  img.src = source.currentSrc || source.src;
  img.alt = source.alt;
  overlay.appendChild(img);
  overlay.addEventListener("click", closeOverlay);
  document.body.appendChild(overlay);
  document.body.classList.add("img-zoom-open");
}

function zoomTarget(target: EventTarget | null): HTMLImageElement | null {
  if (!(target instanceof HTMLImageElement)) return null;
  if (!target.closest(".markdown") || target.closest("a, button")) return null;
  return target;
}

if (ExecutionEnvironment.canUseDOM) {
  document.addEventListener("click", (e) => {
    const img = zoomTarget(e.target);
    if (img) openOverlay(img);
  });
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
      closeOverlay();
    } else if (e.key === "Enter") {
      const img = zoomTarget(document.activeElement);
      if (img) openOverlay(img);
    }
  });
}

export function onRouteDidUpdate(): void {
  closeOverlay();
  document
    .querySelectorAll<HTMLImageElement>(".markdown img")
    .forEach((img) => {
      if (img.closest("a, button")) return;
      img.setAttribute("tabindex", "0");
      img.classList.add("zoomable");
    });
}
