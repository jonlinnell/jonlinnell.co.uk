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

    const { skills, summary, employmentHistory } = this.props

    return (
      <Section>
        <Columns>
          <Column isSize={3}>
            <Hero>
              <HeroBody>
                <Title>Jon Linnell</Title>
                <Subtitle>JavaScript Developer and IT professional</Subtitle>
                <ProfilePicture image={headshot} />
                <ContactLine
                  iconClass="fa-envelope-o"
                  href="mailto:jonlinnell@icloud.com"
                >
                  jonlinnell@icloud.com
                </ContactLine>
                <ContactLine
                  iconClass="fa-phone"
                >
                  &#48;&#55;&#53;&#50;&#55;&#53;&#51;&#55;&#52;&#53;&#51;
                </ContactLine>
                <ContactLine
                  iconClass="fa-linkedin"
                  href="https://www.linkedin.com/in/jplinnell/"
                >
                  jplinnell
                </ContactLine>
                <ContactLine
                  iconClass="fa-instagram"
                  href="https://instagram.com/jonlinnell"
                >
                  jonlinnell
                </ContactLine>
                <ContactLine
                  iconClass="fa-twitter"
                  href="https://twitter.com/jplinnell"
                >
                  jplinnell
                </ContactLine>
                <ContactLine
                  iconClass="fa-github"
                  href="https://github.com/jonlinnell"
                >
                  jonlinnell
                </ContactLine>
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
                        job={job}
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
                        skill={skill}
                        isOpen={skillsIsOpen}
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
