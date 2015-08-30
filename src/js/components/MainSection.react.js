var React = require('react'),
    ReactPropTypes = React.PropTypes,
    TodoActions = require('../actions/TodoActions'),
    Input = require('./Input.react'),
    MainSection;

MainSection = React.createClass({

    propTypes: {
        message: ReactPropTypes.string.isRequired
    },

    render: function() {
        return (
            <section id="container">
                <Input
                    onSave={ this._onSave }
                />
                <p id="message">{ this.props.message }</p>
            </section>
        );
    },

    _onSave: function(text) {
        TodoActions.updateText(text);
    }

});

module.exports = MainSection;
