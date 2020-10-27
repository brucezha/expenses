import React from 'react';
import { shallow } from 'enzyme';
import expenses from '../fixtures/expenses';
import Button from '@material-ui/core/Button';
import Modal from 'react-modal';
import DeleteModal from '../../components/DeleteModal';

let history, wrapper

beforeEach(() => {
    history = { push: jest.fn() };
    wrapper = shallow(
        <DeleteModal />
    );
});

test('should render deleteModal correctly', () => {
    expect(wrapper).toMatchSnapshot();
});