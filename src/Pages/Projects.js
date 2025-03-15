import React from 'react';
import PageHeader from './Components/PageHeader';
import { Card } from './Components/Card';
import projectsData from './Data/projectsData.json'

export default function Projects() {
  return (
    <div style={{ width: '100%' }}>
  <PageHeader title="Innovative Creation" subtitle="Projects" />

  <div
    style={{
      display: 'flex',
      flexWrap: 'wrap',
      justifyContent: 'center',
      marginBottom:"60px"
    }}
  >
   {projectsData.map((project, index) => (
        <Card
          key={index}
          title={project.title}
          content={project.content}
          imageUrl={project.imageUrl}
          githubLink={project.githubLink}
          hashtags={project.hashtags}
        />
      ))}
  </div>
</div>
  );
}
