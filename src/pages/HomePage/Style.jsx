import  styled  from "styled-components";

export const Container =styled.div`
    width: 100%;
    height: 100vh;
    background-color: #000000;
    margin: none;
    box-sizing: border-box;
`

export const Header = styled.div`
    display: flex;
    justify-content: space-between;
`

export const Body = styled.div`
    display: flex;
    flex-direction: column;
    margin: 0 auto;
    align-items: center;
`

export const Profile = styled.img``

export const Icon = styled.img`
    width: 75px;
    height: 51px;
`

export const Buttons = styled.div`
    width: 300px;
    display: flex;
    flex-direction: column;
`
export const Options = styled.div`
    width: 300px;
    display: flex;
    flex-direction: column;
`

export const Button = styled.button`
    width: 100%;
    height: 52px;
    background-color: #FF4791;
    border: none;
    border-radius: 8px;
    font-family: "Roboto", sans-serif;
    font-size: 14px;
    font-weight: 400;
    color: #FFFFFF;
`

export const Cancel = styled.button`
    width: 100%;
    height: 52px;
    background-color: #FF4747;
    border: none;
    border-radius: 8px;
    font-family: "Roboto", sans-serif;
    font-size: 14px;
    font-weight: 400;
    color: #FFFFFF;
`

export const Title = styled.h1`
    font-family: "Roboto", sans-serif;
    font-size: 24px;
    font-weight: 700;
    color: #FFFFFF;
`
