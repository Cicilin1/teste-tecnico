import styled from "styled-components"

export const Container = styled.div`
  width: 1080px;
  height: 88px;
  padding-top: 24px;
  padding-bottom: 24px;
  padding-left: 16px;
  padding-right: 16px;
  color: #FFFFFF;
  align-items: center;
  justify-content: space-between;
  display: flex;
  margin: 0 auto;

  .CartContainer{
    width: 143.95px; 
    height: 40px; 
    gap: 12px; 
    justify-content: center; 
    align-items: center; 
    display: flex;
  }

  .cartText{
    display: flex;
    flex-direction: column; 
    justify-content: flex-start; 
    align-items: flex-end; 
    
    
  div{
    width: 87.95px; 
    height: 19px; 
    color: white; 
    font-size: 14px; 
    font-weight: 100; 
    word-wrap: break-word
  }


  p{
    width: 41.98px; 
    height: 19px; 
    color: #999999; 
    font-size: 12px; 
    font-weight: 200; 
    word-wrap: break-word
  }}

  .cartIcon img{
    width: 24px; 
    height: 22px
  }

  @media screen and (max-width: 1114px){
    width: 720.32px;

  .CartContainer{
    justify-content: flex-end;
  }

  .cartText div{
    display: none;
  }


  @media screen and (max-width: 770px){
    width: 360.66px;
  
  }

  /* @media screen and (max-width: 400px){
    width: 100%;
  } */
}
`

