import Image from "next/image";
import styled, { createGlobalStyle } from "styled-components";
import { ThemeType } from "../@types/default";

export const GlobalStyles = createGlobalStyle<{ theme: ThemeType }>`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        outline: none;
    }
    body {
        color: ${({ theme }) => theme.colors['white']};
        font-family: 'Poppins', sans-serif;
        font-weight: 600;
        background: ${({ theme }) => theme.colors["background-gray"]};
    }

    ul {
        list-style: none;
    }

    a {
        color: inherit;
        text-decoration: none;
    }

    button {
        cursor: pointer;
        font-weight: 600;
    }
`;

export const BackgroundImg = styled(Image)`
    position: fixed;
    z-index: -1;
    background-size: contain;
    height: 100vh;
    width: 100vw;

    @media (max-width: 768px) {
        display: none;
        background: ${({ theme}) => theme.colors["background-gray"]} !important;
    }
`;