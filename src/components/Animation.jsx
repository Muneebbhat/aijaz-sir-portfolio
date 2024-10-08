import React from 'react';
import styled from 'styled-components';

const Animation = () => {
  return (
    <Section>
      <main class='container'>
        <p>Hello 👋 I'm</p>
        <section class='animation'>
          <div class='first'>
            <div>Carlos Córdova</div>
          </div>
          <div class='second'>
            <div>Web Developer</div>
          </div>
          <div class='third'>
            <div>Systems Engineer</div>
          </div>
        </section>
      </main>
    </Section>
  );
};

export default Animation;
const Section = styled.div`
  p {
    text-shadow: 0 0 7px rgba(255, 255, 255, 0.3),
      0 0 3px rgba(255, 255, 255, 0.3);
  }
  .container {
    color: #e5e5e5;
    font-size: 2.26rem;
    text-transform: uppercase;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .animation {
    height: 50px;
    overflow: hidden;
    margin-left: 1rem;
  }

  .animation > div > div {
    padding: 0.25rem 0.75rem;
    height: 2.81rem;
    margin-bottom: 2.81rem;
    display: inline-block;
  }

  .animation div:first-child {
    animation: text-animation 8s infinite;
  }

  /* .first div {
  background-color:#20a7d8;
}
.second div {
  background-color:#CD921E;
}
.third div {
  background-color:#c10528;
} */

  @keyframes text-animation {
    0% {
      margin-top: 0;
    }
    10% {
      margin-top: 0;
    }
    20% {
      margin-top: -5.62rem;
    }
    30% {
      margin-top: -5.62rem;
    }
    40% {
      margin-top: -11.24rem;
    }
    60% {
      margin-top: -11.24rem;
    }
    70% {
      margin-top: -5.62rem;
    }
    80% {
      margin-top: -5.62rem;
    }
    90% {
      margin-top: 0;
    }
    100% {
      margin-top: 0;
    }
  }
`;
