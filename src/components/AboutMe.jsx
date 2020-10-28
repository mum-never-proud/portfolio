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
      I&apos;m a Software Engineer - Frontend with over 3 years of Experience. I enjoy my
      obsessive attention to detail while developing Appilcations.
    </p>
    <ul className="ml-1">
      <li>
        I enjoy Creating, Debugging and Optimizing Websites, WebApps or any thing in between.
      </li>
      <li>
        An Urge to Learn, Challenge and Understand new Technologies.
      </li>
    </ul>
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
  </AboutMeWrapper>
);

export default AboutMe;
