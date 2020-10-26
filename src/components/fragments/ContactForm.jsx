import { BiMailSend } from 'react-icons/bi';
import { ToastContainer, toast } from 'react-toastify';
import { useRef, useState } from 'react';
import styled from 'styled-components';
import saveMessage from '@services/airtable';
import 'react-toastify/dist/ReactToastify.css';

const ContactFormWrapper = styled.div`
  &.submitting {
    cursor: progress;
  }

  form, button {
    font-size: 14px;
  }

  form {
    min-width: 450px;
    box-shadow: var(--elevation-low);

    textarea {
      resize: vertical;
    }
  }

  @media (max-width: 767px) {
    form {
      min-width: unset;
      width: 100%;
    }
  }
`;

const initialFormValues = {
  name: '',
  email: '',
  message: '',
};

const ContactForm = () => {
  const formFieldRefs = {
    name: useRef(),
    email: useRef(),
    message: useRef(),
  };
  const [formValues, setFormValues] = useState({ ...initialFormValues });
  const [formErrors, setFormErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const submitForm = () => {
    setFormErrors({});
    setIsSubmitting(true);

    saveMessage(formValues)
      .then(() => {
        setFormValues({ ...initialFormValues });
        toast('Your message is on it\'s way. I will try to get back to you ASAP!');
      })
      .catch(() => toast.error('Your message was not sent! Alternatively you can drop me an Email.'))
      .finally(() => setIsSubmitting(false));
  };
  const inputHandler = (ev) => setFormValues({ ...formValues, [ev.target.name]: ev.target.value });
  const submitHandler = (ev) => {
    ev.preventDefault();

    let firstErrorField = null;

    const errors = Object.keys(formValues)
      .reduce((errorObject, field) => {
        if (!formValues[field]) {
          errorObject[field] = `${field} is required!`;
          firstErrorField = firstErrorField || field;
        }

        return errorObject;
      }, {});

    setFormErrors(errors);

    if (firstErrorField) {
      formFieldRefs[firstErrorField].current.focus();
    } else {
      submitForm();
    }
  };

  return (
    <ContactFormWrapper className={`d-flex justify-center ${isSubmitting ? 'submitting' : ''}`}>
      <form className="p-3" onSubmit={submitHandler} noValidate>
        <div className={`form-group ${formErrors.name ? 'has-error' : ''}`}>
          <label htmlFor="name">
            <span>Name</span>
            <input
              id="name"
              name="name"
              type="text"
              className="form-control"
              autoComplete="off"
              disabled={isSubmitting}
              value={formValues.name}
              ref={formFieldRefs.name}
              onChange={inputHandler}
            />
          </label>
          <div className={`error-message d-${formErrors.name ? 'visible' : 'hidden'}`}>{formErrors.name}</div>
        </div>
        <div className={`form-group ${formErrors.email ? 'has-error' : ''}`}>
          <label htmlFor="email">
            <span>Email ID</span>
            <input
              id="email"
              name="email"
              type="email"
              className="form-control"
              autoComplete="off"
              disabled={isSubmitting}
              value={formValues.email}
              ref={formFieldRefs.email}
              onChange={inputHandler}
            />
          </label>
          <div className={`error-message d-${formErrors.email ? 'visible' : 'hidden'}`}>{formErrors.email}</div>
        </div>
        <div className={`form-group ${formErrors.message ? 'has-error' : ''}`}>
          <label htmlFor="name">
            <span>Message</span>
            <textarea
              name="message"
              className="form-control"
              disabled={isSubmitting}
              value={formValues.message}
              ref={formFieldRefs.message}
              onChange={inputHandler}
            />
          </label>
          <div className={`error-message d-${formErrors.message ? 'visible' : 'hidden'}`}>{formErrors.message}</div>
        </div>
        <div className="form-group d-flex justify-content-end">
          <button type="submit" className="btn btn-primary" disabled={isSubmitting}>
            <span>
              Send
              {isSubmitting ? 'ing...' : ''}
            </span>
            {
              !isSubmitting && (
                <BiMailSend size={18} />
              )
            }
          </button>
        </div>
        <div className="form-group mb-0">
          <p>Prefer to drop an Email?</p>
          <p>
            Email me @
            {' '}
            <span className="text-highlight">abhuz@hotmail.com</span>
          </p>
        </div>
      </form>
      <ToastContainer
        position="bottom-right"
        autoClose={10000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </ContactFormWrapper>
  );
};

export default ContactForm;
