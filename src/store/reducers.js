import { Actions } from "./actions";

const saveTodoList = todos => localStorage.setItem('TodoList', JSON.stringify(todos));

export const reducer = (state, action) => {
    switch (action.type) {
        case Actions.init:
            return { ...state, todos: action.payload };

        case Actions.add: {
            const length = state.todos.length;
            const id = length < 1 ? 1 : (state.todos[length - 1].id + 1);

            const todos = [
                ...state.todos,
                {
                    id,
                    open: true,
                    ...action.payload
                }
            ];

            saveTodoList(todos);

            return { ...state, todos };
        }

        case Actions.edit: {
            const todos = [...state.todos];
            const index = todos.map(x => x.id).indexOf(action.payload.id);

            todos[index] = {
                ...todos[index],
                ...action.payload,
            }

            saveTodoList(todos);

            return { ...state, todos };
        }

        case Actions.toggle: {
            const todos = [...state.todos];
            const index = todos.map(x => x.id).indexOf(action.payload);
            const item = todos[index];

            item.open = !item.open;

            saveTodoList(todos);

            return { ...state, todos };
        }

        case Actions.remove: {
            const todos = [...state.todos];
            const index = todos.map(x => x.id).indexOf(action.payload);

            todos.splice(index, 1);

            saveTodoList(todos);

            return { ...state, todos };
        }

        default:
            return state;
    }
};
