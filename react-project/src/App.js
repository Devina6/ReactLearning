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
import StyleSheetsComponents from './components/stylesheets'
import InLineComponents from './components/inLine'
import './appStyles.css'
import AppModuleStyles from './appStyles.module.css'
import Form from './components/form'
import LifeCycleA from './components/lifeCycleA'
import ClassCounter from './components/classCounter'
import HookCounter from './components/hookCounter'
import HookCounterTwo from './components/HookCounterTwo';
import HookCounterThree from './components/HookCounterThree';
import HookCounterFour from './components/HookCounterFour';

function App() {
  return (
    <div className="App">
      <HookCounterFour />
      {/*<HookCounterThree />
      <HookCounterTwo />
      <ClassCounter />
      <HookCounter />
      <LifeCycleA />
      <Form />
      <StyleSheetsComponents primary={true}/>
      <InLineComponents />
      <h1 className='error'>Error</h1>
      <h1 className={AppModuleStyles.success}>Success</h1>
      <NameListComponent />
      <UserGreetingComponent />
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
