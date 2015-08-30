var appDispatcher = require('../dispatcher/AppDispatcher'),
    EventEmitter = require('events').EventEmitter,
    Constants = require('../constants/Constants'),
    assign = require('object-assign'),
    CHANGE_EVENT = 'change',
    _message = 'Hello World!', Store;

function update(text) {
    _message = text;
}

Store = assign({}, EventEmitter.prototype, {

    getMessage: function() {
        return _message;
    },

    emitChange: function() {
        this.emit(CHANGE_EVENT);
    },

    addChangeListener: function(callback) {
        this.on(CHANGE_EVENT, callback);
    },

    removeChangeListener: function(callback) {
        this.removeListener(CHANGE_EVENT, callback);
    },

    // really hating the constants thing
    dispatcherIndex: appDispatcher.register(function(payload) {
        var action = payload,
            text;

        // would be nice to have "beforeAll" "afterAll" to get
        // rid of the repetititve emitChange etc
        switch(action.actionType) {
            case Constants.UPDATE_TEXT:
                text = action.text.trim();
                if (text !== '') {
                    update(text);
                    Store.emitChange();
                }
                break;
            default:
        }

        // is this really necessary?
        return true;
    })

});

module.exports = Store;
