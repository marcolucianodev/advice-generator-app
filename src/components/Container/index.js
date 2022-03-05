import styled from "styled-components";

export const ContainerArea = styled.main`
    display: flex;
    justify-content: center;
    background-color: #1f2632;
    width: 100%;
    height: 100vh;
`;

export const Container = () => {
    return (
        <ContainerArea>
            ...
        </ContainerArea>
    );
}

export default Container;