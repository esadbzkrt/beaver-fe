import './App.sass';
import Header from "./app/components/Header/Header";
import UserPage from "./app/pages/UserPage/UserPage";
import Dashboard from "./app/pages/Dashboard/Dashboard";
import {
    BrowserRouter as Router,
    Routes,
    Route,
} from "react-router-dom";
import LoginPage from "./app/pages/Login/LoginPage";

function App() {
    return (
        <Router>
            <div className="App">
                <Header/>
                <Routes>
                    <Route path="/" exact element={<Dashboard/>}/>
                    <Route path="/login" exact element={<LoginPage page="login"/>}/>
                    <Route path="/signup" exact element={<LoginPage page="signup"/>}/>
                    <Route path="/user" exact element={<UserPage/>}/>
                </Routes>
            </div>
        </Router>
    );
}

export default App;
