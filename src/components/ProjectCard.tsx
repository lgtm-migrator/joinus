import React from 'react'
import { Card } from 'semantic-ui-react'

import ProjectCardButton from './ProjectCardButton'

export interface ProjectCardProps {
  projectTitle: string
  projectDescription: string
  projectSubtitle: string
  upper: boolean
}

function ProjectCard({
  projectTitle,
  projectDescription,
  projectSubtitle,
  upper,
}: ProjectCardProps) {
  return (
    <Card style={{ width: '32%' }}>
      {/*TODO schönere lösung finden (32%)*/}
      {upper ? '' : <ProjectCardButton up={upper} />}
      <Card.Content attached="top">
        <Card.Header>{projectTitle}</Card.Header>
        <Card.Meta>{projectSubtitle}</Card.Meta>
        <Card.Description>{projectDescription}</Card.Description>
      </Card.Content>
      {upper ? <ProjectCardButton up={upper} /> : ''}
    </Card>
  )
}

export default ProjectCard
