import styled from "styled-components";

export const FormCardContainer = styled.section`
    margin-top: 8.125rem;
    width: fit-content;

    h1 {
        span {
            color: ${({ theme }) => theme.colors["button-blue"]};
            font-size: 4rem;
        }
    }

    input::-webkit-outer-spin-button,
    input::-webkit-inner-spin-button {
        -webkit-appearance: none;
        margin: 0;
    }

    input[type=number] {
        -moz-appearance:textfield;
    }

    @media (max-width: 768px) {
        margin-top: 4rem;
    }
`;

export const ContentForm = styled.form`
    
    @media (max-width: 768px) {
        display: flex;
        flex-direction: column;
        margin-top: 2rem;
    }
`;

export const HalfInput = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 1.875rem;

    @media (max-width: 768px) {
        grid-template-columns: 1fr;
    }
    `;
export const FullInput = styled.div`
    display: flex;
    flex-direction: column;
    margin: 1.875rem 0;
    gap: 1.875rem;

    > div {
        > div {
            > div {
                flex: 1;
                > input {
                    flex: 1;
                }
        }
        }
    }
`;

export const CardContainer = styled.div`
    display: flex;
    flex-direction: column;

    span {
        color: crimson;
    }
`;

export const CardInput = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    background: ${({ theme }) => theme.colors["card-gray"]};
    padding: 0.75rem 1.25rem;
    border-radius: 15px;
    color: ${({ theme }) => theme.colors["text-label"]};
    border: 1px solid transparent;
    transition: 0.5s;
    
    &:focus-within {
        border: 1px solid ${({ theme }) => theme.colors["button-blue"]};
    }
    
    
    > div {
        display: flex;
        flex-direction: column;

        input {
            color: ${({ theme }) => theme.colors["white"]};
            background: none;
            outline: none;
            border: none;
        }
    }
`;

export const ButtonContainer = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 1rem;

    @media (max-width: 768px) {
        margin-bottom: 5rem;
    }
`;

interface ButtonProps {
    variant: 'blue' | 'gray' | 'green';
}

export const Button = styled.button<ButtonProps>`
    padding: 1rem;
    border-radius: 35px;
    border: none;
    outline: none;
    color: ${({ theme }) => theme.colors['white']};
    
    background: ${({ variant, theme }) => theme.colors[`button-${variant}`]}
`;