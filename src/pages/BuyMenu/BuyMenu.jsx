import { ShopButton } from '../../UI/ShopButton/ShopButton'
import {styled} from 'styled-components'
import styles from './styles.module.css'
import { ShopCard } from '../../components/ShopCard/ShopCard'
import {  SwiperSlide } from 'swiper/react';
import { Mousewheel, Pagination, Scrollbar } from 'swiper/modules';
import 'swiper/css'; // Обновленные импорты стилей
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { ProductSwiper } from './styled.jsx'
import { useState } from 'react';

const Ul = styled.ul`
    
`
const Label = styled.label`

`

const AddressInput = styled.input`
    width: 313px;
    height: 48px;
    padding-left: 12px;
    margin-bottom: 20px;
    border-color: #DEDEDE;
`

export function BuyMenu({ products}) {
    
    const [selectProductIds, setSelectProductIds] = useState([]);
    const [swiperRef, setSwiperRef] = useState(null);
    const [address, setAddress] = useState('')
    const safeSelectProductIds = Array.isArray(selectProductIds) ? selectProductIds : [];

    

    const handleOnClickProduct = (productId, index) => {
        // Добавляем проверку на массив и безопасный вызов
        if (!safeSelectProductIds.includes(productId)) {
            swiperRef?.slideTo(index, 0);
        }
        
        // Обновляем выбранные продукты
        setSelectProductIds(prev => {
            // Проверяем, что prev - это массив
            const currentIds = Array.isArray(prev) ? prev : [];
            
            if (currentIds.includes(productId)) {
                return currentIds.filter(id => id !== productId);
            } else {
                return [...currentIds, productId];
            }
        });
    };

    const handleCheckboxChange = (productId, e) => {
        e.stopPropagation();
        setSelectProductIds(prev => {
            // Проверяем, что prev - это массив
            const currentIds = Array.isArray(prev) ? prev : [];
            
            if (currentIds.includes(productId)) {
                return currentIds.filter(id => id !== productId);
            } else {
                return [...currentIds, productId];
            }
        });
    };

    const totalPrice = safeSelectProductIds.reduce((total, productId) => {
         const product = products.find(p => p.id === productId);
         return total + (product?.price || 0);
     }, 0);

    const handleBuyClick = () => {

        const selectedProducts = products.filter(product => 
            safeSelectProductIds.includes(product.id)
        );
        const productNames = selectedProducts.map(product => product.name).join(', ');
        const message = `Вы заказали: ${productNames || 'ничего'}\nАдрес доставки: ${address || 'не указан'}\nОбщая стоимость: ${totalPrice} руб`;
        
        alert(message);
    }

    return (
        <section className={styles.buyMenu}>
            <div className={styles.leftColumn}>
                <div className={styles.formWrapper}>
                <form action="" 
                        className={styles.filters} 
                        
                >
                    <h3 className={styles.formHeader}>Выберите продукты</h3>
                    <Ul  className={styles.prodList}>

                        {products.map((product, index)=> {
                        const isChecked = safeSelectProductIds.includes(product.id);

                        return ( <Label 
                            className={styles.customCheckbox} 
                            key={product.id}
                            htmlFor={`checkbox-${product.id}`}       
                        >
                                    
                            <span>{product.name}</span>
                            <input 
                                type="checkbox" 
                                checked={isChecked}
                                onChange={(e) => handleCheckboxChange(product.id, index, e)}
                                onClick={(e) => e.stopPropagation()}
                                
                            />
                            <span className={styles.checkmark} onClick={() => handleOnClickProduct(product.id, index)}></span>
                        </Label>)
                    })}
                    </Ul >
                    
                </form>
                </div>
                <div className={styles.orderForm}>
                    <h3 className={styles.orderFormHeader}>
                        Сделать заказ
                    </h3>
                    <AddressInput 
                        placeholder='Введите адрес доставки' 
                        value={address}
                        onChange={(e) => setAddress(e.target.value)}
                    />
                    <span className={styles.priceTxt}>
                        Цена
                    </span>
                    <span className={styles.price}>{totalPrice} руб</span>
                    <ShopButton onClick={handleBuyClick}/>
                </div>
            </div>
                <ProductSwiper
                        spaceBetween={12}
                        direction="vertical"
                        slidesPerView="auto"
                        scrollbar={{ draggable: true }}
                        mousewheel={{
                            passive: true,
                            forceToAxis: true,
                        }}
                        pagination={{
                        type: "fraction"
                        }}
                        onSwiper={setSwiperRef}
                        modules={[Mousewheel, Pagination, Scrollbar]}
                    >
                        {products.map((product) => (
                        <SwiperSlide key={product.id}>
                            <ShopCard key={product.id + 1} product={product} />
                        </SwiperSlide>
                        ))}
                </ProductSwiper>

        </section>
    )
}

