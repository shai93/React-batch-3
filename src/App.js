import './App.css';
// import Hello from './Hello';
// import MyClass from './MyClass';
import Table from './Table/Table';
import Index from './Routing/Index';
import CondIndex from './Conditional Rendering/index';
import AdvancedForm from './Advanced Form/form';
import Counter from './Higher order components/Counter';
import MouseHover from './Higher order components/MouseHover';
import {UserProvider} from './Context Component/UserContext';
import C from './Context Component/C';
import Hero from './Error Boundary/Hero';
import ErrorBoundary from './Error Boundary/ErrorBoundary';
import DemoRef from './DemoRef/DemoRef';
import ClassCounter from './Common/ClassCounter';
import UseRefExample from './React Hooks/UseRefExample';

function App() {
  return (
    <div className="App">
      {/* <Hello></Hello> */}
      {/* <MyClass></MyClass> */}
      {/* <Table></Table> */}
      {/* <Index></Index> */}
      {/* <CondIndex></CondIndex> */}
      {/* <AdvancedForm></AdvancedForm> */}
      {/* <div><Counter name="shailesh"></Counter></div> */}
      {/* <div><MouseHover></MouseHover></div> */}
      {/* <UserProvider value="Amogh">
        <C></C>
      </UserProvider> */}
      {/* <ErrorBoundary>
        <Hero name="superman"></Hero>
      </ErrorBoundary>
      
      <ErrorBoundary>
        <Hero name="batman"></Hero>
      </ErrorBoundary>

      <ErrorBoundary>
        <Hero name="joker"></Hero>
      </ErrorBoundary> */}
      {/* <Home></Home> */}
      {/* <Index></Index> */}
      {/* <DemoRef></DemoRef> */}
      <UseRefExample></UseRefExample>
    </div>
  );
}

export default App;

