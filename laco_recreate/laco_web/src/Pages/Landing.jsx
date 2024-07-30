import React from 'react'
import Hero from '../sections/Hero'
import { lazy } from 'react';
import Privacy from '../sections/Privacy';

const SmallAboutSection = lazy(() => import('../sections/SmallAboutSection'));
const Events = lazy(() => import('../sections/Events'));

function LandingPage() {
    return (
        <>
            <Hero />
            <SmallAboutSection />
            <Events />
            <Privacy />
        </>
    )
}

export default LandingPage