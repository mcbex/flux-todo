var React = require('react'),
    ReactPropTypes = React.PropTypes,
    TodoActions = require('../actions/TodoActions'),
    Footer;

Footer = React.createClass({

    propTypes: {
        allTodos: ReactPropTypes.object.isRequired
    },

    render: function() {
        var allTodos = this.props.allTodos,
            total = Object.keys(allTodos).length,
            completed, itemsLeft, itemsLeftPhrase,
            clearCompletedButton;

        if (!total) {
            return null;
        }

        completed = 0;
        for (var key in allTodos) {
            if (allTodos[key].complete) {
                completed++;
            }
        }

        itemsLeft = total - completed;
        itemsLeftPhrase = itemsLeft === 1 ? ' item ' : ' items ';

        if (completed) {
            clearCompletedButton =
                <button
                    id="clear-completed"
                    onClick={ this._onClearCompletedClick }>
                    Clear completed ({ completed })
                </button>;
        }

        return (
            <footer id="footer">
                <span id="todo-count">
                    <strong>
                        { itemsLeft }
                    </strong>
                    { itemsLeftPhrase }
                </span>
                { clearCompletedButton }
            </footer>
        );
    },

    _onClearCompletedClick: function() {
        TodoActions.destroyCompleted();
    }

});

module.exports = Footer;
