import { useContext } from 'react'

import { Routes, Route, Navigate } from "react-router-dom";

import AuthContext from "./store/GlobalContext";

import "./components/UI/stylesheet.css";

import AddCarScreen from './screens/AddCarScreen';
import AuthScreen from "./screens/AuthScreen";
import HomeScreen from "./screens/HomeScreen";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";

function App() {

  const authCtx = useContext(AuthContext)

  return (
    <div className="main">
      <Header />
      <Routes>
        <Route path="*" element={<Navigate to='/auth' />} /> [//! uncomment this line after dev]
        {/* <Route path="*" element={<Navigate to='/' />} /> [//! delete this line after dev] */}
        <Route path="/" element={authCtx.token ? <HomeScreen /> : <Navigate to='/auth' />} /> [//! uncomment this line after dev]
        <Route path="/auth" element={<AuthScreen />} />
        {/* <Route path="/" element={<HomeScreen />} /> [//! delete this line after dev] */}
        <Route path='/add-car' element={authCtx.token ? <AddCarScreen /> : <Navigate to='auth' />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
