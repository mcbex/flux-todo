var Footer = require('./Footer.react'),
    Header = require('./Header.react'),
    MainSection = require('./MainSection.react'),
    React = require('react'),
    TodoStore = require('../stores/TodoStore'),
    TodoApp;

function getTodoState() {
    return {
        allTodos: TodoStore.getAll(),
        areAllComplete: TodoStore.areAllComplete()
    };
}

TodoApp = React.createClass({

    getInitialState: function() {
        return getTodoState();
    },

    componentDidMount: function() {
        TodoStore.addChangeListener(this._onChange);
    },

    componentWillUnmount: function() {
        TodoStore.removeChangeListener(this._onChange);
    },

    render: function() {
        return (
            <div>
                <Header />
                <MainSection
                    allTodos={ this.state.allTodos }
                    areAllComplete={ this.state.areAllComplete }
                />
                <Footer allTodos={ this.state.allTodos } />
            </div>
        );
    },

    _onChange: function() {
        this.setState(getTodoState());
    }

});

module.exports = TodoApp;
