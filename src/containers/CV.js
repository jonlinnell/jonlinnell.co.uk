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

import posed from 'react-pose'
import styled from 'styled-components'

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
    }

    this.toggleJobs = this.toggleJobs.bind(this)
    this.toggleSkills = this.toggleSkills.bind(this)
  }

  toggleJobs = () => this.setState({ jobsIsOpen: !this.state.jobsIsOpen })

  toggleSkills = () => this.setState({ skillsIsOpen: !this.state.skillsIsOpen })

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
                <ContactLine iconClass="fa-envelope-o" href="mailto:jonlinnell@icloud.com">jonlinnell@icloud.com</ContactLine>
                <ContactLine iconClass="fa-linkedin" href="https://www.linkedin.com/in/jplinnell/">jplinnell</ContactLine>
                <ContactLine iconClass="fa-instagram" href="https://instagram.com/jonlinnell">jonlinnell</ContactLine>
                <ContactLine iconClass="fa-twitter" href="https://twitter.com/jplinnell">jplinnell</ContactLine>
                <ContactLine iconClass="fa-github" href="https://github.com/jonlinnell">jonlinnell</ContactLine>
              </HeroBody>
            </Hero>
          </Column>
          <Column isSize={9}>
            <CVContainer>
              <Container isFluid>
                <SectionTitle isSize={2}>Summary</SectionTitle>
                <Columns>
                  <Column isSize="1/3">
                    <p>I am a professional, outgoing problem-solver, turning my talents to IT management, projects, and software development. I am currently looking for employment as a JavaScript developer, using React and Node.js.</p>
                  </Column>
                  <Column isSize="1/3">
                    <p>Over the course of my professional career, I have built up a bedrock of experience working with people in task-oriented environments, with a strong focus on the customer, an emphasis on professionalism, and a holistic approach to my work,</p>
                  </Column>
                  <Column isSize="1/3">
                    <p>If you would like to get in touch with me, please send me an email, find me on LinkedIn, or comment on one of my photos on Instagram, if you feel like it.</p>
                    <p>My contact details are listed under my photo (on the left on a desktop, above on a phone/smaller screen.)</p>
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
                    end="present"
                    company="Loughborough University (London)"
                    post="Senior Support Officer for IT"
                    location="London, UK 🇬🇧"
                    isOpen={ jobsIsOpen }
                  >
                    <p>My current role comprises management of IT facilities and support at Loughborough University&apos;s London campus. My primary responsibility is guaranteeing an excellent level of IT provision and support to staff, researchers, and students, employing my extensive interests and experiences in IT for the benefit of the campus and its users.</p>
                    <p>Taking up the post just a month prior to the opening of the new campus in London, I was involved in the planning, deployment, and on-going support of the new services and systems being provisioned to the new campus. When the London campus moved from its temporary home to its permanent building, I was tasked with maintaining IT service continuity, and ensuring a coordinated effort by all parties to execute the move effectively.</p>
                    <p>I am often called upon to utilise my wider skills and expertise to augment my work. My other professional interests include audiovisual systems, web development, digital content production, and graphic design, all of which I have been able to use as part of my role.</p>
                  </Job>
                  <Job
                    start="July 2014"
                    end="July 2015"
                    company="Loughborough University"
                    post="IT Support Analyst"
                    location="Loughborough, UK 🇬🇧"
                    isOpen={ jobsIsOpen }
                  >
                    <p>I previously worked at Loughborough University&apos;s PC Clinic, a popular face-to-face helpdesk service for staff and students.</p>
                    <p>Alongside my regular support duties, I was involved in the university&apos; telephony infrastructure modernisation programme, rolling out a VoIP telephony system to the university. I was part of the team performing the upgrades at the consumer level, while working with the department to maintain service continuity. My duties included coordinating logistics, configuring hardware, liaising with departments to schedule upgrades, and providing aftercare.</p>
                  </Job>
                  <Job
                    start="September 2013"
                    end="June 2014"
                    company="Lycée Pierre Méchain"
                    post="English Language Assistant Teacher"
                    location="Laon, France 🇫🇷"
                    isOpen={ jobsIsOpen }
                  >
                    <p>My work as an English language teacher included assisting with the teaching of English in the high school, mostly by providing lessons in English language and conversation classes, as well as assisting in-class with teachers and their students.</p>
                    <p>I also worked with the teaching staff in other professional capacities, such as assisting in the preparation of lessons, preparing and marking exams, covering classes and so on.</p>
                    <p>I mainly tutored 20 classes of between 6 and 13 students per group, I worked in-class with a further 12 less developed groups and their respective teachers. I also ran extracurricular conversation classes for staff and students.</p>
                  </Job>
                  <Job
                    start="July 2012"
                    end="September 2013"
                    company="Loughborough University"
                    post="IT Support Analyst"
                    location="Loughborough, UK 🇬🇧"
                    isOpen={ jobsIsOpen }
                  >
                    <em>Please see above...</em>
                  </Job>
                  <Job
                    start="2010"
                    end="2011"
                    company="Amathole Museum"
                    post="IT/AV Coordinator"
                    location="King Williams Town, South Africa 🇿🇦"
                    isOpen={ jobsIsOpen }
                  >
                    <p>While living in South Africa, I worked at the Amathole Museum as an IT/AV coordinator, managing IT provision across the site, for academic and research teams as well as customers and visitors.</p>
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
                  <Skill title="HTML5, CSS3" isOpen={ skillsIsOpen }>
                    <p>HTML5 and CSS3 have been at the forefront of my work for longer than any of the modern JS libraries that seem to get much of the attention today.</p>
                    <p>As the literal foundation on which anything rendered in a browser is built, I recognise that a good understanding of these technologies is absolutely crucial to their effective utilisation.</p>
                  </Skill>
                  <Skill title="React" isOpen={ skillsIsOpen }>
                    <p>React is the UI library with which I feel most comfortable, and as such I generally use it for all web projects. I find it to be the most dynamic, straightforward, and logical way to build a user interface for the web.</p>
                    <p>I began learning React in 2016, and it has since become the tool that I reach for in almost every use case.</p>
                  </Skill>
                  <Skill title="Node.js" isOpen={ skillsIsOpen }>
                    <p>I began learning Node.js in 2015. The benefits of writing frontend and backend code in the same language are well documented, and for me it makes universal apps and full-stack development incredibly efficient and straightforward to accomplish. </p>
                  </Skill>
                  <Skill title="Apollo, GraphQL" isOpen={ skillsIsOpen }>
                    <p>In mid-2018, I began a project that would require some complex data storage and retrieval. I decided to combine this with an opportunity to learn GraphQL, by way of Apollo. I integrated Apollo Server into my backend code, and built the frontend with Apollo from the start.</p>
                    <p>Although I have much more to learn in this area, I can immediately see the benefits of using GraphQL over traditional REST APIs (where possible,) and I intend to prioritise development of this skill in the future.</p>
                  </Skill>
                  <Skill title="CSS-in-JS, styled-components" isOpen={ skillsIsOpen }>
                    <p>Although I have some experience with SASS, Less, and CSS preprocessors in general, they sometimes feel like a stopgap solution to a problem that requires an entirely new outlook. My favoured approach is CSS-in-JS, by way of Styled Components.</p>
                    <p>Maintaining a separate part of a codebase in another language with poor integration seems a little inefficient; I prefer the declarative and component-oriented nature of SC, and I&apos;ve made great use of it in recent projects.</p>
                  </Skill>
                  <Skill title="Redux" isOpen={ skillsIsOpen }>
                    <p>In the time before React&apos;s Context API became more widely used, I used Redux for all global state management. I&apos;ve used Redux for a few projects, and although I&apos;ve now replaced it with React&apos; Context API and Apollo in a few of them, I still use it, and it is a skill I actively maintain.</p>
                  </Skill>
                  <Skill title="Git, GitHub" isOpen={ skillsIsOpen }>
                    <p>All of my projects rely on Git for revision control. I generally try to stick to a clear branching practice for resolving bugs and developing new features, before merging changes into a development branch for testing, then to master for deployment.</p>
                  </Skill>
                  <Skill title="Amazon Web Services" isOpen={ skillsIsOpen }>
                    <p>As the trend towards decentralised cloud-computing continues to gain momentum, I have invested some time in learning how to use AWS effectively.</p>
                    <p>Although lack of practical necessity has limited my development in this area so far, it is a skill that I intend to improve in the near future.</p>
                  </Skill>
                  <Skill title="Databases" isOpen={ skillsIsOpen }>
                    <p>I generally use MySQL in my projects, using the Sequelize library for data modelling and abstraction away from SQL in the app.</p>
                  </Skill>
                  <Skill title="Webpack" />
                  <Skill title="Adobe Illustrator, Photoshop, InDesign" />
                  <Skill title="Linux" />
                  <Skill title="macOS" />
                  <Skill title="Windows 10" />
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

export default CV
