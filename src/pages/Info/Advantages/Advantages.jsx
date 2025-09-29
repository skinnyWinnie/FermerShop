import { ShopButton } from '../../../UI/ShopButton/ShopButton'
import styles from './styles.module.css'
import { features } from '../../../mock'
import { ProductCard } from '../../../components/productCard/ProductCard'

export function Advantages() {
    return (
        <section className={styles.advantages}>
            <h2 className={styles.header}>
                Почему фермерские продукты лучше?
            </h2>
            <ul className={styles.wrapper}>
                {features.map((item) => (
                    <li className={styles.listItem}  key={item.id}>
                        <ProductCard features={item}/>
                    </li>
                    
                    ))
                }
            </ul>
            <ShopButton style={{marginLeft: 'auto', marginRight: 'auto'}}/>
        </section>
    )
}
