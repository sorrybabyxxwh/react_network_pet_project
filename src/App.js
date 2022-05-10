import classes from './App.module.css';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import DialogsContainer from "./components/Dialogs/DialogsContainer";


const App = (props) => {
    debugger;
    return (
            <BrowserRouter>
            <div className={classes.app_wrapper}>
                <Header/>
                <Navbar/>
                <div className={classes.app_wrapper_content}>
                    <Routes>
                        <Route path="dialogs/*" element={<DialogsContainer store={props.store}/>}/>
                        <Route path="/profile" element={<Profile store={props.store}/>}/>
                    </Routes>
                </div>
            </div>
            </BrowserRouter>

    );
}

export default App;
