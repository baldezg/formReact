import ContactForm from './components/ContactForm/ContactForm';
import './App.css'
import './components/ContactForm/ContactForm.css';
import './components/InputField/InputField.css';
import './components/DatePicker/DatePicker.css';
import './components/SelectField/SelectedField.css';
import './components/RadioField/RadioField.css';
import { Main } from './components/Main/Main';
import { Banner } from './components/Banner/Banner'
import './components/Main/Main.css';
import './components/Banner/Banner.css'

function App() {
  return (
    <Main>
      <Banner />
      <ContactForm />
    </Main>
    
  );
}

export default App;
