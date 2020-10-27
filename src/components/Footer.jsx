import { BsCodeSlash } from 'react-icons/bs';
import styled from 'styled-components';

const FooterWrapper = styled.footer`
  font-size: 12px;

  img {
    width: 50px;
    height: 50px;
  }

  svg {
    vertical-align: middle;
  }
`;

const Footer = () => (
  <FooterWrapper className="mt-5 mb-1 text-center">
    <img
      src="./images/find-abith-hussain.svg"
      alt="find abith hussain"
    />
    <div>
      made with much
      {' '}
      <span className="text-highlight">
        <BsCodeSlash />
      </span>
    </div>
  </FooterWrapper>
);

export default Footer;
