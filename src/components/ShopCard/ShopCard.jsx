import { useState } from 'react'
import styles from './styles.module.css'
import { TabsButton } from '../../UI/TabsButton/TabsButton'
export function ShopCard({product}) {

    const [activeTab, setActiveTab] = useState('descr')

    return (
        <li className={styles.item}>
                                <img src={product.image} alt="" className={styles.itemImg} style={{width: '248px', height: '248px'}}/>
                                <div className={styles.cardWrapper}>
                                    <h4 className={styles.cardHeader}>{product.name}</h4>
                                    <div className={styles.tabs}> 
                                        <div className={styles.tabsWrapper}>
                                            <TabsButton 
                                                isActive={activeTab === 'descr'}
                                                onClick={()=> setActiveTab('descr')} 
                                                className={activeTab === 'descr' ? styles.active : ''}>
                                                    Описание
                                            </TabsButton>
                                            <TabsButton 
                                                isActive={activeTab === 'characteristics'}
                                                onClick={()=> setActiveTab('characteristics')} 
                                                className={activeTab === 'characteristics' ? styles.active : ''}>
                                                    Характеристики
                                            </TabsButton>
                                            <TabsButton 
                                                isActive={activeTab === 'rewievs'}
                                                onClick={()=> setActiveTab('rewievs')} 
                                                className={activeTab === 'rewievs' ? styles.active : ''}>
                                                    Свойства
                                            </TabsButton>
                                        </div>
                                        {activeTab === 'descr' && 
                                            (<div className={styles.descrTab}>
                                                <p className={styles.cardTxt}>{product.description}</p>
                                                <span className={styles.priceWeight}>{product.price} руб. / {product.weight} гр.</span>
                                            </div>)}
                                        {activeTab === 'characteristics' && product.specifications &&
                                            (
                                            
                                            <div className={styles.charTab}>
                                                    <ul className={styles.charList}>
                                                        {product.specifications.map((item, index)=> (
                                                            <li className={styles.charItem} key={index}>
                                                                <span className={styles.propertyChar}>{item.property}</span>
                                                                <span className={styles.valueChar}>{item.value}</span>
                                                            </li>
                                                        ))}
                                                        
                                                    </ul>
                                                </div>
                                            )}
                                        {activeTab === 'rewievs' && product.structure &&
                                            (<div className={styles.structureTab}>
                                                    <ul className={styles.structureList}>
                                                        {product.structure.map((item, index)=> (
                                                            <li className={styles.structureItem} key={index}>
                                                                <span className={styles.structureProperty}>{item.property}</span>
                                                                <span className={styles.structureValue}>{item.value}</span>
                                                            </li> 
                                                        ))}
                                                        
                                                    </ul>
                                                </div>
                                            )}
                                       
                                 </div>
                                    
                            </div>
                                        
                            
                            </li>
    )
}
