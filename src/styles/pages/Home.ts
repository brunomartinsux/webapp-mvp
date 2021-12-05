import styled from 'styled-components';

export const Container = styled.div`
    width: 100vw;
    height: 100vh;

    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;

    h1 {
        font-size: ${(props) => 3 * props.theme.metrics.base}px;
        color: ${(props) => props.theme.colors.primary_dark};
    }
`;
