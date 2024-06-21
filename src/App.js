import './App.sass';
import Header from "./components/Header/Header";
import UserPage from "./pages/UserPage/UserPage";
import Dashboard from "./pages/Dashboard/Dashboard";
import {
    BrowserRouter as Router,
    Routes,
    Route,
} from "react-router-dom";
import LoginPage from "./pages/Login/LoginPage";

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
