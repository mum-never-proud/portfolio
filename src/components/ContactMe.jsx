import ContactForm from '@fragments/ContactForm';
import styled from 'styled-components';

const ContactMeWrapper = styled.div``;

const ContactMe = () => (
  <ContactMeWrapper id="contact" className="mt-5 section">
    <h1>Get in touch</h1>
    <p className="mt-1">Have a question or want to work together?</p>
    <div className="mt-3">
      <ContactForm />
    </div>
  </ContactMeWrapper>
);

export default ContactMe;
