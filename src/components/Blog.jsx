import styled from 'styled-components';

const BlogWrapper = styled.div``;

const Blog = () => (
  <BlogWrapper id="blog" className="mt-5 section">
    <h1>Blog</h1>
    <p className="mt-1">
      In my spare time i follow various Engg. Blogs to keep myself updated and prepared for
      {' '}
      the Challenges.
    </p>
  </BlogWrapper>
);

export default Blog;
