import { createContext, useReducer } from "react";

export const Types = {
    SEARCH: "SEARCH",
    VALUE: "VALUE",
    ITEM: "ITEM",
    REVIEW: "REVIEW",
}

export const StoreContext = createContext();

const actionReducer = (state, action) =>{
    switch (action.type) {
        case Types.SEARCH:
            return {
                ...state,
                searchResults: action.payload
            }
        case Types.VALUE:
            return {
                ...state,
                inputValue: action.payload
            }
        case Types.ITEM:
            console.log(action.payload)
            return {
                ...state,
                itemSelected: action.payload ? state.searchResults.find(item => item.id === action.payload) : undefined,
            }
        case Types.REVIEW:
            const { id, liked, comment } = action.payload;
            return {
                ...state,
                review: [...state.liked, { id: id, liked: liked, comment: comment }]
            }
        default:
            return state
    }
}

export const StoreProvider = ({ children })=>{
    const initialState = {
        inputValue: undefined,
        staticData: [],
        itemSelected: undefined,
        review: [{ id: 0, liked: false, comment: undefined}]
    }
    
    const [ state, dispatch ] = useReducer(actionReducer, initialState);

    const store = {
        state,
        dispatch
    }

    return (
        <StoreContext.Provider value = { store }>
            {children}
        </StoreContext.Provider>
    )
}