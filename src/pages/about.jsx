import Head from "next/head";
import classNames from "classnames";
import InlineHighlight from "../components/inline-highlight";
import Layout from "../components/layout";
import Prose from "../components/prose";
import Heading from "../components/heading";
import { Paragraph } from "../components/paragraph";

export default function AboutMe() {
  return (
    <Layout
      title="About Me"
      classNames={classNames(["w-screen", "sm:w-11/12", "md:w-8/12", "xl:w-5/12"])}
    >
      <Head>
        <meta property="og:title" content="Jon Linnell | About me" />
        <meta
          property="og:description"
          content="Jon is a software engineer with a broad set of skills, focussing mainly on server-side applications and infrastructure, but can be bribed with cheese into doing web UIs."
        />
        <meta property="og:type" content="article" />
      </Head>
      <Prose className={classNames(["max-w-none"])}>
        <Heading variant="h1">A Bit About Me</Heading>
        <Paragraph>
          I'm a software engineer with a focus on value delivery and a commitment to solid coding
          standards. (i.e. I'm not afraid of writing tests)
        </Paragraph>
        <Paragraph>
          I have a BSc in Communications with a diploma in International Studies, and a life-long
          love of code and nerd-related stuff.
        </Paragraph>
        <Paragraph>
          <InlineHighlight>TypeScript</InlineHighlight> is my language of choice. I've been working
          with JavaScript for the better part of a decade, and I have{" "}
          {new Date().getFullYear() - 2015} years' experience implementing backend solutions with
          Node.js, and frontend UIs with React.
        </Paragraph>
        <Paragraph>
          <InlineHighlight>Go</InlineHighlight> is rapidly becoming my favourite language to work in. I've been working on my Go skills, and recently delivered my first professional Go project, a small CLI tool for developers in my current company.
        </Paragraph>
        <Paragraph>
          I can get by in <InlineHighlight>Python</InlineHighlight>, am generally proficient in
          shell scripting languages, IaC frameworks such as <InlineHighlight>Terraform</InlineHighlight>, and I know just enough{" "}
          <InlineHighlight>Rust</InlineHighlight> to be able to order food in a restaurant and ask
          where the bathroom is.
        </Paragraph>
        <Paragraph>
          My longest-running application still out in the wild is a website and bespoke CMS for
          sharing conference talks for a venue in my hometown. It is a server-rendered monolithic
          monstrosity that I wrote mainly in Perl when I was a teenager and did not know any better.
          That said, it's still running 15 years later with barely any maintenance.
        </Paragraph>
        <Paragraph>
          More recently, I build solutions to complex business problems reaching wide audiences,
          using modern approaches like cloud infrastructure, serverless computing, containerisation,
          event-driven architectures, and fancy light-on-dark colour schemes.
        </Paragraph>
        <Paragraph>
          I'm conversationally proficient in French 🇫🇷. I have varying basic levels of Spanish 🇪🇸,
          Polish 🇵🇱, Mandarin Chinese 🇨🇳, Swedish 🇸🇪, and Finnish 🇫🇮. I'm still working on my
          English 🇬🇧.
        </Paragraph>
        <Paragraph>
          I can also be found exploring cities wielding one of my SLRs. You can see some of my
          photography <a href="/photography">here</a>.
        </Paragraph>
        {/* <p>Want to know more? Why not get in touch 📧</p> */}
      </Prose>
    </Layout>
  );
}
