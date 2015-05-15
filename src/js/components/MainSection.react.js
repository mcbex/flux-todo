var React = require('react'),
    ReactPropTypes = React.PropTypes,
    TodoActions = require('../actions/TodoActions'),
    TodoItem = require('./TodoItem.react'),
    MainSection;

MainSection = React.createClass({

    propTypes: {
        allTodos: ReactPropTypes.object.isRequired,
        areAllComplete: ReactPropTypes.bool.isRequired
    },

    render: function() {
        var allTodos, todos;

        if (Object.keys(this.props.allTodos).length < 1) {
            return null;
        }

        allTodos = this.props.allTodos;
        todos = [];

        for (var key in allTodos) {
            todos.push(<TodoItem key={ key } todo={ allTodos[key] } />);
        }

        return (
            <section id="main">
                <input
                    id="toggle-all"
                    type="checkbox"
                    onChange={ this._onToggleCompleteAll }
                    checked={ this.props.areAllComplete ? 'checked' : '' }
                />
                <label htmlFor="toggle-all">Mark all are complete</label>
                <ul id="todo-list">{ todos }</ul>
            </section>
        );
    },

    _onToggleCompleteAll: function() {
        TodoActions.toggleCompleteAll();
    }

});

module.exports = MainSection;
