var appDispatcher = require('../dispatcher/AppDispatcher'),
    EventEmitter = require('events').EventEmitter,
    TodoConstants = require('../constants/TodoConstants'),
    assign = require('object-assign'),
    CHANGE_EVENT = 'change',
    _todos = {}, TodoStore;

function create(text) {
    var id = Date.now();

    _todos[id] = {
        id: id,
        complete: false,
        text: text
    };
}

function update(id, updates) {
    _todos[id] = assign({}, _todos[id], updates);
}

function updateAll(updates) {
    for (var id in _todos) {
        update(id, updates);
    }
}

function destroy(id) {
    delete _todos[id];
}

function destroyCompleted() {
    for (var id in _todos) {
        if (_todos[id].complete) {
            destroy(id);
        }
    }
}

TodoStore = assign({}, EventEmitter.prototype, {

    areAllComplete: function() {
        for (var id in _todos) {
            if (!_todos[id].complete) {
                return false;
            }
        }

        return true;
    },

    getAll: function() {
        return _todos;
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
            case TodoConstants.TODO_CREATE:
                text = action.text.trim();
                if (text !== '') {
                    create(text);
                    TodoStore.emitChange();
                }
                break;

            case TodoConstants.TODO_TOGGLE_COMPLETE_ALL:
                if (TodoStore.areAllComplete()) {
                    updateAll({ complete: false });
                } else {
                    updateAll({ complete: true });
                }
                TodoStore.emitChange();
                break;

            case TodoConstants.TODO_COMPLETE:
                update(action.id, { complete: true });
                TodoStore.emitChange();
                break;

            case TodoConstants.TODO_UPDATE_TEXT:
                text = action.text.trim();
                if (text !== '') {
                    update(action.id, { text: text });
                    TodoStore.emitChange();
                }
                break;

            case TodoConstants.TODO_DESTROY:
                destroy(action.id);
                TodoStore.emitChange();
                break;

            case TodoConstants.TODO_DESTROY_COMPLETED:
                destroyCompleted();
                TodoStore.emitChange();
                break;

            default:
        }

        // is this really necessary?
        return true;
    })

});

module.exports = TodoStore;
