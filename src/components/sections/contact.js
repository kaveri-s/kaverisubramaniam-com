import { PopupButton } from 'react-calendly';
import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';
import { srConfig, email } from '@config';
import sr from '@utils/sr';
import { usePrefersReducedMotion } from '@hooks';

const StyledContactSection = styled.section`
  margin: 0 auto 100px;
  width: 1000px;
  text-align: center;

  @media (max-width: 768px) {
    margin: 0 auto 50px;
  }

  .overline {
    display: block;
    margin-bottom: 20px;
    color: var(--green);
    font-family: var(--font-mono);
    font-size: var(--fz-md);
    font-weight: 400;

    &:before {
      bottom: 0;
      font-size: var(--fz-sm);
    }

    &:after {
      display: none;
    }
  }

  .title {
    font-size: clamp(40px, 5vw, 60px);
  }

  .email-link {
    ${({ theme }) => theme.mixins.bigButton};
  }

  .contact-grid {
    ${({ theme }) => theme.mixins.resetList};
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    gap: 5rem;
    width: 800px;
    margin: auto;
    margin-top: 50px;

    @media (max-width: 1080px) {
      grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
    }
  }

  .contact-inner {
    text-align: justify;
    text-justify: inter-word;
    width: 500px;
    margin: auto;
    margin-top: 50px;
  }
`;

const Contact = () => {
  const revealContainer = useRef(null);
  const prefersReducedMotion = usePrefersReducedMotion();

  useEffect(() => {
    if (prefersReducedMotion) {
      return;
    }

    sr.reveal(revealContainer.current, srConfig());
  }, []);

  return (
    <StyledContactSection id="contact" ref={revealContainer}>
      <h2 className="numbered-heading overline">What’s Next?</h2>

      <h2 className="title">Get In Touch</h2>

      <p className="contact-inner">
        Welcome! Whether you're looking for job prospects, seeking mentoring, have a project idea,
        or simply want to chat, I'm here to connect with you. Feel free to utilize either of the
        buttons below to get in touch with me.
      </p>
      <div className="contact-grid">
        <a className="email-link" href={`mailto:${email}`}>
          Send me an Email
        </a>
        <PopupButton
          url="https://calendly.com/kaveri-subramaniam/coffee-chat"
          rootElement={document.getElementById('root')}
          text="Schedule a Meet with me"
          className="email-link"
        />
      </div>
    </StyledContactSection>
  );
};

export default Contact;
