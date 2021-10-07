import React from 'react'
import DialogBox from '../Components/DialogBox'

import Analytics from '../Components/OnBoarding/Analytics'
import Footer from '../Components/OnBoarding/Footer'
import MediaCard from '../Components/OnBoarding/MediaCard'
import NavBar from '../Components/OnBoarding/NavBar'
import Subnav from '../Components/OnBoarding/Subnav'
import SignUp from '../Components/SignUp'


function onboarding() {
    return (
        <div>
            {/* <NavBar/> */}
            {/* <Subnav/> */}
            {/* <MediaCard/> */}
            {/* <Footer/> */}
           
           <DialogBox title='Add New Employee'>
           <SignUp/>
           </DialogBox>
           <MediaCard/>
           <Footer/>
        </div>
    )
}

export default onboarding
