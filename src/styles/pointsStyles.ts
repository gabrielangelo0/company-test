import styled from "styled-components";

export const PointContainer = styled.div`
    display: flex;
    flex-direction: column;
    padding: 4.125rem;
    height: 100vh;
    transition: 0.5s;
    
    `;

export const CardContent = styled.div`
    margin-top: 2rem;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 1rem;
    
    @media (max-width: 768px) {
        display: grid;
        grid-template-columns: 1fr;
    }
    `;

export const CardPoint = styled.div`
    background: ${({ theme }) => theme.colors["card-gray"]};
    padding: 1rem 2rem;
    border-radius: 6px;
`;