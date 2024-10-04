import { ADD_TO_CART, GET_PRODUCT_DATA, REMOVE_FROM_CART } from "./constant";

const initialState = [];

export const reducer = (state = initialState, action) => {
    switch (action?.type) {
        case GET_PRODUCT_DATA:
            return [
                ...state,
                action?.data
            ];

        case ADD_TO_CART:
            return [
                ...state,
                action?.data
            ];

        case REMOVE_FROM_CART:
            let updatedCart = state.filter(item => item.id !== action.data);
            return [
                ...updatedCart
            ];

        default:
            return state;
    }
};
