import { useContext } from 'react'

import { Routes, Route, Navigate } from "react-router-dom";

import AuthContext from "./store/GlobalContext";

import "./components/UI/stylesheet.css";

import AddCarScreen from './screens/AddCarScreen';
import AuthScreen from "./screens/AuthScreen";
import HomeScreen from "./screens/HomeScreen";
import CarDetailScreen from './screens/CarDetailScreen';
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";

function App() {

  const authCtx = useContext(AuthContext)

  return (
    <div className="main">
      <Header />
      <Routes>
        <Route path="*" element={authCtx.token ? <HomeScreen /> : <Navigate to='/auth' />} /> 
        <Route path="/add-car" element={authCtx.token ? <AddCarScreen /> : <Navigate to='/auth' />} />
        <Route path="/details" element={authCtx.token ? <CarDetailScreen /> : <Navigate to='/auth' />} />
        <Route path="/auth" element={<AuthScreen />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
