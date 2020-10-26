import { VscGithub, VscLinkExternal } from 'react-icons/vsc';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const ProjectCardWrapper = styled.div`
  color: var(--wash-me);
  background-color: var(--black-out);
  box-shadow: var(--elevation-low);
`;

const ProjectCard = ({ project }) => {
  const {
    name, description, features,
  } = project;

  return (
    <ProjectCardWrapper className="p-1">
      <div className="project-card-header d-flex align-items-center justify-content-between">
        <h3>{name}</h3>
        <div className="actions">
          <a href={project.github_link} target="_blank" rel="noreferrer">
            <VscGithub />
          </a>
          {
            project.demo_link && (
              <a href={project.demo_link} target="_blank" rel="noreferrer" className="ml-1">
                <VscLinkExternal />
              </a>
            )
          }
        </div>
      </div>
      <p>{description}</p>
      {
        features?.length > 0 && (
          <div>
            Features:
            <ul className="ml-2">
              {
            features.map((feature) => (
              <li key={feature}>
                {feature}
              </li>
            ))
          }
            </ul>
          </div>
        )
      }
    </ProjectCardWrapper>
  );
};

ProjectCard.propTypes = {
  project: PropTypes.shape({
    name: PropTypes.string,
    description: PropTypes.string,
    github_link: PropTypes.string,
    demo_link: PropTypes.string,
    features: PropTypes.arrayOf(String),
  }).isRequired,
};

export default ProjectCard;
