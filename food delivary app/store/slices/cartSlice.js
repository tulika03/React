import {createSlice} from "@reduxjs/toolkit";

const cartSlice= createSlice({
    name: 'cart',
    initialState: {
        items: []
    },
    reducers: {
        // gets access to state mention in initial state and action
        // mutating the state (directly modifying the state)
        // we can consider reducer as an api to communicate with redux store
        addItem: (state, action) => {
            state.items.push(action.payload);
        },
        removeItem: (state, action) => {
            delete item[action.payload];
        },
        clearCart: (state) => {
            state.items.length = 0;
        }
    }
});

export const {addItem, removeItem, clearCart} = cartSlice.actions;

export default cartSlice.reducer;