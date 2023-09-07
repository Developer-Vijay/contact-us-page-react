import './App.css';
import ContactForm from './components/ContactForm/ContactForm';
import ContactHeader from './components/ContactHeader/ContactHeader';
import NavBarComponent from './components/Navigation/NavBarComponent';

function App() {
  return (
    <div>
    <NavBarComponent/>
    
    <main className="main_container">
    <ContactHeader/>
    <ContactForm/>
    </main>
    </div>
  );
}

export default App;
