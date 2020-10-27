import { AiOutlineArrowDown } from 'react-icons/ai';
import { Spring } from 'react-spring/renderprops.cjs';
import { scroller } from 'react-scroll';
import styled from 'styled-components';
import introSentences from '@constants/intro.json';

const IntroWrapper = styled.div`
  min-height: calc(100vh - 106px - 3em);

  > div {
    max-width: 500px;
  }

  .intro {
    font-size: 32px;
  }

  @media (max-width: 424px) {
    .intro {
      font-size: 24px;
    }
  }

  @media (min-width: 1024px) {
    .intro {
      font-size: 42px;
    }
  }
`;

const Intro = () => {
  const scrollHandler = () => scroller.scrollTo('projects', {
    smooth: true, offset: -96,
  });

  return (
    <IntroWrapper id="intro" className="d-flex justify-content-center pt-3">
      <div>
        {
        introSentences.map((sentence, index) => (
          <Spring
            key={sentence}
            delay={index * 400}
            from={{
              opacity: 0,
              transform: 'translateY(20px)',
            }}
            to={{
              opacity: 1,
              transform: 'translateY(0px)',
            }}
          >
            {
              (props) => (
                // eslint-disable-next-line react/no-danger
                <div className="intro" style={props} dangerouslySetInnerHTML={{ __html: sentence }} />
              )
            }
          </Spring>
        ))
      }
        <Spring
          delay={(introSentences.length + 1) * 200}
          from={{
            opacity: 0,
            transform: 'translateY(20px)',
          }}
          to={{
            opacity: 1,
            transform: 'translateY(0px)',
          }}
        >
          {
          (props) => (
            <div className="about mt-2" style={props}>
              I&apos;m a Software Engineer based in Chennai, IN specializing in building
              {' '}
              (and occasionally designing) exceptional websites, applications, and everything in
              between.
            </div>
          )
        }
        </Spring>
        <Spring
          delay={(introSentences.length + 2) * 200}
          from={{
            opacity: 0,
            transform: 'translateY(20px)',
          }}
          to={{
            opacity: 1,
            transform: 'translateY(0px)',
          }}
        >
          {
          (props) => (
            <button type="button" className="btn btn-primary mt-2" style={props} onClick={scrollHandler}>
              View my Works
              {' '}
              <AiOutlineArrowDown />
            </button>
          )
        }
        </Spring>
      </div>
    </IntroWrapper>
  );
};

export default Intro;
