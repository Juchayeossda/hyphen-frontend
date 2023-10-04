import { Link } from "react-router-dom";
import styled from "styled-components";

export const MainLayout = styled.div`
    min-width: 100vw;
    min-height: 100vh;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`

export const Title = styled.div`
    font-family: Inter;
    font-size: 6.25rem;
    font-weight: 600;
`

export const BtnRow = styled.div`
    display: flex;
    `

export const RedirectBtn = styled(Link)`
    margin: 0 1.5rem;
    width: 5.75rem;
    height: 1.9375rem;
    border-radius: 0.1875rem;
    background: #24D782;

    color: #FFF;
    font-family: Pretendard;
    font-size: 0.875rem;
    font-weight: 600;
    text-decoration: none;
    
    display: flex;
    justify-content: center;
    align-items: center;
`