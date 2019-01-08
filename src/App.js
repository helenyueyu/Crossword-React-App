import React, { Component } from 'react';
import Child from './Child'

class App extends Component {
  render() {
    return (
      <div>
        <Child title='Pride and Prejudice' author='Jane Austen' onClick={this.doSomething}/>
        <Child title='A Tale of Two Cities' author='Charles Dickens' onClick={this.doSomething}/>
      </div>
    )
  }
}

export default App;
