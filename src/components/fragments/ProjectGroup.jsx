import PropTypes from 'prop-types';
import ProjectCard from '@fragments/ProjectCard';
import styled from 'styled-components';

const ProjectGroupWrapper = styled.div`
  display: grid;
  grid-gap: 20px;
  grid-template-columns: repeat(2, 2fr);

  @media (max-width: 1023px) {
    grid-template-columns: repeat(1, 1fr);
  }
`;

const ProjectGroup = ({ projects }) => (
  <ProjectGroupWrapper className="mt-1">
    {
      projects.map((project) => (<ProjectCard key={project.name} project={project} />))
    }
  </ProjectGroupWrapper>
);

ProjectGroup.propTypes = {
  projects: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default ProjectGroup;
