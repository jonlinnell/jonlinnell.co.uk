import {
  Section,
  Hero,
  HeroBody,
  Columns,
  Column,
  Title,
  Subtitle,
  Container,
} from 'bloomer'

import React from 'react'

import ProfilePicture from '../components/ProfilePicture'
import SectionTitle from '../components/SectionTitle'
import CVContainer from '../components/CVContainer'
import Job from '../components/Job'

import headshot from '../images/headshot.jpg'

export default () => (
  <Section>
    <Columns>
      <Column isSize={3}>
        <Hero isColor="light">
          <HeroBody>
            <Title>Jon Linnell</Title>
            <Subtitle>JavaScript Developer (FE, BE, FS,) and IT professional</Subtitle>
            <ProfilePicture image={headshot} />
          </HeroBody>
        </Hero>
      </Column>
      <Column isSize={9}>
        <CVContainer>
          <Container>
            <SectionTitle isSize={2}>Summary</SectionTitle>
            <p>
              I am a professional, lateral-thinking problem solver, turning my talents to IT management, projects, and software development.
            </p>
          </Container>
          <Container>
            <SectionTitle>Experience</SectionTitle>
            <ul>
              <Job start="July 2015" end="present" company="Loughborough University" post="Senior Support Officer for IT">
                <p>Something</p>
                <p>Something else</p>
              </Job>
              <Job start="September 2013" end="June 2014" company="Lycée Pierre Méchain" post="English Language Teacher">
                <p></p>
              </Job>
            </ul>
          </Container>
          <Container>
            <SectionTitle>Projects</SectionTitle>
          </Container>
          <Container>
            <SectionTitle>Skills</SectionTitle>
          </Container>
        </CVContainer>
      </Column>
    </Columns>
  </Section>
)
