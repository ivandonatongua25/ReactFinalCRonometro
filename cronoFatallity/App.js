import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Cronometro from './pages/Cronometro';
import Mapa from './pages/Mapa';
import nosotros from './pages/nosotros';
import menu from './pages/menu';
import Home from './pages/Home';

export default function App() {
  return (
    <View style={styles.container}>
       
      <Cronometro/>
          
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    
  
   
  },
  texto : {
    fontStyle :'italic',
    flexDirection : 'row',
    fontSize : 30,
    justifyContent :'flex-start',


  }
});
/* <Cronometro/>*/

// src/App.js
/*
import React from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import Home from './pages/Cronometro';
import About from './pages/Mapa';

const App = () => {
  return (
    <Router>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
        </ul>
      </nav>

      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/about" component={About} />
      </Switch>
    </Router>
  );
};

export default App;*/
