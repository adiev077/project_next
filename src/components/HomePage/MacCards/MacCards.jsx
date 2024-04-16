'use client'

import React, {useEffect, useState} from 'react';
import styles from './MacCards.module.scss';
import Image from "next/image";

function MacCards(props) {

    const [products, setProducts] = useState([]);

    useEffect( () => {

        const fetchData = async () => {
            try {
                const response = await fetch('https://demo1755075.mockable.io/MacCards');
                const data = await response.json();
                setProducts(data);
            } catch (error) {
                console.log("Ошибка!!!!!!");
            }
        }
        fetchData();
    }, [])

    const svgArrow = (
        <svg width="11" height="14" viewBox="0 0 14 11" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M9.2925 5.25118L4.41613 1.60056C4.33476 1.53961 4.22666 1.50562 4.11425 1.50562C4.00184 1.50562 3.89374 1.53961 3.81238 1.60056L3.80713 1.60468C3.76754 1.63422 3.73603 1.66979 3.71449 1.7092C3.69295 1.74862 3.68185 1.79107 3.68185 1.83396C3.68185 1.87686 3.69295 1.9193 3.71449 1.95872C3.73603 1.99814 3.76754 2.0337 3.80713 2.06324L8.39913 5.50074L3.80713 8.93687C3.76754 8.96641 3.73603 9.00197 3.71449 9.04139C3.69295 9.08081 3.68185 9.12325 3.68185 9.16615C3.68185 9.20904 3.69295 9.25149 3.71449 9.29091C3.73603 9.33032 3.76754 9.36589 3.80713 9.39543L3.81238 9.39956C3.89374 9.4605 4.00184 9.4945 4.11425 9.4945C4.22666 9.4945 4.33476 9.4605 4.41613 9.39956L9.2925 5.74893C9.33539 5.71683 9.36953 5.67821 9.39286 5.63543C9.41618 5.59265 9.42821 5.5466 9.42821 5.50006C9.42821 5.45351 9.41618 5.40746 9.39286 5.36468C9.36953 5.3219 9.33539 5.28329 9.2925 5.25118Z" fill="#5E8BCE"/>
        </svg>
    );

    return (
        <div className={styles['mac_cards']}>
            <div className={styles['mac_cards_container']}>
                <div className={styles['mac_cards_container_head']}>
                    <h2 className={styles['mac_cards_container_head_title']}>Choose your Mac</h2>
                    <p className={styles['mac_cards_container_head_paragraph']}>The Superpower of Professionals</p>
                    <button className={styles['mac_cards_container_head_btn']}>more detailed{svgArrow}</button>
                </div>
                <div className={styles['mac_cards_container_list']}>
                    {products.map((product, index) => (
                        <div key={index} className={`${styles['mac_cards_container_list_wrap']} ${index === 1 ? styles['mac_cards_container_list_wrap_second'] : ''} ${index === 2 ? styles['mac_cards_container_list_wrap_third'] : ''}`}>
                            <div className={styles['mac_cards_container_list_wrap_title']}>
                                <h2 className={styles['mac_cards_container_list_wrap_title_head']}>
                                    {product.name}
                                </h2>
                                <p className={styles['mac_cards_container_list_wrap_title_paragraph']}>
                                    {product.description}
                                </p>
                                <div className={styles['mac_cards_container_list_wrap_title_btn']}>
                                    <button className={styles['mac_cards_container_list_wrap_title_btn_one']}>
                                        More detailed{svgArrow}
                                    </button>
                                    <button className={styles['mac_cards_container_list_wrap_title_btn_two']}>
                                        Buy{svgArrow}
                                    </button>
                                </div>
                            </div>
                            <div className={styles['mac_cards_container_list_wrap_image']}>
                                <Image className={styles['mac_cards_container_list_wrap_image_img']}
                                     src={product.image} alt=""
                                       width={702}
                                       height={580}
                                />
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default MacCards;