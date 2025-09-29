import styles from './styles.module.css'

export function InfoSection() {
    return (
        <section className={styles.infoSection}>
            <div className={styles.wrapper}>
                <h1 className={styles.mainHeader}>
                    Магазин фермерских продуктов с доставкой
                </h1>
                <p className={styles.mainTxt}>
                    Все продукты изготавливаются под заказ. Фермеры начинают готовить продукты за день до отправки заказа клиентам. Именно поэтому мы принимаем заказы заранее и доставляем продукты максимально свежими.
                </p>
            </div>
            <div className={styles.imgWrapper}>
                <img src={process.env.PUBLIC_URL + '/img/Frame.png'} alt="" className={styles.mainImg} />
            </div>
            
            
        </section>
    )
}
