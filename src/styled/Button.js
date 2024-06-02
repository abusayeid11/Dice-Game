
import styled from "styled-components"

export const Button = styled.button`
    padding: 10px 18px;
    border-radius: 5px;
    background-color: hsl(0, 0%, 0%);
    color: white;
    min-width: 220px;
    border: none;
    font-size: 16px;
    border: 1px solid black transparent;

    transition: 0.4s background ease-in;
    cursor: pointer;

    &:hover{
        background-color: white;
        border: 1px solid black;
        color: black;

        transition: 0.3s background ease-in;
    }
   
`;

export const OutLineButton = styled(Button)`

background-color: white;
color: black;
border: 1px solid black;

&:hover{
        background-color: black;
        border: 1px solid transparent;
        color: white;

        transition: 0.3s background ease-in;
    }
`;

