import './App.scss';
import Header from './components/Header';
import Gals from './components/Gals';
import Photo from './components/Photo';
import Slider from './components/Slider';

import { Switch, Route } from 'react-router-dom';


function App() {

  return (
    <div className="App">
      
      <Header />
      <Switch>
        <Route path="/" render={() => <Gals />} exact/>
        <Route path="/show/:imgname" render={() => <Photo />} exact/>
        <Route path="/slider/" render={() => <Slider />} exact/>
      </Switch>
    </div>
  );
}

export default App;
