import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import NavBar from './components/Sidebar/Sidebar';
import Profile from './components/Profile/Profile';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import News from './components/News/News';
import Music from './components/Music/Music';
import Settings from './components/Settings/Settings';
import DialogsContainer from './components/Dialogs/DialogsContainer';
import UsersContainer from './components/Users/UsersContainer';



function App(props) {
    return (

        <BrowserRouter>
            <div className="App-wrapper">
                <Header />
                <NavBar />
                <div className='App-wrapper-content'>
                    <Routes>
                        <Route path='/profile' element={<Profile />} />
                        <Route path='/dialogs/*' element={<DialogsContainer />} />
                        <Route path='/news' element={<News />} />
                        <Route path='/users' element={<UsersContainer />} />
                        <Route path='/music' element={<Music />} />
                        <Route path='/settings' element={<Settings />} />
                    </Routes>
                </div>


            </div>
        </BrowserRouter>
    );
}

export default App;
