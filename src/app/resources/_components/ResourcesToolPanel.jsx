"use client";

import DomainCheckForm from "@/src/component/home/DomainCheckForm";

function ResourcesToolPanel({ title, description, formId, onCheck }) {
  return (
    <div className="home-domain-panel resources-tool-panel">
      <div className="resources-tool-panel__content">
        <h2>{title}</h2>
        <p>{description}</p>
      </div>
      <DomainCheckForm id={formId} onSubmit={onCheck} />
    </div>
  );
}

export default ResourcesToolPanel;
