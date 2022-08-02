import React from "react";


var LayoutStateContext = React.createContext();
var LayoutDispatchContext = React.createContext();

function LayoutReducer(state, action) {
    switch (action.type) {
        case "TOGGLE_DRAWER_HASHTAG":
            return {...state, drawerOpen: !state.drawerOpen};
            case "TOGGLE_DRAWER_USER":
            return {...state, drawerOpenUser: !state.drawerOpenUser};
        default: {
            throw new Error(`Unhandled action type: ${action.type}`);
        }
    }
}

function LayoutProvider({children}) {
    var [state, dispatch] = React.useReducer(LayoutReducer, {
        drawerOpen: false,
        drawerOpenUser: false,
    });
    return (
        <LayoutStateContext.Provider value={state}>
            <LayoutDispatchContext.Provider value={dispatch}>
                {children}
            </LayoutDispatchContext.Provider>
        </LayoutStateContext.Provider>
    );
}

function useLayoutState() {
    var context = React.useContext(LayoutStateContext);
    if (context === undefined) {
        throw new Error("useLayoutState must be used within a LayoutProvider");
    }
    return context;
}

function useLayoutDispatch() {
    var context = React.useContext(LayoutDispatchContext);
    if (context === undefined) {
        throw new Error("useLayoutDispatch must be used within a LayoutProvider");
    }
    return context;
}

export {LayoutProvider, useLayoutState, useLayoutDispatch,setDrawerOpen,setDrawerOpenUser};

// ###########################################################
function setDrawerOpen(dispatch) {
    dispatch({
        type: "TOGGLE_DRAWER_HASHTAG",
    });
}
function setDrawerOpenUser(dispatch) {
    dispatch({
        type: "TOGGLE_DRAWER_USER",
    });
}




