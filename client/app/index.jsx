import React from 'react';
import {render} from 'react-dom';
import $ from 'jquery';

class TodoItems extends React.Component {
  render() {
    var taskNodes = this.props.tasks.map( task => {
      return (
        <li>{task.taskText}</li>
      );
    });

    return (
      <ol>
        {taskNodes}
      </ol>
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
        <TodoItems tasks={this.props.tasks}/>
      </div>
    );
  }
}

class App extends React.Component {
  constructor(props) {
    super();

    this.state = {
      tasks: [{
        taskText: '...Loading...'
      }]
    };
  }

  componentDidMount() {
    setTimeout(() => {
      $.getJSON('/api/tasks', data => {
        this.setState({tasks: data.tasks});
      })
    }, 500);
  }

	render () {
		return (
      <div className="AppContainer">
        <h1>Toodoo</h1>
        <TodoList tasks={this.state.tasks}/>
      </div>
    );
	}
}

render(<App/>, document.getElementById('app'));
