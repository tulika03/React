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

            const itemIndex = state.items.findIndex(e => e.id == action.payload.id);
            if(itemIndex < 0)
                state.items.push(action.payload);
            else
                state.items[itemIndex].quantity = action.payload.quantity + 1;
        },
        removeItem: (state, action) => {
            console.log("check item to be deleted id: ", action.payload)
            // delete item[action.payload];
            if(action.payload.quantity == 1)
                state.items = state.items.filter(item => item.id != action.payload.id)
            else {
                const itemIndex = state.items.findIndex(e => e.id == action.payload.id);
                state.items[itemIndex].quantity = action.payload.quantity - 1;
            }
        },
        clearCart: (state) => {
            state.items.length = 0;
        }
    }
});

export const {addItem, removeItem, clearCart} = cartSlice.actions;

export default cartSlice.reducer;