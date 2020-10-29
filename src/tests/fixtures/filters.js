import moment from 'moment';

const filters = {
    text: '',
    cardName: '',
    sortBy: 'date',
    startDate: undefined,
    endDate: undefined
};

const altFilters = {
    text: 'bills',
    cardName: '',
    sortBy: 'amount',
    startDate: moment(0),
    endDate: moment(0).add(3, 'years')
};

export { filters, altFilters };