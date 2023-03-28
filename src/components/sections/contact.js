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
    margin-top: 50px;
  }

  .contact-grid {
    ${({ theme }) => theme.mixins.resetList};
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    gap: 5rem;
    margin-top: 50px;

    @media (max-width: 1080px) {
      grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
    }
  }

  .contact-inner {
    text-align: justify;
    text-justify: inter-word;
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
      <div className="contact-grid">
        <div>
          <p className="contact-inner">
            As I approach my graduation in May 2023, I am eager to discover new career
            opportunities. If you're interested in hiring a motivated individual with a passion for
            Cloud development, or wish to explore potential collaborations, don't hesitate to reach
            out...
          </p>

          <a className="email-link" href={`mailto:${email}`}>
            Say Hello
          </a>
        </div>
        <div>
          <p className="contact-inner">
            Are you just starting out and looking for some guidance? I'm here to help! As someone
            who's been through the same journey, I'm offering 1-on-1 mentoring sessions where we can
            discuss your goals, brainstorm ideas, and work together to achieve success...
          </p>

          <PopupButton
            url="https://calendly.com/kaveri-subramaniam/mentoring"
            rootElement={document.getElementById('root')}
            text="Schedule a Meet"
            className="email-link"
          />
        </div>
      </div>
    </StyledContactSection>
  );
};

export default Contact;
