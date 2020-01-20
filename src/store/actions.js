import React from "react";

export const Actions = Object.freeze({
    add: 0,
    init: 1,
    edit: 2,
    toggle: 3,
    remove: 4,
});

export const useActions = dispatch => Object.freeze({

    init: React.useCallback(() => {
        const todoList = localStorage.getItem('TodoList');

        if (todoList)
            dispatch({ type: Actions.init, payload: JSON.parse(todoList) });

    }, [dispatch]),

    add: React.useCallback((title, description) => {
        dispatch({
            type: Actions.add,
            payload: {
                title,
                description,
            }
        });
    }, [dispatch]),

    edit: React.useCallback((id, title, description) => {
        dispatch({
            type: Actions.edit,
            payload: {
                id,
                title,
                description,
            }
        });
    }, [dispatch]),

    toggle: React.useCallback(id => {
        dispatch({ type: Actions.toggle, payload: id });
    }, [dispatch]),

    remove: React.useCallback(id => {
        dispatch({ type: Actions.remove, payload: id });
    }, [dispatch]),
});
