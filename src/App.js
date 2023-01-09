import ContactForm from './components/ContactForm/ContactForm';
import './App.css'
import './components/ContactForm/ContactForm.css';
import './components/InputField/InputField.css';
import './components/DatePicker/DatePicker.css';
import './components/SelectField/SelectedField.css';
import './components/RadioField/RadioField.css'

function App() {
  return (
    <div className="wrapper">
    <div className="text">
      <h1>Não encontrou o que procurava?</h1>
      <p>Preencha o formulário e retornaremos o contato.</p>
    </div>
      <ContactForm />
    </div>
  );
}

export default App;
