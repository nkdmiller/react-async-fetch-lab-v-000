import React, { Component } from 'react';

class App extends Component {
  state = {
    peopleInSpace: []
  }
 
  componentDidMount(){
    this.handleAddTimer()
  }

  render() {
    <div>
      {this.state.peopleInSpace.map(person => person.name)}
    </div>
  )
  }


export default App;

