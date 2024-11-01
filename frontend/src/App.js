import './App.css';
import { Container } from 'react-bootstrap/Container'
import Footer from './components/Footer';
import Header from './components/Header';

const App = () => {
  return (
    <> 
      <Header />
      <main>
        <Container>
          <h1>Welcome to MyShop</h1>
        </Container>
      </main>
       
      < Footer />
    </>
  )
}

export default App;
