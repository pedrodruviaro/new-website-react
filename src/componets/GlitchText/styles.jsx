import styled from 'styled-components'

export const GlitchText = styled.p`
    font-size: 1.75rem;
    font-weight: 700;
    text-transform: lowercase;
    position: relative;

    text-shadow: 
        0.05em 0 0 rgba(255, 0, 0, .75),
        -0.025em -0.05em 0 rgba(0, 255, 0, .75),
        0.025em 0.05em 0 rgba(0, 0, 255, .75);

    animation: glitch 600ms infinite;


    span {
    position: absolute;
    top: 0;
    left: 0;
}

/* spans */
span:first-child {
    animation: glitch 650ms infinite;
    clip-path: polygon(0 0, 100% 0, 100% 45%, 0 45%);
    transform: translate(-0.025em, -0.025em);
    opacity: .8;
}


 span:last-child {
    animation: glitch 375ms infinite;
    clip-path: polygon(0 80%, 100% 20%, 100% 100%, 0 100%);
    transform: translate(0.025em, 0.025em);
    opacity: .8;
}

/* animation */

@keyframes glitch {
    0% {
        text-shadow: 
        0.05em 0 0 rgba(255, 0, 0, .75),
        -0.05em -0.025em 0 rgba(0, 255, 0, .75),
        -0.025em 0.05em 0 rgba(0, 0, 255, .75);
    }
    14% {
        text-shadow: 
        0.05em 0 0 rgba(255, 0, 0, .75),
        -0.05em -0.025em 0 rgba(0, 255, 0, .75),
        -0.025em 0.05em 0 rgba(0, 0, 255, .75);
    }
    15% {
        text-shadow: 
        -0.05em -0.025em 0 rgba(255, 0, 0, .75),
        0.025em 0.025em 0 rgba(0, 255, 0, .75),
        -0.05em -0.05em 0 rgba(0, 0, 255, .75);
    }
    49% {
        text-shadow: 
        -0.05em -0.025em 0 rgba(255, 0, 0, .75),
        0.025em 0.025em 0 rgba(0, 255, 0, .75),
        -0.05em -0.05em 0 rgba(0, 0, 255, .75);
    }
    50% {
        text-shadow: 
        0.025em 0.05em 0 rgba(255, 0, 0, .75),
        0.05em 0em 0 rgba(0, 255, 0, .75),
        0 -0.05em 0 rgba(0, 0, 255, .75);
    }
    99% {
        text-shadow: 
        0.025em 0.05em 0 rgba(255, 0, 0, .75),
        0.05em 0em 0 rgba(0, 255, 0, .75),
        0 -0.05em 0 rgba(0, 0, 255, .75);
    }
    100% {
        text-shadow: 
        -0.025em 0 0 rgba(255, 0, 0, .75),
        -0.025em -0.05em 0 rgba(0, 255, 0, .75),
        -0.025em -0.05em 0 rgba(0, 0, 255, .75);
    }
}


/* user animations prefers */
@media (prefers-reduced-motion: reduce) {
    *, ::before, ::after {
      animation-delay: -1ms !important;
      animation-duration: 1ms !important;
      animation-iteration-count: 1 !important;
      background-attachment: initial !important;
      scroll-behavior: auto !important;
      transition-duration: 0s !important;
      transition-delay: 0s !important;
    }
  }
`