import React from 'react'
import EmployeeCard from '../OnBoarding/EmployeeCard'
import NavBar from '../OnBoarding/NavBar'
import Subnav from '../OnBoarding/Subnav'

function onboarding() {
    return (
        <div>
            <NavBar/>
            <Subnav/>
            <EmployeeCard/>
        </div>
    )
}

export default onboarding
