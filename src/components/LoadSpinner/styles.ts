import styled, { keyframes } from 'styled-components';

export const Container = styled.div`
    width: 100%;
    height: auto;
    display: flex;
    justify-content: center;
    position: relative; 
    top: 0;
    left: 0;
    margin-top: 140px;
`;

const spin = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`;

export const Load = styled.div`
    width: 62.25px; 
    height: 62.25px; 
    animation: ${spin} 2s linear infinite;
`;