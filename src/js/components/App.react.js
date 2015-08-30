var Footer = require('./Footer.react'),
    Header = require('./Header.react'),
    MainSection = require('./MainSection.react'),
    React = require('react'),
    Store = require('../stores/Store'),
    App;

function getState() {
    return {
        message: Store.getMessage(),
    };
}

App = React.createClass({

    getInitialState: function() {
        return getState();
    },

    componentDidMount: function() {
        Store.addChangeListener(this._onChange);
    },

    componentWillUnmount: function() {
        Store.removeChangeListener(this._onChange);
    },

    render: function() {
        return (
            <div>
                <Header />
                <MainSection
                    message={ this.state.message }
                />
                <Footer />
            </div>
        );
    },

    _onChange: function() {
        this.setState(getState());
    }

});

module.exports = App;
