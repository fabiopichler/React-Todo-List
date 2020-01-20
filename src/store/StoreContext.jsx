import React from "react";

import { reducer } from "./reducers";
import { useActions } from "./actions";

const StoreContext = React.createContext();

const StoreProvider = ({ children }) => {

    const [state, dispatch] = React.useReducer(reducer, { todos: [] });
    const actions = useActions(dispatch);

    return (
        <StoreContext.Provider value={{ state, actions }}>
            {children}
        </StoreContext.Provider>
    );
};

export default StoreProvider;

export const useStore = () => React.useContext(StoreContext);
