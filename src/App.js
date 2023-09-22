// App.js
import React from 'react';
import './App.css';
import Main from './components/Main';
import { Provider } from 'react-redux'; 
import store from './redux/Store';
function App() {
  return (
    <Provider store={store}> 
      <div className="App">
      
        <Main />
       
      </div>
    </Provider>
  );
}

export default App;
