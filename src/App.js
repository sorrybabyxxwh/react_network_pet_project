// import { makeStyles } from '@material-ui/core';
import classes from './App.module.css';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import Dialogs from './components/Dialogs/Dialogs';
import {BrowserRouter, Switch, Route, Link, Routes} from 'react-router-dom';


const App = (props) => {

    // const classes = useStyles();
    return (
        <BrowserRouter>
            <div className={classes.app_wrapper}>
                <Header/>
                <Navbar/>

                {/*<Profile />*/}
                <div className={classes.app_wrapper_content}>
                    <Routes>
                        <Route path="dialogs/*" element={<Dialogs state={props.state.messagesPage}/>}/>
                        <Route path="/profile" element={<Profile state={props.state.profilePage}/>}/>
                    </Routes>
                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;
