import styled, { css } from "styled-components";
import { Link } from "react-router-dom";


const logoStyle = css`
    display: flex;
    align-items: center;
    & img {
        height: 44px;
        margin: 8px 24px 8px 0;
    }
    & h3 {
    font-size: 28px;
    }
`

export const StyledLogo = styled(Link)`
    ${logoStyle}
    cursor: pointer;
`

export const StyledLogoMainPage = styled.span`
    ${logoStyle}
`