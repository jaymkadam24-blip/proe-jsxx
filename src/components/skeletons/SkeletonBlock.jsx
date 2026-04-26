/**
 * SkeletonBlock — a single shimmer rectangle.
 * Pass any Tailwind width / height / rounded / className to shape it.
 */
export function SkeletonBlock({ className = "" }) {
  return (
    <div
      className={`skeleton-block ${className}`}
      aria-hidden="true"
    />
  );
}
