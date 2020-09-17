import React, { Component } from 'react';
import AddNinjas from './AddNinja';
import Ninjas from './Ninjas';





class App extends Component {
  state = {
    ninjas: [
      { name: 'Pratik', age: '30', belt: 'black', id: '1' },
      { name: 'Prabesh', age: '20', belt: 'green', id: '2' },
      { name: 'Peshal', age: '25', belt: 'pink', id: '3' }
    ]
  }

  addNinja = (ninja) => {
    ninja.id = Math.random();
    let ninjas = [...this.state.ninjas, ninja];


    this.setState({
      ninjas: ninjas
    })
  }

  deleteNinja = (id) => {
    let ninjas = this.state.ninjas.filter(ninja =>
      ninja.id !== id);
    console.log(ninjas)
    this.setState({
      ninjas: ninjas
    })
  }

  render() {
    return (<div className="App">
      <h1>first react app</h1>
      <p>Welcome :)</p>
      <Ninjas deleteNinja={this.deleteNinja} ninjas={this.state.ninjas} />
      <AddNinjas addNinja={this.addNinja} />
    </div>);
  }
}

export default App;

