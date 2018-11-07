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

import posed from 'react-pose'

import ContactLine from '../components/ContactLine'
import CVContainer from '../components/CVContainer'
import Job from '../components/Job'
import ProfilePicture from '../components/ProfilePicture'
import Qualification from '../components/Qualification'
import SectionTitle from '../components/SectionTitle'
import Skill from '../components/Skill'

import headshot from '../images/headshot.jpg'

const JobsContainer = posed.ul()

export default () => (
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
                <p>I am a professional, outgoing problem-solver, turning my talents to IT management, projects, and software development. I am currently looking for employment as a software developer; either frontend using React, backend using Node.js, or fullstack.</p>
              </Column>
              <Column isSize="1/3">
                <p>Over the course of my professional career, I have built up a bedrock of experience working with people in task-oriented environments, with a strong focus on the customer (or the user, if you prefer that terminology) and an emphasis on professionalism and a holistic approach to my work,</p>
              </Column>
              <Column isSize="1/3">
                <p>If you would like to get in touch with me, please send me an email, find me on LinkedIn, or comment on one of my photos on Instagram, if you really want. My contact details are available to your left.</p>
              </Column>
            </Columns>
          </Container>
          <Container isFluid>
            <SectionTitle>Experience</SectionTitle>
            <JobsContainer>
              <Job
                start="July 2015"
                end="present"
                company="Loughborough University (London)"
                post="Senior Support Officer for IT"
                location="London, UK 🇬🇧"
              >
                <p>My current role comprises management and oversight of the IT services, facilities, and associated support structures at Loughborough University&apos;s London campus. My primary responsibilities are guaranteeing an excellent level of IT provision and technical support to staff and students, and employing my extensive interests and experiences in IT for the benefit of our staff, students, and the campus as a whole.</p>
                <p>Taking up the post just a month prior to the opening of the new campus in London, I was involved in the planning, deployment, and on-going support of the new services and systems being provisioned to the new campus. When the London campus moved from its temporary home to its permanent building, I was tasked with maintaining IT service continuity, and ensuring a coordinated effort by all parties to execute the move effectively.</p>
                <p>I have an excellent knowledge of HE policy, procedure, systems, and internal mechanisms, and I am often called upon to utilise my skills and expertise to improve and integrate technical aspects into these. My wider interests include audiovisual systems, web development, digital content production, and graphic design, all of which I have been able to use as part of my role.</p>
              </Job>
              <Job
                start="July 2014"
                end="July 2015"
                company="Loughborough University"
                post="IT Support Analyst"
                location="Loughborough, UK 🇬🇧"
              >
                <p>I previously worked in first-line support for Loughborough University&apos;s PC Clinic, a popular face-to-face helpdesk service for staff and students.</p>
                <p>Alongside my regular support duties, I was involved in the implementation of an extensive, campus-wide telephony infrastructure upgrade from an analogue network to a VoIP system. I was part of the team performing the upgrades at the consumer level, while working with the department to maintain service continuity. My duties included coordinating logistics, configuring hardware, liaising with departments to schedule upgrades, and providing aftercare.</p>
              </Job>
              <Job
                start="September 2013"
                end="June 2014"
                company="Lycée Pierre Méchain"
                post="English Language Teacher"
                location="Laon, France 🇫🇷"
              >
                <p>My duties as an English language tutor included assisting with the teaching of English in the high school by providing lessons in English language and conversation classes, as well as working in-class with teachers and their students.</p>
                <p>I also worked with the teaching staff in other professional capacities, such as assisting in the preparation of lessons, preparing and marking exams, covering classes and so on.</p>
                <p>I mainly tutored 20 classes of between 6 and 13 students per group, I worked in-class with a further 12 less developed groups and their respective teachers, and I also ran extracurricular conversation classes for staff and students.</p>
              </Job>
              <Job
                start="July 2012"
                end="September 2013"
                company="Loughborough University"
                post="IT Support Analyst"
                location="Loughborough, UK 🇬🇧"
              >
                <em>Please see above...</em>
              </Job>
              <Job
                start="2010"
                end="2011"
                company="Amathole Museum"
                post="IT/AV Coordinator"
                location="King Williams Town, South Africa 🇿🇦"
              >
                <p>While living in South Africa, I worked for the Amathole Museum as an IT/AV coordinator, managing IT provision across the site, for academic and research teams as well as customers and visitors.</p>
              </Job>
            </JobsContainer>
          </Container>
          <Container isFluid>
            <SectionTitle>Skills</SectionTitle>
            <ul>
              <Skill title="HTML5, CSS3">
                <p>HTML5 and CSS3 have been at the forefront of my work since before React existed. As the literal foundations of anything rendered in a browser, I recognise that a good understanding of these technologies is absolutely crucial.</p>
              </Skill>
              <Skill title="React">
                <p>React is my go-to UI library for all web projects. I find it to be the most dynamic, straightforward, and logical way to build a user interface for the web.</p>
                <p>I began learning React in 2016, and it has since become the tool that I reach for in almost every use case.</p>
              </Skill>
              <Skill title="Node.js">
                <p>I began learning Node.js in 2015, and I haven&apos;t regretted it for a moment. The benefits of writing frontend and backend code in the same language are well documented, and for me it makes universal apps and full-stack development incredibly efficient and straightforward to accomplish. </p>
              </Skill>
              <Skill title="Apollo">
                <p>In mid-2018, I began a project that would require some complex data storage and retrieval. I decided to combine this with an opportunity to learn GraphQL, by way of Apollo. I integrated Apollo Server into my backend code, and built the frontend with Apollo from the start.</p>
                <p>Although I have much more to learn in this area, I can immediately see the benefits of using GraphQL over traditional REST APIs (where possible.)</p>
              </Skill>
              <Skill title="Redux">
                <p>In the time before React&apos;s Context API became more widely used, I used Redux for all global state management. I&apos;ve used Redux for a few projects, and although I&apos;ve now replaced it with Context and Apollo in a few of them, I still use it, and it is a skill I actively maintain.</p>
              </Skill>
              <Skill title="Git, GitHub">
                <p>All of my projects rely on Git for revision control. I generally try to stick to a clear branching practice for resolving bugs and developing new features, before merging changes into a development branch for testing, then to master for deployment.</p>
              </Skill>
              <Skill title="CSS-in-JS, styled-components">
                <p>Although I have some experience with SASS, Less, and CSS preprocessors in general, they sometimes feel like a stopgap solution to a problem that requires an entirely new outlook. My favoured approach is CSS-in-JS, by way of Styled Components.</p>
                <p>Maintaining a separate part of a codebase in another language with poor integration seems a little inefficient; I prefer the declarative and component-oriented nature of SC, and I&apos;ve made great use of it in recent projects.</p>
              </Skill>
              <Skill title="Webpack" />
              <Skill title="Linux" />
            </ul>
          </Container>
          <Container isFluid>
            <SectionTitle>Education</SectionTitle>
            <Qualification
              start="2011"
              end="2015"
              institution="Loughborough University"
              qualifications="BSc Media and Communication, Upper Second (69%)"
            />
          </Container>
        </CVContainer>
      </Column>
    </Columns>
  </Section>
)
