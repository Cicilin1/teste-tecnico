import styled from 'styled-components';

export const Container = styled.div`
    width: 100%;
    max-width: 1150px;
    background: red;
    height: auto; 
    margin: 0 auto;
    margin-bottom: 8rem;

    @media screen and (max-width: 400px){
        width: 90%;
    }
`;

export const MovieList = styled.ul` 
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 16px;

    @media screen and (max-width: 770px){
        flex-direction: column;
        align-items: center;
    }
`;

export const MovieItem = styled.li`
    width: 328.67px; 
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

    #count-item{
        background: transparent;
        margin-right: 8px;
    }

    img{
        background: transparent;
    }
`;
