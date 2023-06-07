import  styled  from "styled-components";

export const Container = styled.div`
    width: 100%;
    height: 100vh;
    background-color: #000000;
    box-sizing: border-box;
`


export const Title = styled.h1`
    font-family: "Roboto", sans-serif;
    font-size: 32px;
    font-weight: 700;
    color: #FFFFFF;
    text-align: center;
    padding-top: 29px;
    padding-bottom: 24px;
`

export const Cards = styled.div`
    width: 290px;
    margin: 0 auto;
`


export const Card = styled.div`
    box-sizing: border-box;
    width: 100%;
    height: 180px;
    border: 3px solid #7E7E7E;
    border-radius: 12px;
    background-color: #000000;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-left: 16px;
    padding-right: 16px;
    margin-bottom: 10px;
`


export const Image = styled.img`
  width: 139px;
  height: 95px;
`

export const Price = styled.p`
    font-family: "Roboto", sans-serif;
    font-size: 24px;
    font-weight: 700;
    color: #FFFFFF;
`