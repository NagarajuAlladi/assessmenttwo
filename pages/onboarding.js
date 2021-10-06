import React from 'react'
import Analytics from '../Components/OnBoarding/Analytics'
import Footer from '../Components/OnBoarding/Footer'
import MediaCard from '../Components/OnBoarding/MediaCard'
import NavBar from '../Components/OnBoarding/NavBar'
import Subnav from '../Components/OnBoarding/Subnav'


function onboarding() {
    return (
        <div>
            {/* <NavBar/> */}
            {/* <Subnav/> */}
            <MediaCard/>
            <Footer/>
        </div>
    )
}

export default onboarding
