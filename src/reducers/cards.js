const cardReducerDefaultState = [];

export default (state = cardReducerDefaultState, action) => {
    switch (action.type) {
        case 'ADD_CARD':
            return [
                ...state,
                action.card
            ];
        // case 'REMOVE_EXPENSE':
        //     return state.filter(({ id }) => id !== action.id );
        // case 'EDIT_EXPENSE':
        //     return state.map((expense) => {
        //         if (expense.id === action.id) {
        //             return {
        //                 ...expense,
        //                 ...action.updates
        //             };
        //         } else {
        //             return expense;
        //         };
        //     });
        case 'SET_CARDS': 
            return action.cards;
        default:
            return state;
    }
};