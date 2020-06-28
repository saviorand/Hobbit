import remove from 'lodash.remove';

// Action types

export const ADD_BASKET_ITEM = 'ADD_BASKET_ITEM';
export const DELETE_BASKET_ITEM = 'DELETE_BASKET_ITEM';
export const CLEAR_BASKET = 'CLEAR_BASKET';
export const GET_BASKET = 'GET_BASKET';

// Action creator

export function addItem(item) {
   return {
   	type: ADD_BASKET_ITEM,
   	item
   }
};

export function deleteItem(item) {
	return {
		type: DELETE_BASKET_ITEM,
		item
	}
};

export function clearBasket(){
	return {
		type: CLEAR_BASKET,
	}
};

export function getBasket(){
	return {
		type: GET_BASKET,
	}
}

// Reducer

const initialState:Array<Object> = [];

function itemsReducer(state = initialState, action) {
	switch (action.type) {
		case "ADD_BASKET_ITEM":
			return [
			...state,
			{
				item: action.item,

			}
			];
			break;

		case "DELETE_BASKET_ITEM":
            return [
            ...state.slice(0, state.findIndex(item => {return item.item === action.item})), 
            ...state.slice(state.findIndex(item => {return item.item === action.item}) + 1, state.length)
            ];
		     break;

		case "CLEAR_BASKET":
		    return [];
		    break;

		case "GET_BASKET":
		    return [
		    ...state,
		    ];
		    break;
		
		default:
			return state;
			break;
	}
}

export default itemsReducer