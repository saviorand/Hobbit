// Action types

export const SAVE_USER = "SAVE_USER";
export const GET_USER = "GET_USER";

// Action creator

export function saveUser (user) {
	return {
		type: SAVE_USER,
		user
	}
};

export function getUser (user) {
	return {
		type: GET_USER,
		user
	}
};


// Reducer

const initialState:Array<Object> = [];

function usersReducer(state = initialState, action) {
	switch (action.type) {

		case "SAVE_USER":
			return [
			...state,
			action.user
			];
			break;

		case "GET_USER":
		    return [
		    ...state
		    ];
		    break;

		default:
			return state;
			break;
	}
}

export default usersReducer