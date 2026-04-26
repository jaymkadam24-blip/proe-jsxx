import { useState, useEffect } from "react";

/**
 * Simulates a page-load delay so skeletons are visible on navigation.
 * Returns `loading: true` for `durationMs` ms, then flips to false.
 */
export function usePageLoader(durationMs = 700) {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    const timer = setTimeout(() => setLoading(false), durationMs);
    return () => clearTimeout(timer);
  }, [durationMs]);

  return loading;
}
