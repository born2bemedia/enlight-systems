"use client";

import { useState } from "react";

/**
 * A report screenshot inside a fixed-height scrollable frame. The frame
 * reserves its height immediately (so the layout doesn't jump) and shows a
 * spinner until the remote image finishes loading.
 *
 * @param {{
 *   src: string,
 *   alt: string,
 *   markers?: { index: number, top_percent: number, section_label?: string }[],
 * }} props
 */
function ReportScreenshot({ src, alt, markers }) {
  const [loaded, setLoaded] = useState(false);

  return (
    <div className="report-page__shot-frame">
      {!loaded && (
        <span
          className="report-page__shot-spinner"
          role="status"
          aria-label="Loading screenshot"
        />
      )}
      <div className="report-page__shot-canvas">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={src}
          alt={alt}
          loading="lazy"
          onLoad={() => setLoaded(true)}
          onError={() => setLoaded(true)}
          style={{ opacity: loaded ? 1 : 0 }}
        />
        {loaded &&
          Array.isArray(markers) &&
          markers.map((marker) => (
            <span
              key={marker.index}
              className="report-page__shot-marker"
              style={{ top: `${marker.top_percent}%` }}
              title={marker.section_label}
            >
              {marker.index}
            </span>
          ))}
      </div>
    </div>
  );
}

export default ReportScreenshot;
