import React from 'react'
import Analytics from '../OnBoarding/Analytics'
import MediaCard from '../OnBoarding/MediaCard'
import NavBar from '../OnBoarding/NavBar'
import Subnav from '../OnBoarding/Subnav'

function onboarding() {
    return (
        <div>
            <NavBar/>
            <Subnav/>
            <MediaCard/>
            {/* <Analytics/> */}
        </div>
    )
}

export default onboarding
