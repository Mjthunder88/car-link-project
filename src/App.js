import './components/UI/stylesheet.css';

import {Routes, Route} from 'react-router-dom'

import AuthScreen from './screens/AuthScreen';
import HomeScreen from './screens/HomeScreen'
import Header from './components/header/Header';
import Footer from './components/footer/Footer'



function App() {
  return (
    <div className="main">
      <Header />
      <Routes>
        <Route path='/' element={<HomeScreen />} />
        <Route path='/auth' element={<AuthScreen />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
