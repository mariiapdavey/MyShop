import './App.css';
import { Container } from 'react-bootstrap'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Footer from './components/Footer';
import Header from './components/Header';
import HomeScreen from './screens/HomeScreen';
import ServiceScreen from './screens/ServiceScreen';

const App = () => {
  return (
    <> 
    <Router>
      <Header />
      <main className="main-content">
        <Container>
          <Routes>
            <Route path="/" exact element={<HomeScreen />} />
            <Route path="/service/:id" element={<ServiceScreen/>} />
          </Routes>
        </Container>
      </main>
       
      < Footer />
    </Router>
    </>
  )
}

export default App;
