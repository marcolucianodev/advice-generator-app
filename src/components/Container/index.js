import styled from "styled-components";

export const ContainerArea = styled.main`
    display: flex;
    justify-content: center;
    background-color: #1f2632;
    width: 100%;
    height: 100vh;
    padding: 4%;
    min-height: 500px;
`;

export const Container = ({children}) => {

    return (
        <ContainerArea>
            {children}
        </ContainerArea>
    );
}

export default Container; 