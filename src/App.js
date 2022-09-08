import './App.css';
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import {Routes, Route} from "react-router-dom";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";
import Main from "./components/Main/Main";
import MessagesContainer from "./components/Messages/MessagesContainer";
import AllUsersContainer from "./components/AllUsers/AllUsersContainer";
import ProfileContainerC from "./components/Profile/ProfileContainer";
import TitleContainer from "./components/Title/TitleContainer";
import Login from "./components/Login/Login";


const App = (props) => {
    return (
        <div className='app-wrapper'>
            <Header/>
            <TitleContainer/>
            <Navbar/>
            <div className='app-wrapper-content'>
                <Routes>
                    <Route path="/*"
                           element={<Main/>}
                    />

                    <Route path="/profile/*"
                           element={<ProfileContainerC
                           />}>
                        <Route path=":userId"
                               element={<ProfileContainerC
                               />}/>
                    </Route>
                    <Route path="/messages/*"
                           element={<MessagesContainer

                           />}
                    />
                    <Route path="/news/*" element={<News/>}/>
                    <Route path="/login/*" element={<Login/>}/>
                    <Route path="/music/*" element={<Music/>}/>
                    <Route path="/settings/*" element={<Settings/>}/>
                    <Route path="/users/*" element={<AllUsersContainer/>}/>
                </Routes>
            </div>
        </div>
    )
}

export default App;
