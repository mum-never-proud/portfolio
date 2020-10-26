import styled from 'styled-components';

const AboutMeWrapper = styled.div``;

const AboutMe = () => (
  <AboutMeWrapper id="about" className="mt-5 section">
    <h1>About Me</h1>
    <p className="mt-1">Hello! I&apos;m Abith Hussain, a Software Engineer based in Chennai, IN.</p>
    <p>
      I enjoy creating things that live on the internet, whether that be websites, applications,
      {' '}
      or anything in between. My goal is to always build products that provide pixel-perfect,
      {' '}
      performant experiences.
    </p>
    <p>
      Shortly after graduating from Northeastern University, I joined the engineering team at
      {' '}
      Upstatement where I work on a wide variety of interesting and meaningful projects on a
      {' '}
      daily basis.
    </p>
    <p>Here are a few technologies I&apos;ve been working with recently:</p>
  </AboutMeWrapper>
);

export default AboutMe;
