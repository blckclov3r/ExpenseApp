import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import { GlobalProvider } from './components/v1/context/GlobalState';
import MainContainer from './components/v1/MainContainer';

function App() {
  return (
      <GlobalProvider>
        <div className="App">
        <Header />
        <div className='main container'>
            <MainContainer  />
        </div>
        <Footer />
    </div>
      </GlobalProvider>
  );
}

export default App;
