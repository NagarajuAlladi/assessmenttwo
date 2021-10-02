import React from 'react'
import Analytics from '../OnBoarding/Analytics'
import Footer from '../OnBoarding/Footer'
import MediaCard from '../OnBoarding/MediaCard'
import NavBar from '../OnBoarding/NavBar'
import Subnav from '../OnBoarding/Subnav'


function onboarding() {
    return (
        <div>
            <NavBar/>
            <Subnav/>
            <MediaCard/>
            <Footer/>
        </div>
    )
}

export default onboarding
