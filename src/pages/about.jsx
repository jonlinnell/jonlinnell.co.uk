import InlineHighlight from "../components/inline-highlight";
import Layout from "../components/layout";
import Prose from "../components/prose";

export default function AboutMe() {
  return (
    <Layout title="About Me" alignCenter>
      <Prose>
        <h2>A bit about me</h2>
        <p className="mt-2">
          I'm a software engineer with a focus on value delivery and a commitment to solid coding
          standards. (i.e. I'm not afraid of writing tests)
        </p>
        <p className="mt-2">
          I have a BSc in Communications with a diploma in International Studies, and a life-long
          love of code and nerd-related stuff.
        </p>
        <p className="mt-2">
          <InlineHighlight>TypeScript</InlineHighlight> is my language of choice. I've been working
          with JavaScript for the better part of a decade, and I have{" "}
          {new Date().getFullYear() - 2015} years' experience implementing backend solutions with
          Node.js, and frontend UIs with React.
        </p>
        <p className="mt-2">
          I can get by in <InlineHighlight>Python</InlineHighlight>, am generally proficient in
          shell scripting languages, IaC frameworks such as{" "}
          <InlineHighlight>Terraform</InlineHighlight>, a small amount of{" "}
          <InlineHighlight>Rust</InlineHighlight>, and I know just enough{" "}
          <InlineHighlight>Go</InlineHighlight> to be able to order food in a restaurant and ask
          where the bathroom is.
        </p>
        <p className="mt-2">
          My longest-running application still out in the wild is a website and bespoke CMS for
          sharing conference talks for a venue in my hometown. It is a server-rendered monolithic
          monstrosity that I wrote mainly in Perl when I was a teenager and did not know any better.
          That said, it's still running 15 years later with barely any maintenance.
        </p>
        <p className="mt-2">
          More recently, I build solutions to complex business problems reaching wide audiences,
          using modern approaches like cloud infrastructure, serverless computing, containerisation,
          event-driven architectures, and fancy light-on-dark colour schemes.
        </p>
        <p className="mt-2">
          I'm conversationally proficient in French 🇫🇷. I have varying basic levels of Spanish 🇪🇸,
          Polish 🇵🇱, Mandarin Chinese 🇨🇳, Swedish 🇸🇪, and Finnish 🇫🇮. I'm still working on my
          English 🇬🇧.
        </p>
        <p className="mt-2">
          I can also be found exploring cities wielding one of my SLRs. You can see some of my
          photography <a href="#">here</a>, when I get around to that part of the site.
        </p>
        {/* <p>Want to know more? Why not get in touch 📧</p> */}
      </Prose>
    </Layout>
  );
}
