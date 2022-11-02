import styled from "styled-components";

export const HeaderContainer = styled.header`
    display: flex;
`;

export const ListHeader = styled.ul`
    display: flex;
    align-items: center;
    gap: 4.875rem;
    color: ${({ theme }) => theme.colors["text-label"]};

    @media (max-width: 768px) {
        li:nth-child(2) {
            display: none;
        }
        li:nth-child(3) {
            display: none;
        }
    }
`;
export const ItemList = styled.li`
    
`;