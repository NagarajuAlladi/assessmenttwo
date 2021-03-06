import Head from 'next/head'
import Engineering from '../Components/Dashboard/Engineering'
import Marketing from '../Components/Dashboard/Marketing'
import Navbar from '../Components/Navbar'
import Sidenav from '../Layouts/Sidenav'
import Subnav from '../Components/Dashboard/Subnav'
import theme from '../Components/theme'
import { ThemeProvider } from '@material-ui/styles'
import Design from '../Components/Dashboard/Design'



export default function Home() {
  return (
      <ThemeProvider theme={theme}>
      <div style={{backgroundColor:'rgb(242,245,252)'}}>
      <Head>
        <title>Bildemp</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@fortawesome/fontawesome-free@5.15.4/css/fontawesome.min.css" integrity="sha384-jLKHWM3JRmfMU0A5x5AkjWkw/EYfGUAGagvnfryNV3F9VqM98XiIH7VBGVoxVSc7" crossorigin="anonymous"></link>
      </Head>
      
      <Sidenav/>
     
      <Navbar/>

      <Subnav/>

      <Engineering/>
      
      <Design/>

      <Marketing/>
    </div>
    </ThemeProvider>
  )
}
