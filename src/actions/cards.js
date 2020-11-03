import database from '../firebase/firebase';

// Add Card
export const addCard = (card) => ({
    type: 'ADD_CARD',
    card
});

export const startAddCard = (cardData = {}) => {
    return (dispatch, getState) => {
        const uid = getState().auth.uid;
        const {
            cardName = ''
        } = cardData;
        const card = {
            cardName
        };

        //return the promise chain, we can continue chaining in test
        return database.ref(`users/${uid}/cards`).push(card).then((ref) => {
            dispatch(addCard({
                id: ref.key,
                cardName: cardName
            }));
        });
    };
};

// Edit Card
export const editCard = (id, updates) => ({
    type: 'EDIT_CARD',
    id,
    updates
});

export const startEditCard = (id, updates) => {
    return (dispatch, getState) => {
        const uid = getState().auth.uid;
        return database.ref(`users/${uid}/cards/${id}`).update(updates).then(() => {
            dispatch(editCard(id, updates));
        });
    };
};

// Remove Card
export const removeCard = ({
    id
} = {}) => ({
    type: 'REMOVE_CARD',
    id
});

export const startRemoveCard = ({
    id
} = {}) => {
    return (dispatch, getState) => {
        const uid = getState().auth.uid;
        return database.ref(`users/${uid}/cards/${id}`).remove().then(() => {
            dispatch(removeCard({
                id
            }));
        });
    };
};

// Set Cards
export const setCards = (cards) => ({
    type: 'SET_CARDS',
    cards
});

export const startSetCards = () => {
    return (dispatch, getState) => {
        const uid = getState().auth.uid;
        return database.ref(`users/${uid}/cards`).once('value').then((snapshot) => {
            const cards = [];
            snapshot.forEach((childSnapshot) => {
                cards.push({
                    id: childSnapshot.key,
                    ...childSnapshot.val()
                });
            });
            dispatch(setCards(cards));
        });
    };
};