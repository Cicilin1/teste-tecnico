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

  .error-message {
    width: auto; 
    height: 35px;
    margin-top:64px;
    background: transparent;
    text-align: center; 
    font-size: 20px; 
    font-weight: 700; 
    word-wrap: break-word;
  }

  img {
    width: 447px; 
    height: 265.36px; 
    flex-direction: column; 
    justify-content: flex-start; 
    align-items: center; 
    display:flex;
    background: transparent;
    object-fit: cover;
  }

  

  @media screen and (max-width:1100px) {
    width: calc(100% - 40px);
    margin: 0 16px;
    height: 516px;

    img {
      width: 178px;
      height: 265px;
    }

    .error-message {
      width: 200px;
      height: 35px;
    }
  }
`;