import React from 'react';
import { Redirect, Route } from 'react-router-dom';
import { IonApp, IonRouterOutlet } from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import Home from './pages/Home/Home';
import Login from "./pages/Login/Login"
import Register from "./pages/Register/Register"
import Profile from "./pages/Profile/Profile"
import Goals from "./pages/Goals/Goals"
import Goal from "./pages/Goal/Goal"
import NewGoal from "./pages/NewGoal/NewGoal"
import NewGoal2 from "./pages/NewGoal2/NewGoal2"

/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';

/* Theme variables */
import './theme/variables.css';

const App: React.FC = () => (
  <IonApp>
    <IonReactRouter>
      <IonRouterOutlet>
        <Route path="/" component={Login} exact={true} />
        <Route exact path="/home" component={Home}/>
        <Route exact path="/register" component={Register}/>
        <Route exact path="/profile" component={Profile}/>
        <Route exact path="/goals" component={Goals}/>
        <Route exact path="/goal" component={Goal}/>
        <Route exact path="/newgoal" component={NewGoal}/>
        <Route exact path="/newgoal2" component={NewGoal2}/>
      </IonRouterOutlet>
    </IonReactRouter>
  </IonApp>
);

export default App;
