import React from 'react';
import {render} from 'react-dom';
import $ from 'jquery';

class TodoItems extends React.Component {
  emptyItemMessage() {
    if (this.props.tasks.length === 0 && this.props.isLoaded) {
      return (
        <span className="TodoList-Items-EmptyMessage">
          No tasks!
        </span>
      );
    } else {
      return null;
    }
  }

  taskNodes() {
    var result = this.props.tasks.map( (task, i) => {
      return (
        <li key={i} >{task.taskText}</li>
      );
    });

    return result;
  }

  render() {
    return (
      <div className="TodoList-Items">
        {this.emptyItemMessage()}
        <ol>
          {this.taskNodes()}
        </ol>
      </div>
    );
  }
}

class TodoForm extends React.Component {
  render() {
    return (
      <form onSubmit>
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
        <TodoItems
          isLoaded={this.props.isLoaded}
          tasks={this.props.tasks}
        />
      </div>
    );
  }
}

class LoadingIndicator extends React.Component {
  render () {
    if (this.props.isLoaded) {
      return null;
    } else {
      return (
        <span>Loading&hellip;</span>
      );
    }
  }
}

class App extends React.Component {
  constructor(props) {
    super();

    this.state = {
      tasks: [],
      isLoaded: false
    };
  }

  componentDidMount() {
    $.getJSON('/api/tasks', data => {
      this.setState({
        tasks: data.tasks,
        isLoaded: true
      });
    })
  }

	render () {
		return (
      <div className="AppContainer">
        <h1>Toodoo</h1>
        <LoadingIndicator isLoaded={this.state.isLoaded} />
        <TodoList
          isLoaded={this.state.isLoaded}
          tasks={this.state.tasks}
        />
      </div>
    );
	}
}

render(<App/>, document.getElementById('app'));
