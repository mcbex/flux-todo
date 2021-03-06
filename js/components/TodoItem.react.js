var React = require('react'),
    ReactPropTypes = React.PropTypes,
    TodoActions = require('../actions/TodoActions'),
    TodoTextInput = require('./TodoTextInput.react'),
    cx = require('react/lib/cx'),
    TodoItem;

TodoItem = React.createClass({

    propTypes: {
        todo: ReactPropTypes.object.isRequired
    },

    getInitialState: function() {
        return {
            isEditing: false
        }
    },

    render: function() {
        var todo = this.props.todo,
            input;

        if (this.state.isEditing) {
            input =
                <TodoTextInput
                    className="edit"
                    onSave={ this._onSave }
                    value={ todo.text }
                />;
        }

        return (
            <li
                className={ cx({
                    'completed': todo.complete,
                    'editing': this.state.isEditing
                }) }
                key={ todo.id }>
                <div className="view">
                    <input
                        className="toggle"
                        type="checkbox"
                        checked={ todo.complete }
                        onChange={ this._onToggleComplete }
                    />
                    <label onDoubleClick={ this._onDoubleClick }>
                        { todo.text }
                    </label>
                    <button className="destroy" onClick={ this._onDestroyClick } />
                </div>
                { input }
            </li>
        )
    },

    _onToggleComplete: function() {
        TodoActions.toggleComplete(this.props.todo);
    },

    _onDoubleClick: function() {
        this.setState({ isEditing: true });
    },

    _onSave: function(text) {
        TodoActions.updateText(this.props.todo.id, text);
        this.setState({ isEditing: false });
    },

    _onDestroyClick: function() {
        TodoActions.destroy(this.props.todo.id);
    }

})

module.exports = TodoItem;
