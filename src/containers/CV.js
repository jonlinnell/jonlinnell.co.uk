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

import React, { PureComponent } from 'react'

import { withRouteData } from 'react-static'
import { Helmet } from 'react-helmet'

import posed from 'react-pose'
import styled from 'styled-components'
import qh from 'quick-hash'

import ContactLine from '../components/ContactLine'
import CVContainer from '../components/CVContainer'
import Job from '../components/Job'
import ProfilePicture from '../components/ProfilePicture'
import Qualification from '../components/Qualification'
import SectionTitle from '../components/SectionTitle'
import Skill from '../components/Skill'
import Summary from '../components/Summary'

import headshot from '../images/headshot.jpg'

const SectionHeaderWithButton = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;

  border-bottom: 1px solid ${({ theme: { primary } }) => primary};
  padding-bottom: 12px;
  margin-bottom: 12px;
`

const ExpandButton = styled.button`
  border: none;
  background: none;
  color: rgb(140, 140, 140);
  font-style: italic;
  padding: 6px;
  margin-left: auto;

  &:focus {
    outline: none;
  }
`

const JobsContainer = posed.ul()

class CV extends PureComponent {
  constructor(props) {
    super(props)

    this.state = {
      skillsIsOpen: false,
      jobsIsOpen: false,
    }

    this.toggleJobs = this.toggleJobs.bind(this)
    this.toggleSkills = this.toggleSkills.bind(this)
  }

  toggleJobs = () => this.setState(prevState => ({ jobsIsOpen: !prevState.jobsIsOpen }))

  toggleSkills = () => this.setState(prevState => ({ skillsIsOpen: !prevState.skillsIsOpen }))

  render() {
    const { jobsIsOpen, skillsIsOpen } = this.state

    const {
      basics: {
        name,
        strapline,
      },
      contacts,
      skills,
      summary,
      employmentHistory,
    } = this.props

    return (
      <Section>
        <Helmet>
          <title>{ `${name} – CV` }</title>
        </Helmet>
        <Columns>
          <Column isSize={3}>
            <Hero>
              <HeroBody>
                <Title>{ name }</Title>
                <Subtitle isSpaced>{ strapline }</Subtitle>
                <ProfilePicture image={headshot} />
                {
                  contacts.map(contact => <ContactLine key={Object.keys(contact)} {...contact} />)
                }
              </HeroBody>
            </Hero>
          </Column>
          <Column isSize={9}>
            <CVContainer>
              <Container isFluid>
                <SectionTitle>Summary</SectionTitle>
                <Summary summary={summary} />
              </Container>
              <Container isFluid>
                <SectionHeaderWithButton>
                  <Title isMarginless>Experience</Title>
                  <ExpandButton type="button" onClick={this.toggleJobs}>
                    {
                      jobsIsOpen
                        ? 'Hide all'
                        : 'Expand all'
                    }
                  </ExpandButton>
                </SectionHeaderWithButton>
                <JobsContainer>
                  {
                    employmentHistory.map(job => (
                      <Job
                        key={qh(`${job.title}${job.start}`)}
                        isOpen={jobsIsOpen}
                        {...job}
                      />
                    ))
                  }
                </JobsContainer>
              </Container>
              <Container isFluid>
                <SectionHeaderWithButton>
                  <Title isMarginless>Skills</Title>
                  <ExpandButton onClick={this.toggleSkills}>
                    {
                      skillsIsOpen
                        ? 'Hide all'
                        : 'Expand all'
                    }
                  </ExpandButton>
                </SectionHeaderWithButton>
                <ul>
                  {
                    skills.map(skill => (
                      <Skill
                        key={qh(skill.title)}
                        isOpen={skillsIsOpen}
                        {...skill}
                      />
                    ))
                  }
                </ul>
              </Container>
              <Container isFluid>
                <SectionTitle>Education</SectionTitle>
                <Qualification
                  start="2011"
                  end="2015"
                  institution="Loughborough University"
                  qualifications="BSc Communication and Media Studies; Second class, upper division (69%)"
                />
              </Container>
            </CVContainer>
          </Column>
        </Columns>
      </Section>
    )
  }
}

export default withRouteData(CV)
