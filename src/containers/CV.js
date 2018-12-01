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
      skills: props.skills,
    }

    this.toggleJobs = this.toggleJobs.bind(this)
    this.toggleSkills = this.toggleSkills.bind(this)
  }

  toggleJobs = () => this.setState(prevState => ({ jobsIsOpen: !prevState.jobsIsOpen }))

  toggleSkills = () => this.setState(prevState => ({ skillsIsOpen: !prevState.skillsIsOpen }))

  render() {
    const { jobsIsOpen, skillsIsOpen } = this.state

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
                <SectionTitle isSize={2}>Summary</SectionTitle>
                <Columns>
                  <Column isSize="1/4">
                    <p>
                      I am a professional, outgoing problem-solver, turning my talents to IT
                      management, projects, and software development. I am currently looking
                      for employment as a JavaScript developer, using React and Node.js.
                    </p>
                  </Column>
                  <Column isSize="1/4">
                    <p>
                      Over the course of my professional career, I have built up a bedrock of
                      experience working with people in task-oriented environments, with a strong
                      focus on the customer, an emphasis on professionalism, and a holistic
                      approach to my work.
                    </p>
                  </Column>
                  <Column isSize="1/4">
                    <p>
                      If you would like to get in touch with me, please send me an email, find me
                      on LinkedIn, or comment on one of my photos on Instagram, if you feel like
                      it.
                    </p>
                    <p>
                      My contact details are listed under my photo (on the left on a desktop, above
                      on a phone/smaller screen.)
                    </p>
                  </Column>
                </Columns>
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
                  <Job
                    start="July 2015"
                    company="Loughborough University (London)"
                    post="Senior Support Officer for IT"
                    location="London, UK 🇬🇧"
                    isOpen={jobsIsOpen}
                  >
                    <p>
                      My current role comprises management of IT facilities and support at
                      Loughborough University&apos;s London campus. My primary responsibility
                      is guaranteeing an excellent level of IT provision and support to staff,
                      researchers, and students, employing my extensive interests and
                      experiences in IT for the benefit of the campus and its users.
                    </p>
                    <p>
                      Taking up the post just a month prior to the opening of the new campus in
                      London, I was involved in the planning, deployment, and on-going support
                      of the new services and systems being provisioned to the new campus. When
                      the London campus moved from its temporary home to its permanent building,
                      I was tasked with maintaining IT service continuity, and ensuring a
                      coordinated effort by all parties to execute the move effectively.
                    </p>
                    <p>
                      I am often called upon to utilise my wider skills and expertise to augment
                      my work. My other professional interests include audiovisual systems, web
                      development, digital content production, and graphic design, all of which
                      I have been able to use as part of my role.
                    </p>
                  </Job>
                  <Job
                    start="July 2014"
                    end="July 2015"
                    company="Loughborough University"
                    post="IT Support Analyst"
                    location="Loughborough, UK 🇬🇧"
                    isOpen={jobsIsOpen}
                  >
                    <p>
                      I previously worked at Loughborough University&apos;s PC Clinic, a popular
                      face-to-face helpdesk service for staff and students.
                    </p>
                    <p>
                      Alongside my regular support duties, I was involved in the university&apos;s
                      telephony infrastructure modernisation programme, rolling out a VoIP
                      telephony system to the university. I was part of the team performing the
                      upgrades at the consumer level, while working with the department to maintain
                      service continuity. My duties included coordinating logistics, configuring
                      hardware, liaising with departments to schedule upgrades, and providing
                      aftercare.
                    </p>
                  </Job>
                  <Job
                    start="September 2013"
                    end="May 2014"
                    company="Lycée Pierre Méchain"
                    post="English Language Assistant Teacher"
                    location="Laon, France 🇫🇷"
                    isOpen={jobsIsOpen}
                  >
                    <p>
                      My work as an English language teacher included assisting with the teaching
                      of English in the high school, mostly by providing lessons in English
                      language and conversation classes, as well as assisting in-class with
                      teachers and their students.
                    </p>
                    <p>
                      I also worked with the teaching staff in other professional capacities, such
                      as assisting in the preparation of lessons, preparing and marking exams,
                      covering classes and so on.
                    </p>
                    <p>
                      I mainly tutored 20 classes of between 6 and 13 students per group, I worked
                      in-class with a further 12 less developed groups and their respective
                      teachers. I also ran extracurricular conversation classes for staff and
                      students.
                    </p>
                  </Job>
                  <Job
                    start="July 2012"
                    end="September 2013"
                    company="Loughborough University"
                    post="IT Support Analyst"
                    location="Loughborough, UK 🇬🇧"
                    isOpen={jobsIsOpen}
                  >
                    <em>Please see above...</em>
                  </Job>
                  <Job
                    start="2010"
                    end="2011"
                    company="Amathole Museum"
                    post="IT/AV Coordinator"
                    location="King Williams Town, South Africa 🇿🇦"
                    isOpen={jobsIsOpen}
                  >
                    <p>
                      While living in South Africa, I worked at the Amathole Museum as an IT/AV
                      coordinator, managing IT provision across the site, for academic and research
                      teams as well as customers and visitors.
                    </p>
                  </Job>
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
                    this.state.skills.map(skill => <Skill key={qh(skill.title)} skill={skill} isOpen={skillsIsOpen} />)
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
