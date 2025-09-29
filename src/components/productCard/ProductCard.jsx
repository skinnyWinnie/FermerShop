import styles from './styles.module.css'
export function ProductCard({ features }) {
    if (!features) return null;
    return  (
        <div className={`${styles.cardHeader} ${features.isNegative ? styles.cardHeaderRed : ""}`}>
            <div className={styles.wrapper1}>
                <img src={features.image} alt="" className={styles.cardImg} />
                <div className={styles.wrapperHeader}>
                    <p className={`${styles.farmProd} ${features.isNegative ? styles.farmProdRed : ""}`}>
                        {features.owner}
                    </p>
                    <h4 className={styles.farmProdHead}>
                        {features.title}
                    </h4>
                </div>
            </div>
            <div className={styles.cardTxt}>
                {features.about}
            </div>
        </div>
    ) 
}
