import { VscLinkExternal } from 'react-icons/vsc';
import styled from 'styled-components';
import topReads from '@constants/top-reads';

const BlogWrapper = styled.div`
  .blogs-wrapper {
    display: grid;
    grid-template-columns: auto auto;
    grid-gap: 20px;
    max-width: 800px;
  }

  .card {
    box-shadow: var(--elevation-low);
  }

  @media (max-width: 767px) {
    .blogs-wrapper {
      grid-template-columns: auto;
    }
  }
`;

const Blog = () => (
  <BlogWrapper id="blog" className="mt-5 section">
    <h1>Engg. Blogs</h1>
    <p className="mt-1">
      I follow quite a few Engineering blogs that give me a steady stream of great ideas and best
      practices that has influence my daily work sometimes.
    </p>
    <p className="mb-1">
      Top reads (In my Opinion):
    </p>
    <div className="blogs-wrapper m-auto">
      {
        topReads.map(({ title, link, Icon }) => (
          <div className="d-flex align-items-center p-1 card" key={title}>
            <Icon size={48} />
            <div className="ml-1">
              <a
                href={link}
                title={title}
                target="_blank"
                rel="noopener noreferrer"
                className="primary"
              >
                {title}
              </a>
              <sup>
                <VscLinkExternal />
              </sup>
            </div>
          </div>
        ))
      }
    </div>
  </BlogWrapper>
);

export default Blog;
