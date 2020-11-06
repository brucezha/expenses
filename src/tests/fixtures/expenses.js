import moment from 'moment';

export default [{
    id: '1',
    description: 'Gum',
    card: 'Chase',
    note: '',
    amount: 195,
    createdAt: 0
}, {
    id: '2',
    description: 'Rent',
    card: 'Amex',
    note: '',
    amount: 345000,
    createdAt: moment(0).subtract(2, 'month').valueOf()
}, {
    id: '3',
    description: 'Rent Oswego',
    card: 'Chase Checking',
    note: '',
    amount: 80000,
    createdAt: moment(0).add(1, 'month').valueOf()
}];