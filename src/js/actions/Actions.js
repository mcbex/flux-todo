var appDispatcher = require('../dispatcher/AppDispatcher'),
    Constants = require('../constants/Constants'),
    Actions;

// the stuff with constants and actions feels really repetitive
// AppDispatcher.dispatch blah blah also very repetitive
// there must be a better way
Actions = {

    updateText: function(text) {
        appDispatcher.dispatch({
            actionType: Constants.UPDATE_TEXT,
            text: text
        });
    }

};

module.exports = Actions;
