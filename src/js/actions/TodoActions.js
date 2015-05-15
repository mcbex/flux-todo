var appDispatcher = require('../dispatcher/AppDispatcher'),
    TodoConstants = require('../constants/TodoConstants'),
    TodoActions;

// the stuff with constants and actions feels really repetitive
// AppDispatcher.dispatch blah blah also very repetitive
// there must be a better way
TodoActions = {

    create: function(text) {
        appDispatcher.dispatch({
            actionType: TodoConstants.TODO_CREATE,
            text: text
        });
    },

    updateText: function(id, text) {
        appDispatcher.dispatch({
            actionType: TodoConstants.TODO_UPDATE_TEXT,
            id: id,
            text: text
        });
    },

    toggleComplete: function(todo) {
        var id = todo.id,
            actionType = todo.complete ?
                TodoConstants.TODO_UNDO_COMPLETE :
                TodoConstants.TODO_COMPLETE;

        appDispatcher.dispatch({
            actionType: actionType,
            id: id
        });
    },

    toggleCompleteAll: function() {
        appDispatcher.dispatch({
            actionType: TodoConstants.TODO_TOGGLE_COMPLETE_ALL
        });
    },

    destroy: function(id) {
        appDispatcher.dispatch({
            actionType: TodoConstants.TODO_DESTROY,
            id: id
        });
    },

    destroyCompleted: function() {
        appDispatcher.dispatch({
            actionType: TodoConstants.TODO_DESTROY_COMPLETED
        });
    }

};

module.exports = TodoActions;
