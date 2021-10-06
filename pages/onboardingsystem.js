import React from 'react'
import { Grid } from '@material-ui/core'

import dynamic from 'next/dynamic'
import Card from '../OnboardingSystem/OnboardingCard'
import OnboardingCard from '../OnboardingSystem/OnboardingCard'
import ParentCard from '../OnboardingSystem/ParentCard'

const DynamicComponentWithNoSSR = dynamic(
  () => import('../OnboardingSystem/ChartOne'),
  { ssr: false }
)

const DynamicComponentWithNoSSROne = dynamic(
  () => import('../OnboardingSystem/ChartTwo'),
  { ssr: false }
)

const DynamicComponentWithNoSSRThree = dynamic(
  () => import('../OnboardingSystem/ChartThree'),
  { ssr: false }
)

function onboardingsystem() {
    return (
        <div>
           <Grid container xs={12} justifyContent='center' alignItems='center' spacing={5} style={{marginTop:'30px'}}>
             <Grid item >
             <DynamicComponentWithNoSSR/>
             </Grid>
             <Grid item>
               <DynamicComponentWithNoSSROne/>
             </Grid>
             <Grid item>
               <DynamicComponentWithNoSSRThree/>
             </Grid>
           </Grid>
           <Grid container xs={12} justifyContent='center' alignItems='center'>
            <ParentCard/>
           </Grid>
        </div>
    )
}

export default onboardingsystem
