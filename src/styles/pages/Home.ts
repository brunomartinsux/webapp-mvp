import styled from 'styled-components';

export const Container = styled.div`
    width: 100%;
    height: 90vh;

    padding: 0 600px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    h1 {
        color: ${(props) => props.theme.colors.primary_dark};
    }
`;
