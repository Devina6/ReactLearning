import logo from './logo.svg';
import './App.css';
import Greet from './components/greet'
import Welcome from './components/welcome'
import Hello from './components/hello'
import Message from './components/message'
import Counter from './components/counter'
import FunctionClick from './components/functionClick'
import ClassClick from './components/classClick'
import EventBind from './components/eventBind'
import ParentComponent from './components/parentComponent'
import UserGreetingComponent from './components/userGreeting'
import NameListComponent from './components/nameList'

function App() {
  return (
    <div className="App">
      <NameListComponent />
      {/*<UserGreetingComponent />
      < ParentComponent />
      <EventBind />
      <FunctionClick />
      <ClassClick />
      <Counter />
      <Message />
      <Greet name='Devina' heroName="batman">
        <p>this is children props</p>
      </Greet>
      <Greet name='abc' heroName="spiderman">
        <button>Action</button>
      </Greet>
      <Greet name='xyz' heroName="superman"/>
      <Welcome name='Devina' heroName="batman"></Welcome>
      {/*<Welcome name='abc' heroName="spiderman"></Welcome>
      <Hello /> */}
    </div>
  );
}

export default App;
