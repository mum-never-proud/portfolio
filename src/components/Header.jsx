import { CgFileDocument } from 'react-icons/cg';
import { VscGithub, VscChevronUp } from 'react-icons/vsc';
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
    overflow-x: auto;

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

  button.btn.btn-primary {
    font-size: 12px;
  }

  .chevron {
    position: fixed;
    right: 30px;
    bottom: 10px;
    border-radius: 100%;
    color: var(--wash-me);
    background-color: var(--sky-of-magritte);
    opacity: 0.7;
    cursor: pointer;
    transition: opacity 0.3s ease-in-out;

    &:hover {
      opacity: 1;
    }
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
  const [activeSection, setActiveSection] = useState(undefined);
  const [showChevron, setShowChevron] = useState(false);
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

  useEffect(() => {
    setShowChevron(activeSection !== undefined);
  }, [activeSection]);

  return (
    <HeaderWrapper className="container">
      <div className="d-flex justify-content-between align-items-center">
        <h1>AH</h1>
        <ul className="d-flex align-items-center actions">
          <li className="mr-1">
            <button
              type="button"
              className="btn btn-link p-0"
              onClick={() => window.open('https://github.com/mum-never-proud')}
            >
              <VscGithub size={25} />
            </button>
          </li>
          <li>
            <button
              type="button"
              className="btn btn-primary"
              onClick={() => window.open('/docs/resume.pdf')}
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
      {
        showChevron && (
          <VscChevronUp
            size={48}
            className="chevron"
            onClick={() => scrollToHandler('intro')}
          />
        )
      }
    </HeaderWrapper>
  );
};

export default Header;
