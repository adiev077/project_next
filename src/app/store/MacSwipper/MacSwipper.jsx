'use client'

import React, {useEffect, useState} from 'react';
import {Swiper, SwiperSlide} from "swiper/react";
import styles from './MacSwipper.module.scss'
import {Autoplay, Navigation} from "swiper/modules";
import 'swiper/css/navigation';
import 'swiper/css/effect-fade';
import 'swiper/css';
import Link from "next/link";


function MacSwipper() {

    const [images, setImage] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('https://demo1755075.mockable.io/mac_images');
                const data = await response.json();
                setImage(data);
            } catch (error) {
                console.log("Ошибка!!!!!!");
            }
        };

        fetchData();
    }, []);

    return (
        <div className={styles.content}>
            <p>MacBook Pro</p>
            <h2>
                <span>Mind-blowing.</span>
                <span>Head-turning.</span>
            </h2>
            <div className={styles.swiperBlock}>
                <Swiper
                    centeredSlides={true}
                    slidesPerView={1}
                    effect="fade"
                    loop={true}
                    modules={[Autoplay, Navigation]}
                    autoplay={{delay: 4500}}
                    speed={600}
                    grabCursor={true}
                >
                    {images.map((images, index) => (
                        <SwiperSlide key={index}>
                            <img className={styles.slidesImage}
                                 src={`https://ik.imagekit.io/kvsf72hfx/MacSwipper/${images}`} alt=""/>
                        </SwiperSlide>
                    ))}
                </Swiper>
                <div className={styles.link}>
                    <Link href='/mac' className={styles['btn']}>
                        Buy
                    </Link>
                </div>
                <p className={styles.paragraph}>
                    From $1599 or $133.25/mo. for 12 mo.*
                </p>
            </div>
        </div>
    );
}

export default MacSwipper;