import {StyledLogo, StyledLogoMainPage} from './styled.js'
import { AppRoute } from '../../const'
import { useLocation } from 'react-router';
export function Logo() {

    const { pathname } = useLocation();

    return pathname === AppRoute.MAIN ?  (
        <StyledLogoMainPage  to={AppRoute.MAIN}>
                <img src={process.env.PUBLIC_URL + '/img/logo/farmer 1.png'} alt=""  />
                <h3 >
                    Фермерские продукты
                </h3>
        </StyledLogoMainPage>
    ) : (
        <StyledLogo  to={AppRoute.MAIN}>
                <img src={process.env.PUBLIC_URL + '/img/logo/farmer 1.png'} alt=""  />
                <h3 >
                    Фермерские продукты
                </h3>
        </StyledLogo>
    )
}
