import './App.css';
import PersonalCard from './components/PersonalCard';
import suma from './components/Sumanumero';


function App() {
  // let contador = 1;
  return (    
    <div className="App">

      
      <PersonalCard lastName = {"Valladares"} firstName = { "Pedro"} age = {suma(27)} hColor = "Black"/>
      
      <PersonalCard lastName = {"Doe"} firstName = { "Jane"} age = {suma(44)} hColor = "Black"/>
      
      <PersonalCard lastName = {"Smith"} firstName = { "John "} age = {suma(87)} hColor = "Brown"/>
      
     
     </div>
    
  );
}

export default App;
