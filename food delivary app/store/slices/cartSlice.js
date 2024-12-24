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
            if(itemIndex < 0) {
                action.payload.quantity = 1;
                action.payload.totalPrice = action.payload.price / 100;
                state.items.push(action.payload);
            }
            else {
                state.items[itemIndex].quantity = state.items[itemIndex].quantity + 1;
                state.items[itemIndex].totalPrice = state.items[itemIndex].quantity * (state.items[itemIndex].price / 100)
            }
                
        },
        removeItem: (state, action) => {
            console.log("check item to be deleted id: ", action.payload)
            // delete item[action.payload];
            if(action.payload.quantity == 1)
                state.items = state.items.filter(item => item.id != action.payload.id)
            else {
                const itemIndex = state.items.findIndex(e => e.id == action.payload.id);
                state.items[itemIndex].quantity = state.items[itemIndex].quantity - 1;
                state.items[itemIndex].totalPrice = state.items[itemIndex].quantity * (state.items[itemIndex].price / 100)
            }
        },
        clearCart: (state) => {
            state.items.length = 0;
        }
    }
});

export const {addItem, removeItem, clearCart} = cartSlice.actions;

export default cartSlice.reducer;