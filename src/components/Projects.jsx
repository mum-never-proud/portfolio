import { Spring } from 'react-spring/renderprops.cjs';
import { useEffect, useState } from 'react';
import ProjectGroup from '@fragments/ProjectGroup';
import styled from 'styled-components';
import categories from '@constants/project-categories.json';
import miscProjects from '@constants/misc-projects.json';
import experimentalProjects from '@constants/experimental-projects.json';
import reactProjects from '@constants/react-projects.json';
import reinventedProjects from '@constants/reinvented-projects.json';

const ProjectsWrapper = styled.div`
  .card {
    padding: 15px;
    box-shadow: var(--elevation-low);
  }

  .category {
    list-style-type: none;
    display: flex;
    overflow-x: auto;

    > li {
      flex: 1;
      min-width: 120px;
      text-align: center;
      border-bottom: 2px solid var(--cerebral-grey);

      &.active {
        border-bottom: 2px solid var(--organza-violet);

        > .btn-link {
          color: var(--organza-violet);
        }
      }
    }
  }
`;

const REINVENTED_PROJECTS = 0;
const NEW_FEAT_PROJECTS = 1;
const REACT_PROJECTS = 2;

const projectDescriptions = [
  'I like to reinvent the wheel to understand Technologies better.',
  'Projects built with Experimental Browser features.',
  'Built with React.js.',
  'Other noteworthy Projects!',
];

const Projects = () => {
  const [selectedCategory, setSelectedCategory] = useState(0);
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    switch (selectedCategory) {
      case REINVENTED_PROJECTS:
        setProjects(reinventedProjects);
        break;
      case NEW_FEAT_PROJECTS:
        setProjects(experimentalProjects);
        break;
      case REACT_PROJECTS:
        setProjects(reactProjects);
        break;
      default:
        setProjects(miscProjects);
        break;
    }
  }, [selectedCategory]);

  return (
    <ProjectsWrapper id="projects" className="mt-5 section">
      <h1>My Projects</h1>
      <ul className="category mt-1 mb-3">
        {
          categories.map((category, index) => (
            <li
              key={category}
              className={`${selectedCategory === index ? 'active' : ''}`}
            >
              <button
                type="button"
                className="btn btn-link btn-block"
                onClick={() => setSelectedCategory(index)}
              >
                {category}
              </button>
            </li>
          ))
        }
      </ul>
      <p>
        {projectDescriptions[selectedCategory]}
      </p>
      <Spring
        from={{
          opacity: 0.4,
          transform: 'translateY(20px)',
        }}
        to={{
          opacity: 1,
          transform: 'translateY(0px)',
        }}
        reset
      >
        {
          (props) => ((
            <div style={props}>
              <ProjectGroup projects={projects} />
            </div>
          ))
        }
      </Spring>
    </ProjectsWrapper>
  );
};

export default Projects;
