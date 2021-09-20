import React from 'react'
import { Grid, Header } from 'semantic-ui-react'
import { teams } from '../../data'
import SegmentContainer from '../SegmentContainer'
import TeamColumn from './TeamColumn'

export interface Props {
  backgroundColor: string
}

function TeamSegment({ backgroundColor }: Props) {
  return (
    <SegmentContainer
      id="teams"
      title="Unsere drei Teams"
      nextUp="#department"
      backgroundColor={backgroundColor}
    >
      <Grid.Row columns={3} divided centered>
        {teams.map((team) => (
          <TeamColumn key={team.teamName} {...team} />
        ))}
      </Grid.Row>
    </SegmentContainer>
  )
}

export default TeamSegment
