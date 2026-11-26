export function observeAnimationVisibility(element, onChange) {
  let intersecting = false;
  let active = false;

  function update() {
    const next = intersecting && !document.hidden;
    if (next === active) return;
    active = next;
    onChange(active);
  }

  const observer = new IntersectionObserver(([entry]) => {
    intersecting = entry.isIntersecting && entry.intersectionRatio > 0;
    update();
  });

  observer.observe(element);
  document.addEventListener("visibilitychange", update);
  return () => {
    observer.disconnect();
    document.removeEventListener("visibilitychange", update);
  };
}
