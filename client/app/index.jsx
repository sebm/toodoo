import React from 'react';
import {render} from 'react-dom';

class TodoItems extends React.Component {
  render() {
    return (
      <ul>
        <li>Fake entry</li>
      </ul>
    );
  }
}

class TodoForm extends React.Component {
  render() {
    return (
      <form>
        <input />
        <button />
      </form>
    )
  }
}

class TodoList extends React.Component {
  render() {
    return (
      <div className="TodoList">
        <TodoForm />
        <TodoItems />
      </div>
    );
  }
}

class App extends React.Component {
	render () {
		return (
      <div className="AppContainer">
        <h1>Toodoo</h1>
        <TodoList />
      </div>
    );
	}
}

render(<App/>, document.getElementById('app'));
