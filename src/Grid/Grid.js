import React from 'react';
import GridItem from './GridItem'
import styles from './Grid.module.css'
import mediaStyles from './Media.module.css'
import cx from 'classnames'


export default class App extends React.Component {
  updateClicked(id) {
    this.props.updateClicked(id);
  }

  renderFacts(){
    return this.props.facts.map(item => 
      <GridItem 
        key={item.id}
        fact={item}
        updateClicked={this.updateClicked.bind(this)} 
      />
    );
  }

  render() {
    return (
      <section className={cx(styles.grid, mediaStyles.grid)}>
        {this.renderFacts()}
      </section>
    );
  }
}
