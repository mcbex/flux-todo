var Dispatcher = require('./Dispatcher'),
    assign = require('object-assign'),
    AppDispatcher;

AppDispatcher = assign({}, Dispatcher.prototype, {

    handleViewAction: function(action) {
        this.dispatch({
            source: 'VIEW_ACTION',
            action: action
        });
    }

});

module.exports = AppDispatcher;
