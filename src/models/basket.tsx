import remove from 'lodash.remove';

// Action types

export const ADD_BASKET_ITEM = 'ADD_BASKET_ITEM';
export const DELETE_BASKET_ITEM = 'DELETE_BASKET_ITEM';

// Action creator

export function addItem(item, currentCount) {
   return {
   	type: ADD_BASKET_ITEM,
   	count: currentCount++,
   	item
   }
};

export function deleteItem(item, currentCount) {
	return {
		type: DELETE_BASKET_ITEM,
		count: currentCount--,
		item
	}
};

// Reducer

const initialState:Array<Object> = [];

function itemsReducer(state = initialState, action) {
	switch (action.type) {
		case ADD_BASKET_ITEM:
			return [
			{
				count: action.count,
				item: action.item
			}
		];

		case DELETE_BASKET_ITEM:
		return [
			{
				count: action.count,
				item: action.item
			}
		];
		
		default:
			return state;
	}
}

export default itemsReducer