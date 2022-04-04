import { render, screen } from '@testing-library/react';
import { EnzymeAdapter, shallow, Enzyme } from 'enzyme';
import App from './App';

// test('renders learn react link', () => {
//   render(<App />);
//   const linkElement = screen.getByText(/learn react/i);
//   expect(linkElement).toBeInTheDocument();
// });

// Enzyme.configure({ adapter: new Adapter() });

// describe('Counter component', () => {
//   it('Renders Counter Component', () => {
//     const props = {
//       count: 0,
//       increaseCounter: jest.fn(),
//       decreaseCounter: jest.fn()
//     }
//     const wrapper = shallow(<App {...props} />)
//     expect(wrapper.find("count").toEqual("count:0"))
//   })
// })
