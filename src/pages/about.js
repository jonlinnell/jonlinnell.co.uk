import Heading from "../components/heading";
import InlineHighlight from "../components/inline-highlight";
import Layout from "../components/layout";

export default function AboutMe() {
  return (
    <Layout>
      <article>
        <Heading variant="h2">A bit about me</Heading>
        <div>
          <Heading variant="h3">Skills I Have</Heading>
          <p>
            I&apos;m a software &apos;engineer&apos;, with a value/delivery-oriented mindset and a
            commitment to solid coding standards. (ie I&apos;m not afraid of writing tests.)
          </p>
          <p>
            I have a Communications BSc with a diploma in International Studies, and a life-long
            love of code and nerd-related stuff.
          </p>
          <p>
            The languages in which I&apos;m most proficient are{" "}
            <InlineHighlight>JavaScript</InlineHighlight> and{" "}
            <InlineHighlight>TypeScript</InlineHighlight>.
          </p>
          <p>
            I&apos;ve done a bit of work in <InlineHighlight>Python</InlineHighlight>, and I know
            just enough <InlineHighlight>Go</InlineHighlight> to be able to order food in a
            restaurant and ask where the bathroom is.
          </p>
          <p>
            My oldest web app still out in the wild is a distribution and management platform for
            conference talks. It is a server-rendered monolithic monstrosity that I wrote mainly in
            Perl when I was a teenager and did not know any better.
          </p>
          <p>
            More recently, I build solutions to complex business problems reaching wide audiences,
            using modern approaches like cloud infrastructure, serverless computing,
            containerisation, event-driven architectures, and fancy light-on-dark colour schemes.
          </p>
          <p>
            I&apos;m conversationally proficient in French 🇫🇷. I have varying basic levels of
            Spanish 🇪🇸, Polish 🇵🇱, Mandarin Chinese 🇨🇳, and Swedish 🇸🇪. I&apos;m still working on my
            English 🇬🇧.
          </p>
          <p>
            I can also be found exploring cities wielding one of my SLRs. You can see some of my
            photography <a href="#">here</a>.
          </p>
          {/* <p>Want to know more? Why not get in touch 📧</p> */}
        </div>
      </article>
    </Layout>
  );
}
