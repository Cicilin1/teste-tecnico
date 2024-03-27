import styled from 'styled-components';

export const Container = styled.div`
    width: 1300px; 
    height: auto; 
    margin: 0 auto;

@media screen and ( max-width: 1030px){
    width: auto;
    margin: 0 20px;
}
`

export const MovieList = styled.ul` 
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 16px;
`

export const MovieItem = styled.li`
    width: 338.67px; 
    height: 324px; 
    padding: 16px; 
    background: #FFFFFF; 
    border-radius: 4px; 
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    list-style-type: none;
    gap: 16px; 
    margin-bottom: 8px;

    .posterImage{
        width: 147px;
        height: 188px;
    }

    h3{
        width: 306.67px; 
        height: 18px; 
        text-align: center; 
        color: #333333; 
        font-size: 12px;
        font-weight: 700; 
        word-wrap: break-word;
        background: transparent;
    }

    p{
        text-align: center; 
        color: #2F2E41; 
        font-size: 16px; 
        font-weight: 700; 
        word-wrap: break-word;
        background: transparent;
    }

    .CartIcon{
        background: transparent;
    }
`