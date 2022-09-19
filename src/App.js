import logo from './logo.svg';
import './App.css';
import PeopleBlock from './components/blocks/PeopleBlock';
import { PeoplesDataProvider,usePeoples } from './components/blocks/PeopleBlock/Providers';

function App() {

  const peoplesState = usePeoples();


  return (
    <div className="App">
       <PeoplesDataProvider state={peoplesState}>
        < PeopleBlock />
      </PeoplesDataProvider>
    </div>
  );
}

export default App;
