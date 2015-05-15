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

// kinda annoying that the same dispatcher instance needs to be shared
// wonder if there's a way to make something "static"
// eh kinda but not really 
// http://stackoverflow.com/questions/22528967/es6-class-variable-alternatives
// TODO think about smarter ways to do this
var appDispatcher = new AppDispatcher;

module.exports = appDispatcher;
