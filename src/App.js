import React from 'react';
import './App.css';
import Header from './Header';
import Home from './Home.js';
import Checkout from './Checkout.js';
import Payment from './Payment.js'
import Login from './Login.js'
import Order from './Order.js'
import { BrowserRouter as Router,Switch, Route,} from "react-router-dom";
import { useEffect } from 'react';
import { auth } from './firebase';
import { useStateValue } from './StateProvider';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js'

const promise = loadStripe ('pk_test_51LbkKDSFFJfmDnL1XpX1FbP3lpIsM4XNKG36xcuzanwDCsZ5VjIiQ2YhAyZ4npXwxPcBCvyaktSqHHoSQeZOTMxH00qP3RTCmA');

function App() {
  const [{basket}, dispatch] = useStateValue();
  
  useEffect(() => {
      //will only run once when the app component laods
      auth.onAuthStateChanged(authUser => {
        console.log('THE USER IS >>>', authUser);

        if(authUser) {
          //the user just logged in / the user was logged in
          dispatch({
            type:'SET_USER',
            user: authUser
          })
        } else {
          //the user is logged out
          dispatch({
            type: 'SET_USER',
            user: null
          })
        }
          
      })
  }, [])

  return (
    <Router>
    <div className="App">
      
       <Switch>
       <Route path='/Login'>
         <Login />
          </Route>
          <Route path='/payment'>
           <Header />
           <Elements stripe= {promise}>
            <Payment />
            </Elements>
             </Route>
             <Route path='/order'>
             <Header />
            <Order />
            </Route>
              <Route path='/checkout'>
             <Header />
            <Checkout />
          </Route>
          <Route path='/'>
          <Header />
         <Home />
        </Route>
       </Switch>
    </div>
  </Router>
  );
}

export default App;
