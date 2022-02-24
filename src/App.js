import './App.css';
// import { Compo1 } from './Components/Compo1';
// import { DataProvider } from './Components/NoteContext';
// import Compo from './Components/Compo';
// import {UseReducer} from './Components/UseReducer'
import Main from './Components/Main';
import UserHOC from './Components/UserHOC';

function App() {
   return (
      <>
         <Main />
         <UserHOC />
      </>

      //   <DataProvider>
      //      <div className="App">
      //         <Compo/>
      //      <Compo1/>
      //      <UseReducer/>
      //      </div>
      //   </DataProvider>
   );
}

export default App;
