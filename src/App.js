import styles from './App.module.css';
import Title from './Title/Title';
import Smoke from './Rocket/Smoke';
import Rocket from './Rocket/Rocket';
import Grid from './Grid/Grid';
import Background from './Background/Background';

// Data
import facts from './data/NASA_facts.json';
import { Component } from 'react';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {facts};
  }

  updateClicked(id){
    let stateCopy = Object.assign({}, this.state);
    stateCopy.facts[id].clicked = true;
    this.setState(stateCopy);
  }

  render(){
    return (
      <div className={styles.App}>
        <Title />
        <Background />
        <Grid facts={this.state.facts} updateClicked={this.updateClicked.bind(this)}/>
        <Rocket />
        <Smoke />
      </div>
    );
  }
}


export default App;
