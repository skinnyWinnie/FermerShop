import styles from './styles.module.css'
export function TabsButton( { children, onClick, isActive }) {
    return (
        <button onClick={onClick} className={isActive ? `${styles.button} ${styles.active}` : styles.button}>
            {children}
        </button>
    )
}
