import React from 'react'
import { Grid } from '@material-ui/core'

import dynamic from 'next/dynamic'

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
           <Grid container xs={12} justifyContent='center' alignItems='center'>
             <Grid item>
             <DynamicComponentWithNoSSR/>
             </Grid>
             <Grid item>
               <DynamicComponentWithNoSSROne/>
             </Grid>
             <Grid item>
               <DynamicComponentWithNoSSRThree/>
             </Grid>
           </Grid>
        </div>
    )
}

export default onboardingsystem
