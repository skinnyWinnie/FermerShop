import { AppRoute } from '../../const'
import styles from './styles.module.css'
import { Link } from 'react-router'


export function ShopButton({ style, onClick, link}) {
    
    return (
    <Link className={styles.buyButton} style={style} onClick={onClick} to={AppRoute.ORDER}>
                Купить
    </Link>
    )
}
