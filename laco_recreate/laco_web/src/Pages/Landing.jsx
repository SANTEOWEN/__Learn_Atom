import React from 'react'
import Hero from '../sections/Hero'
import { lazy } from 'react';
import WhyLcc from '../sections/WhyLcc';
import PopularC from '../sections/PopularC';

const SmallAboutSection = lazy(() => import('../sections/SmallAboutSection'));
const Events = lazy(() => import('../sections/Events'));

function LandingPage() {
    return (
        <>
            <Hero />
            <SmallAboutSection />
            <WhyLcc />
            <PopularC />
            <Events />
        </>
    )
}

export default LandingPage