'use client'

import React, {useEffect, useState} from 'react';
import {Swiper, SwiperSlide} from "swiper/react";
import styles from './PromoSwipper.module.scss'
import {Autoplay, Navigation} from "swiper/modules";
import 'swiper/css/navigation';
import 'swiper/css/effect-fade';
import 'swiper/css';
import Image from "next/image";


function MySwiper() {

    const [images, setImages] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('https://demo1755075.mockable.io/images');
                const data = await response.json();
                setImages(data);
            } catch (error) {
                console.log("Ошибка!!!!!!");
            }
        };

        fetchData();
    }, []);

    return (
        <div className={styles.swiperBlock}>
            <Swiper
                centeredSlides={true}
                slidesPerView={1}
                effect="fade"
                loop={true}
                modules={[Autoplay, Navigation]}
                autoplay={{delay: 5500}}
                navigation
                speed={600}
                grabCursor={true}
            >
            {images.map((images, index) => (
                    <SwiperSlide key={index}>
                        <Image className={styles.slidesImage}
                             src={`https://ik.imagekit.io/kvsf72hfx/SwiperSlide/${images}`}
                               alt=""
                               width={1513}
                               height={385}
                        />
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
}

export default MySwiper;