import styled from 'styled-components';

export const Container = styled.div`
  width: 1048px; 
  height: 596px; 
  padding: 20px; 
  margin: 0 auto;
  background: #FFFFFF; 
  display:flex;
  border-radius: 4px; 
  flex-direction: column; 
  justify-content: flex-start; 
  align-items: center; 
  gap: 24px; 
  margin-bottom: 5rem;

  .confirm-message {
    width: auto; 
    height: 35px;
    margin-top:64px;
    background: transparent;
    color: #2F2E41;
    text-align: center; 
    font-size: 20px; 
    font-weight: 700; 
    word-wrap: break-word;
  }

  img {
    width: 294.96px; 
    height: 307px; 
    flex-direction: column; 
    justify-content: flex-start; 
    align-items: center; 
    display:flex;
    background: transparent;
    object-fit: cover;
  }

  
  @media screen and (max-width: 1114px){
    width: 720.32px;
    height: 516px;

    img {
      width: 238px;
      height: 247px;
    }

    .error-message {
      width: 200px;
      height: 35px;
    }
  }


  @media screen and (max-width: 770px){
    width: 328px;
  }

  @media screen and (max-width: 400px){
    width: 90%;
    margin-left: 0.7rem;
  }
`;