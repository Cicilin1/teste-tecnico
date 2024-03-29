import styled from "styled-components";

export const Container = styled.div`
    width: 1048px; 
    height: auto; 
    padding: 24px; 
    margin: 0 auto;
    background: #FFFFFF; 
    border-radius: 4px; 
    display: flex;
    flex-direction: column; 
    justify-content: flex-start; 
    align-items: flex-start; 
    gap: 24px; 
    margin-bottom: 10rem;

    
    .title{
        width: 1000px; 
        height: 24px; 
        display: flex;
        justify-content: flex-start; 
        align-items: flex-start; 
        background: inherit;

        p{
            width: 348px;
            color: #999999; 
            font-size: 14px; 
            font-weight: 700; 
            word-wrap: break-word;
            background: inherit;
        }

    }

    .checkout {
        width: 100%; 
        height: 34px; 
        display:flex; 
        justify-content: space-between;
        align-items: center;
        background: inherit;
        padding-top: 24px;
        border-top: 1px solid #999999;


        .total-container{
            width: 197.26px; 
            height: 21px; 
            display: flex;
            justify-content: flex-start; 
            align-items: center; 
            gap: 5px;
            background: inherit;
   
            p{
                height: 12px; 
                text-align: center; 
                color: #999999; 
                font-size: 14px; 
                font-weight: 600; 
                word-wrap: break-word;
                background: inherit;        
            }

            #total{
                width: 130.79px; 
                height: 21px; 
                color: #2F2E41; 
                font-size: 24px; 
            }

        }
    }

    @media screen and (max-width: 1114px){
        width: 720.32px;

        .title{
            display: none;
        }
    }

    @media screen and (max-width: 770px){
        width: 318px;

        .checkout{
            display: flex;
            align-items: end;
            justify-content: center;
            position: relative;
            height: 64px;

            .total-container{
                position: absolute;
                top: 0;
                margin-top:10px ;
            }
        }
    }

    @media screen and (max-width: 400px){
        width: 90%;
        margin-left: 0.7rem;
  }
`

export const CartMovieList = styled.ul`
    background: #FFFFFF;
    display: flex;
    flex-direction: column;
    gap: 20px;
`

export const CartMovieItem = styled.li`
    width: 100%;
    display:flex;
    list-style-type: none;
    justify-content:start; 
    align-items: center; 
    background: #FFFFFF;
    

    .product-container{
        display: flex;
        align-items: center;
        background: inherit;
    }

    .product{
        width: 330px; 
        height: 114px;
        gap: 16px;
        display: flex;
        align-items: center;
        background: inherit;


        .product-details p{
           padding: 8px;
           color: #2F2E41; 
           font-size: 16px; 
           font-weight: 700; 
           word-wrap: break-word;
           background: #FFFFFF;

        }
    }

    .quantity{
        width: 338px; 
        height: 26px;
        gap: 11px;
        display: flex;
        align-items: center;
        background: inherit;


        img{
            width: 18px; 
            height: 18px;
            background: inherit;
        }

        .count{
            width: 35px;
            border: 1px solid;
            padding: 4px 12px; 
            border-radius: 4px; 
            border: 1px #D9D9D9  solid;
            display: flex;
            flex-direction: column; 
            justify-content: center; 
            align-items: center; 
            background: inherit;

            text-align: center; 
            color: #2F2E41; 
            font-size: 14px;  
            font-weight: 400; 
            word-wrap: break-word
        }
    }

    .subtotal-container{
        width: 348px; 
        height: 20px; 
        background: inherit;

        // Utilizado apenas em telas menores para descrever o subtotal.
        .subtotal-label{
            margin-bottom: 4px;
            background: inherit;
            color: #999999; 
            font-size: 12px; 
            font-weight: 700; 
            word-wrap: break-word;
            display: none;

        }

        .subtotal{
            color: #2F2E41; 
            font-size: 16px; 
            font-weight: 700; 
            word-wrap: break-word;
            background: inherit;
    }
    }

    //Ajuste para tornar as imagens/Buttons interativas
    button,img {
        cursor: pointer;    
        border: none;
        background: inherit;
    }
    
    
    @media screen and (max-width: 1114px){
    position:relative;

    .product-container{
        position: relative;
        width: 720.32px;

        .product{
            align-items: start;
            height: auto;

            img{
                width: 64px; 
                height: 82px
            }

            .product-details{
                gap: 15px;
                display: flex;
                align-items: center;
                background: inherit;
                background: inherit;
            }

            .product-details p:first-child{
                width: 102px;
                padding:2px;
            }
    }

    .quantity{
        width: 117px; 
        height: 26px;
        position: absolute;
        left:77px;
        top: 60px;
    }

    .subtotal-container{
        width: 66px; 
        height: 38px;
        position: absolute;
        right:0px;
        top: 54px;

        .subtotal-label{
            display: inline;
        }
    }
    }
    
    .trash-button {
        position: absolute;
        right: 15px; 
        top: 10px; 
    } 
    }

    @media screen and (max-width: 770px){

        .product-container{
            position: relative;
            width: 100%;
        }
        
        .quantity{
            left:77px;
            top: 60px;
        }

        .subtotal-container{
            right:40px;
            top: 54px;
        }
    }

` 