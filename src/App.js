import React, { Component } from 'react';
import { connect } from 'react-redux';
import todosActions from './reducers/todos/actions';

class App extends Component {
  render() {
    console.log(this.props);

    return (
      <div>
        <h1>Redux-Abstract demonstration with ReactDom: TodoList</h1>
        <div>
          {
            !this.props.todos.items.length
            ? <p>No items to show.</p>
            : this.props.todos.items.map((todo, i) =>
              !todo.done
              ? !todo.edit.on
                ? <div key={i} style={{ border: '1px solid #000000', marginBottom: '5px' }}>
                    <p>{todo.description}</p>
                    <input
                      type="submit"
                      value="Mark as done"
                      onClick={() => this.props.markAsDone({ targetIndex: i })}
                    />
                    <input
                      type="submit"
                      value="Delete"
                      onClick={() => this.props.removeItem({ targetIndex: i })}
                    />
                    <input
                      type="submit"
                      value="Edit"
                      onClick={() => this.props.editToggle({ targetIndex: i })}
                    />
                  </div>
                : <div key={i} style={{ border: '1px solid #000000', marginBottom: '5px' }}>
                    <textarea
                      value={todo.edit.description}
                      onChange={changeEvent => this.props.changeEditDescription({
                        targetIndex: i,
                        value: changeEvent.target.value
                      })}
                    />
                    <br/>
                    <input
                      type="submit"
                      value="Save"
                      onClick={() => this.props.saveItem({ targetIndex: i })}
                    />
                    <input
                      type="submit"
                      value="Cancel"
                      onClick={() => this.props.cancelEdit({ targetIndex: i })}
                    />
                  </div>
              : <div key={i} style={{ border: '1px solid #000000', marginBottom: '5px' }}>
                  <p style={{ textDecoration: 'line-through', color: 'gray' }}>{todo.description}</p>
                  <input
                    type="submit"
                    value="Mark as NOT done"
                    onClick={() => this.props.markAsNotDone({ targetIndex: i })}
                  />
                  <input
                    type="submit"
                    value="Delete"
                    onClick={() => this.props.removeItem({ targetIndex: i })}
                  />
                </div>
            )
          }
        </div>
        <hr/>
        <textarea
          value={this.props.todos.newItem.description}
          onChange={changeEvent =>
            this.props.changeNewItemDescription({
              value: changeEvent.target.value
            })
          }
        />
        <br/>
        <input
          type="submit"
          value="Create"
          onClick={() => this.props.todos.newItem.description.length && this.props.addItem({
            item: {
              description: this.props.todos.newItem.description,
              done: false,
              edit: {
                description: this.props.todos.newItem.description,
                on: false
              }
            }
          })}
        />
        <input
          type="submit"
          value="Clear list"
          onClick={() => this.props.clearItems()}
        />
      </div>
    );
  }
}

export default connect(store => ({
  todos: store.todos
}), {
  ...todosActions
})(App);