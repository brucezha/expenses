import moment from 'moment';

export default [{
    id: '1',
    description: 'Gum',
    card: '',
    note: '',
    amount: 195,
    createdAt: 0
}, {
    id: '2',
    description: 'Rent',
    card: '',
    note: '',
    amount: 345000,
    createdAt: moment(0).subtract(2, 'month').valueOf()
}, {
    id: '3',
    description: 'Rent Oswego',
    card: '',
    note: '',
    amount: 80000,
    createdAt: moment(0).add(1, 'month').valueOf()
}];