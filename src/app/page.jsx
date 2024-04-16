import React from 'react';
import Header from "@/components/header/Header";
import CardBlocks from "@/components/HomePage/CardBlocks/CardBlocks";
import GarminCards from "@/components/HomePage/GarminiCards/GarminCards";
import IphoneCards from "@/components/HomePage/IphoneCards/IphoneCards";
import MacCards from "@/components/HomePage/MacCards/MacCards";
import PromoSwiper from "@/components/HomePage/PromoSwiper/PromoSwiper";
import ScrollBar from "@/components/HomePage/ScrollBar/ScrollBar";
import Footer from "@/components/footer/Footer";

function Page() {
    return (
        <div>
            <Header/>
            <PromoSwiper/>
            <CardBlocks/>
            <ScrollBar/>
            <IphoneCards/>
            <GarminCards/>
            <MacCards/>
            <Footer/>
        </div>
    );
}

export default Page;