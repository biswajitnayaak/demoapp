// import logo from './logo.svg';
import './App.css';
// import PeopleBlock from './components/blocks/PeopleBlock';
// import { PeoplesDataProvider,usePeoples } from './components/blocks/PeopleBlock/Providers';
import {AppRoutes} from './routing/AppRoutes';
import { BrowserRouter as Router } from 'react-router-dom';

function App() {

  // const peoplesState = usePeoples();


  return (
    <div className="App">

      <Router>
        <AppRoutes />
      </Router>
       {/* <PeoplesDataProvider state={peoplesState}>
        < PeopleBlock />
      </PeoplesDataProvider> */}
    </div>
  );
}

export default App;
