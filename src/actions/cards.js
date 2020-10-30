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
        const card = { cardName };
        
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

// Remove Card

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