import { ShopButton } from '../../UI/ShopButton/ShopButton'
import styles from './styles.module.css'
import { Logo } from '../../UI/Logo/Logo'
import { useLocation } from 'react-router';
import { AppRoute } from '../../const';

export function Header() {

    const pageUrl = useLocation().pathname;

    return (
        
        <header className={styles.header}>
            <Logo/>
            {pageUrl === AppRoute.MAIN ? (<ShopButton/>) : (null)
            }
            
        </header>
    )
}
