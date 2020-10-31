import { VscGithub, VscLinkExternal } from 'react-icons/vsc';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const ProjectCardWrapper = styled.div`
  color: var(--wash-me);
  background-color: var(--black-out);
  box-shadow: var(--elevation-low);

  display: flex;
  flex-direction: column;

  .features {
    flex: 1;
  }

  .technologies {
    font-size: 14px;
  }
`;

const ProjectCard = ({ project }) => {
  const {
    name, description, features, technologies,
  } = project;

  return (
    <ProjectCardWrapper className="p-1">
      <div className="project-card-header d-flex align-items-center justify-content-between">
        <h3>{name}</h3>
        <div className="actions">
          {
            project.github_link && (
              <a className="light translate d-inline-block" href={project.github_link} target="_blank" rel="noreferrer">
                <VscGithub size={18} />
              </a>
            )
          }
          {
            project.demo_link && (
              <a href={project.demo_link} target="_blank" rel="noreferrer" className="ml-1 light translate d-inline-block">
                <VscLinkExternal size={18} />
              </a>
            )
          }
        </div>
      </div>
      <p>{description}</p>
      <div className="features">
        {
        features?.length > 0 && (
          <>
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
          </>
        )
      }
      </div>
      {
        technologies?.length && (
          <div className="d-inline-flex justify-content-end mt-1 technologies">
            {technologies.join(', ')}
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
    technologies: PropTypes.arrayOf(String),
  }).isRequired,
};

export default ProjectCard;
