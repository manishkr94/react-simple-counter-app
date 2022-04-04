import React from 'react';
import renderer from 'react-test-renderer';
import { App } from './App';
import { configure, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
//import Adapter from 'enzyme-adapter-react-16';

enzyme.configure({ adapter: new Adapter() });

describe('Test counter', () => {
    test('render counter component', () => {
        const props = {
            count: 0,
            increaseCounter: jest.fn(),
            decreaseCounter: jest.fn()
        }
        const tree = renderer.create(
            <App {...props} />
        ).toJSON();
        expect(tree).toMatchSnapshot();

        const component2 = mount(
            <App {...props} />
        )
        expect(component2.find(".count").exists());
    });
});