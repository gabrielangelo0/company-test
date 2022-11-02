import styled from "styled-components";

export const AddPointContainer = styled.div`
    padding: 4.125rem;
    height: 100vh;

    @media (max-width: 768px) {
        padding: 4.125rem 1rem;
    }
`;
export const AddPointForm = styled.form`
    background: ${({ theme }) => theme.colors["card-gray"]};
    width: fit-content;
    padding: 2rem;
    border-radius: 6px 36px 6px 36px;
    display: flex;
    flex-direction: column;
    gap: 1.5rem;

    > div {
        p:nth-child(even) {
            span {
                color: yellow;
            }
        }
    }

    @media (max-width: 768px) {
        flex: 1;
        width: 100%;
    }
`;