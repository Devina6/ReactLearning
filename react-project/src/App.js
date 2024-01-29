import logo from './logo.svg';
import './App.css';
import Greet from './components/greet'
import Welcome from './components/welcome'
import Hello from './components/hello'

function App() {
  return (
    <div className="App">
      <Greet name='Devina' heroName="batman">
        <p>this is children props</p>
      </Greet>
      <Greet name='abc' heroName="spiderman">
        <button>Action</button>
      </Greet>
      <Greet name='xyz' heroName="superman"/>
      <Welcome name='Devina' heroName="batman"></Welcome>
      <Welcome name='abc' heroName="spiderman"></Welcome>
      {/*<Hello /> */}
    </div>
  );
}

export default App;
