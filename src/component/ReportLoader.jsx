"use client";

import { useEffect, useState } from "react";

/**
 * Stylized waiting animation used on the report pages while a job runs.
 * Cycles through reassuring status messages so the wait feels alive.
 *
 * @param {{ title?: string, messages?: string[], note?: string }} props
 */
function ReportLoader({ title = "Working on it…", messages = [], note }) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (messages.length <= 1) return undefined;
    const id = setInterval(() => {
      setIndex((prev) => (prev + 1) % messages.length);
    }, 2600);
    return () => clearInterval(id);
  }, [messages.length]);

  return (
    <div className="report-loader" role="status" aria-live="polite">
      <div className="report-loader__orbit" aria-hidden="true">
        <span className="report-loader__ring" />
        <span className="report-loader__ring" />
        <span className="report-loader__ring" />
        <span className="report-loader__core" />
        <span className="report-loader__scan" />
      </div>

      <h2 className="report-loader__title">{title}</h2>

      {messages.length > 0 && (
        <p className="report-loader__message" key={index}>
          {messages[index]}
        </p>
      )}

      <div className="report-loader__bar" aria-hidden="true">
        <span />
      </div>

      {note && <p className="report-loader__note">{note}</p>}
    </div>
  );
}

export default ReportLoader;
