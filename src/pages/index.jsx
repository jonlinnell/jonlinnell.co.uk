import Head from "next/head";
import Heading from "../components/heading";
import InlineHighlight from "../components/inline-highlight";

const DARK = "dark";

const toggleDarkMode = () => {
  if (!document) return;

  if (document.documentElement.classList.contains(DARK)) {
    document.documentElement.classList.remove(DARK);
  } else {
    document.documentElement.classList.add(DARK);
  }
};

export default function Home() {
  return (
    <div>
      <Head>
        <title>Jon Linnell</title>
        <link rel="shortcut icon" type="image/png" href="/icon.png" />
      </Head>

      <main className="bg-gray-100 dark:bg-brand-darkest text-blue text-gray-900 dark:text-red-50 min-h-screen border-t-4 border-brand-primary dark:border-brand-lightest">
        <article id="who-am-i" className="p-4 md:flex md:flex-wrap md:flex-col">
          <Heading variant="h1" extraClassNames="mt-0">
            Hello, I&apos;m Jon
          </Heading>
          <p>
            I&apos;m a <InlineHighlight>Product Engineer</InlineHighlight>,{" "}
            <InlineHighlight>photographer</InlineHighlight>, and{" "}
            <InlineHighlight>general purpose nerd</InlineHighlight> from the Midlands, based in
            London.
          </p>

          <button
            className="absolute right-6 top-6 md:h-8 md:w-8 h-6 w-6 bg-brand-darkest dark:bg-brand-lightest focus:outline-none rounded"
            onClick={toggleDarkMode}
          >
            &nbsp;
          </button>
        </article>

        <article className="p-4 mt-4 md:mt-2">
          <Heading variant="h2">A bit about me</Heading>
          <div className="md:container md:grid md:grid-cols-3 md:gap-6">
            <div>
              <Heading variant="h3">Skills I Have</Heading>
              <p className="mt-2">
                I&apos;m a software &apos;engineer&apos;, with a value/delivery-oriented mindset and
                a commitment to solid coding standards. (ie I&apos;m not afraid of writing tests.)
              </p>
              <p className="mt-2">
                I have a Communications BSc with a diploma in International Studies, and a life-long
                love of code and nerd-related stuff.
              </p>
              <p className="mt-2">
                The languages in which I&apos;m most proficient are{" "}
                <InlineHighlight>JavaScript</InlineHighlight> and{" "}
                <InlineHighlight>TypeScript</InlineHighlight>.
              </p>
              <p className="mt-2">
                I&apos;ve done a bit of work in <InlineHighlight>Python</InlineHighlight>, and I
                know just enough <InlineHighlight>Go</InlineHighlight> to be able to order food in a
                restaurant and ask where the bathroom is.
              </p>
              <p className="mt-2">
                My oldest web app still out in the wild is a distribution and management platform
                for conference talks. It is a server-rendered monolithic monstrosity that I wrote
                mainly in Perl when I was a teenager and did not know any better.
              </p>
              <p className="mt-2">
                More recently, I build solutions to complex business problems reaching wide
                audiences, using modern approaches like cloud infrastructure, serverless computing,
                containerisation, event-driven architectures, and fancy light-on-dark colour
                schemes.
              </p>
              <p className="mt-2">
                I&apos;m conversationally proficient in French 🇫🇷. I have varying basic levels of
                Spanish 🇪🇸, Polish 🇵🇱, Mandarin Chinese 🇨🇳, and Swedish 🇸🇪. I&apos;m still working
                on my English 🇬🇧.
              </p>
              <p className="mt-2">
                I can also be found exploring cities wielding one of my SLRs. You can see some of my
                photography <a href="#">here</a>.
              </p>
              {/* <p>Want to know more? Why not get in touch 📧</p> */}
            </div>
            <div>
              <Heading variant="h3">Latest Posts</Heading>
            </div>
            <div>
              <Heading variant="h3">Some tiny projects I&apos;ve done</Heading>
            </div>
          </div>
        </article>
        <footer className="text-sm font-extralight text-brand-dark dark:text-brand-contrast md:absolute md:bottom-2 pb-2 min-w-full text-center">
          &copy; {new Date().getFullYear()} Jon Linnell {process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS_ID}
        </footer>
      </main>
    </div>
  );
}
