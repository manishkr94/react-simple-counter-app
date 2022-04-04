// jest-dom adds custom jest matchers for asserting on DOM nodes.
// allows you to do things like:
// expect(element).toHaveTextContent(/react/i)
// learn more: https://github.com/testing-library/jest-dom
import '@testing-library/jest-dom';
import { EnzymeAdapter, shallow, Enzyme } from 'enzyme';
import App from './App';
import counterReducer from './redux/Counter/counter.reducers'
import { DECREMENT, INCREMENT } from './redux/Counter/counter.types';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';

// Enzyme.configure({ adapter: new Adapter() });

test('should return the initial state', () => {
    expect(counterReducer(undefined, {})).toEqual(
        {
            count: 0
        }
    )
})

test('should return the initial state', () => {

    const MOCK_INITIAL_STATE = {
        count: 2,
    };
    expect(counterReducer(MOCK_INITIAL_STATE, { type: INCREMENT })).toEqual(
        {
            count: 3
        }
    )
})

test('should return the initial state', () => {

    const MOCK_INITIAL_STATE = {
        count: 2,
    };
    expect(counterReducer(MOCK_INITIAL_STATE, { type: DECREMENT })).toEqual(
        {
            count: 1
        }
    )
})


