// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;

import React from 'react';
import Backbone from 'backbone';
import _ from 'underscore';

const TodoModel = Backbone.Model.extend();
const TodoCollection = Backbone.Collection.extend({
  model: TodoModel
});

class TodoList extends React.Component {
  constructor() {
    super();
    this.state = { todos: new TodoCollection() };
  }

  componentDidMount() {
    this.state.todos.add([
      { text: 'Buy groceries' },
      { text: 'Walk the dog' },
      { text: 'Read a book' }
    ]);
    this.setState({ todos: this.state.todos });
  }

  render() {
    return (
      <ul>
        {this.state.todos.map((todo, index) => (
          <li key={index}>{todo.get('text')}</li>
        ))}
      </ul>
    );
  }
}

export default TodoList;
