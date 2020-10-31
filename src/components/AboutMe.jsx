import styled from 'styled-components';

const AboutMeWrapper = styled.div`
  ul.technologies {
    display: grid;
  }

  @media (min-width: 320px) {
    ul.technologies {
      grid-template-columns: repeat(2, minmax(140px, 200px));
    }
  }
`;

const AboutMe = () => (
  <AboutMeWrapper id="about" className="mt-5 section">
    <h1>About Me</h1>
    <p className="mt-1">
      I&apos;m a Product-Minded Software engineer who takes Ownership, Builds, and Ships
      High-Quality Product Features that solve business problems. I keep myself in customer
      shoes and enjoy brainstorming with PM(s), UX Designer(s) to critique the Design, bring
      up the Pain points, discuss Edge Cases, etc. to smooth out the Feature Development process.
    </p>
    <p>
      Technically I hate to do the job of Bundlers and care much about writing a Code that is
      Testable and understandable by Human Beings (especially Junior Devs) rather than a Machine.
    </p>
    <p>
      In my free time, I contribute to Open Source, which is more of a hobby to me or, I create my
      Projects to experiment with New Features or explore new Technologies, but right now, my focus
      is to learn Backend Engineering.
    </p>
    <p className="mt-2">Here are a few Technologies I&apos;ve been working with recently:</p>
    <ul className="ml-1 technologies">
      <li>Vanilla JS</li>
      <li>React.js</li>
      <li>Ember.js</li>
      <li>Node.js</li>
      <li>PWA</li>
      <li>Serverless</li>
      <li>SSR and CSR</li>
      <li>NoSQL</li>
    </ul>
    <p className="mt-2">Technologies in my pipeline:</p>
    <ul className="ml-1 technologies">
      <li>GraphQL</li>
      <li>Python</li>
      <li>Docker</li>
      <li>gRPC</li>
    </ul>
  </AboutMeWrapper>
);

export default AboutMe;
