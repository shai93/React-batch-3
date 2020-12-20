import './App.css';
// import Hello from './Hello';
// import MyClass from './MyClass';
import Table from './Table/Table';
import Index from './Hooks/index';
import CondIndex from './Conditional Rendering/index';
import AdvancedForm from './Advanced Form/form';
import Counter from './Higher order components/Counter';
import MouseHover from './Higher order components/MouseHover';
function App() {
  return (
    <div className="App">
      {/* <Hello></Hello> */}
      {/* <MyClass></MyClass> */}
      {/* <Table></Table> */}
      {/* <Index></Index> */}
      {/* <CondIndex></CondIndex> */}
      {/* <AdvancedForm></AdvancedForm> */}
      <div><Counter name="shailesh"></Counter></div>
      <div><MouseHover></MouseHover></div>
    </div>
  );
}

export default App;

