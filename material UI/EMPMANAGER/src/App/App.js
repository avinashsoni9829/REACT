import './App.css';
import Header from '../components/Header';
import SideMenu from '../components/SideMenu';
import { makeStyles,CssBaseline, createMuiTheme, ThemeProvider } from '@material-ui/core';
import PageHeader from '../components/PageHeader';
import PeopleOutlineIcon from '@material-ui/icons/PeopleOutline';
const theme= createMuiTheme({
  palette:{
    primary:{
      main:"#333996",
      light:"#3c44b126"
    },
    secondary:{
      main:"#f83245",
      light:"#f8324526"
    },
    background:{
      default:"#f4f5fd"
    }
  },
  shape:{
    borderRadius:'12px'
  },
  overrides:{
    MuiAppBar : {
      root:{
        transform:'translateZ(0)'
      }
    }
  },
  props:{
    MuiIconButton:{
      disableRipple:true
    }
  }
})

const useStyles=makeStyles({
  appMain:{
    paddingLeft:'320px',
    width:'auto'
  }
})



function App() {

  const classes=useStyles();
  return (
   // react .fragments are used ! 
   <ThemeProvider theme={theme} >

<SideMenu/>
    <div className={classes.appMain}>
      <Header/>
      <PageHeader
        title="Page Header"
        subTitle="Page Description"
        icon={<PeopleOutlineIcon fontSize="large"/>}
       
       />
    </div>
      <CssBaseline/>


   </ThemeProvider>
     
    
    
  )}

export default App;
