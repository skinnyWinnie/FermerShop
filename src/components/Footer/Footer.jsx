import { Logo } from '../../UI/Logo/Logo'
import styles from './styles.module.css'
export function Footer() {
    return (
        <footer className={styles.footer}>
            <Logo/>
            <div className={styles.footerTxt}>
                Создано 2021
            </div>
        </footer>
        
    )
}
