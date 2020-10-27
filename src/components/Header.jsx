import { CgFileDocument } from 'react-icons/cg';
import { VscGithub } from 'react-icons/vsc';
import { scroller } from 'react-scroll';
import { useEffect, useState } from 'react';
import styled from 'styled-components';
import throttle from '@utils/throttle';

const HeaderWrapper = styled.div`
  position: sticky;
  top: 0;
  background-color: var(--wash-me);
  box-shadow: var(--elevation-low);
  z-index: 1;

  ul {
    list-style-type: none;

    li {
      &.active {
        > button {
          color: var(--sky-of-magritte);
        }
      }

      &:not(:last-child) {
        margin-right: 2em;
      }
    }
  }

  button.btn-primary {
    font-size: 12px;
  }

  @media (max-width: 424px) {
    ul {
      li {
        &:not(:last-child) {
          margin-right: 0.5em;
        }
      }
    }
  }
`;

const menuItems = [
  { name: 'About', scrollTo: 'about' },
  { name: 'Work', scrollTo: 'projects' },
  { name: 'Blog', scrollTo: 'blog' },
  { name: 'Contact', scrollTo: 'contact' },
];

const Header = () => {
  const [activeSection, setActiveSection] = useState(-1);
  const scrollToHandler = (scrollTo) => scroller.scrollTo(scrollTo, {
    smooth: true,
    offset: -106,
  });

  useEffect(() => {
    const sectionsIds = Array.from(document.getElementsByClassName('section')).map((section) => section.id);
    const scrollHandler = () => window.setTimeout(() => {
      let currentIndex;

      sectionsIds.forEach((sectionId, index) => {
        const section = document.getElementById(sectionId);

        if (window.scrollY >= section.offsetTop - 106) {
          currentIndex = index;
        }
      });

      setActiveSection(currentIndex);
    });
    const throttledScrollHandler = throttle(scrollHandler, 500);

    window.addEventListener('scroll', throttledScrollHandler);
    throttledScrollHandler();

    return () => window.removeEventListener('scroll', throttledScrollHandler);
  }, []);

  return (
    <HeaderWrapper className="container">
      <div className="d-flex justify-content-between align-items-center">
        <h1>AH</h1>
        <ul className="d-flex align-items-center">
          <li>
            <button
              type="button"
              className="btn btn-link btn-block"
            >
              <VscGithub size={25} />
            </button>
          </li>
          <li>
            <button
              type="button"
              className="btn btn-primary"
            >
              Resume
              {' '}
              <CgFileDocument />
            </button>
          </li>
        </ul>
      </div>
      <ul className="d-flex">
        {
          menuItems.map((menuItem, index) => (
            <li key={menuItem.name} className={`${activeSection === index ? 'active' : ''}`}>
              <button
                type="button"
                className={`btn btn-link btn-block ${index === 0 ? 'pl-0' : ''}`}
                onClick={() => scrollToHandler(menuItem.scrollTo)}
              >
                {menuItem.name}
              </button>
            </li>
          ))
        }
      </ul>
    </HeaderWrapper>
  );
};

export default Header;
