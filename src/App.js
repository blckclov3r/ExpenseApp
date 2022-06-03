import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import MainContainer from './components/v1/MainContainer';

function App() {
  return (
    <div className="App">
        <Header />
        <div className='main container'>
            <MainContainer  />
        </div>
        <Footer />
    </div>
  );
}

export default App;
