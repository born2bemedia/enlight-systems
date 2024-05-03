import React from 'react';
import "@/public/scss/resources.scss";
import ResourcesHero from './_components/ResourcesHero';
import ResourcesLoop from './_components/ResourcesLoop';

function ResourcesPage() {
  return (
    <>
      <ResourcesHero />
      <ResourcesLoop />
    </>
  )
}

export default ResourcesPage