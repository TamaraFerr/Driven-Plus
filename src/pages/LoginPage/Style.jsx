import styled  from "styled-components";

export const Container = styled.div`
    width: 100%;
    height: 100vh;
    background-color: #000000;
    margin: none;
    box-sizing: border-box;
`
export const Body = styled.div`
    box-sizing: border-box;
    width: 300px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 0 auto;
    padding-top: 135px;
`

export const LogoPlus = styled.img`
    width: 300px;
`

export const Form = styled.form`
    width: 300px;
    margin-top: 100px;
`


export const Inputs = styled.input`
    width: 100%;
    height: 52px;
    border-radius: 8px;
    border: none;
    font-family: "Roboto", sans-serif;
    font-weight: 440;
    font-size: 14px;
    margin-bottom: 16px;
    padding-left: 15px;
    box-sizing: border-box;
`


export const Button = styled.button`
    width: 100%;
    height: 52px;
    border: none;
    border-radius: 10px;
    background-color: #FF4791;
    color: #FFFFFF;
    font-family: "Roboto", sans-serif;
    font-weight: 700;
    font-size: 14px;
    margin-bottom: 24px;
`


export const Links = styled.p`
    font-family: "Roboto", sans-serif;
    font-weight: 440;
    font-size: 14px;
    color: #FFFFFF;
    text-decoration-line: underline;
`