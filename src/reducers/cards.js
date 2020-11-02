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
        case 'EDIT_CARD':
            return state.map((card) => {
                if (card.id === action.id) {
                    return {
                        ...card,
                        ...action.updates
                    };
                } else {
                    return card;
                };
            });
        case 'SET_CARDS': 
            return action.cards;
        default:
            return state;
    }
};