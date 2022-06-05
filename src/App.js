import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import { GlobalProvider } from './components/v1/context/GlobalState';
import MainContainer1 from './components/v1/MainContainer';
import MainContainer2 from './components/v2/MainContainer';
import { BrowserRouter, Route, Routes } from 'react-router-dom'



function App() {
  return (

      <BrowserRouter>
        <GlobalProvider>
          <div className="App">
            <Header />
            <div className='main container'>
              <Routes>
                <Route exact path="/" element={<MainContainer1 />}></Route>
                <Route path="v2" element={<MainContainer2 />}></Route>
                <Route path="*" element={<MainContainer1 />} />
              </Routes>

            </div>
            <Footer />
          </div>
        </GlobalProvider>
      </BrowserRouter>
   


  );
}

export default App;
