var Dispatcher = require('./Dispatcher');

class AppDispatcher extends Dispatcher {

    constructor() {
        super();
    }

    handleViewAction(action) {
        this.dispatch({
            source: 'VIEW_ACTION',
            action: action
        });
    }

};

// TODO think about smarter ways to do this
var appDispatcher = new AppDispatcher;

module.exports = appDispatcher;
