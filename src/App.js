// import { makeStyles } from '@material-ui/core';
import classes from './App.module.css';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import Dialogs from './components/Dialogs/Dialogs';
import {BrowserRouter, Switch, Route, Link, Routes} from 'react-router-dom';
import store from "./redux/state";


const App = (props) => {
    return (
            <BrowserRouter>
            <div className={classes.app_wrapper}>
                <Header/>
                <Navbar/>
                <div className={classes.app_wrapper_content}>
                    <Routes>
                        <Route path="dialogs/*" element={<Dialogs store={props.store}/>}/>
                        <Route path="/profile" element={<Profile profilePage={props.state.profilePage} dispatch={props.dispatch}/>}/>
                    </Routes>
                </div>
            </div>
            </BrowserRouter>

    );
}

export default App;
