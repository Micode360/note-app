import React from 'react';
import { BrowserRouter, Switch, Route} from 'react-router-dom'
import SectionContainer from './component/section'
import BlogInputContainer from './component/inputPage'



function App() {
  return (
    <div className="App">
      <BrowserRouter>
            <Switch>
              <Route exact path='/' component={SectionContainer}/>
              <Route exact path='/addblog' component={BlogInputContainer}/>
            </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
