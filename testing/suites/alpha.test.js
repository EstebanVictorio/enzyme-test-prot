import React from 'react'
import { configure, shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
configure({adapter:new Adapter()})
import Card, {StyledCardContent} from 'component/element/card'


describe('A simple React Testing Suite',() => {
  it('It should render without any error', () => {
    const wrapper = shallow(<Card/>);
    console.log(`Card: ${wrapper.debug()}`);
    console.log(`StyledCardContent: ${StyledCardContent}`);
    expect(wrapper.find(StyledCardContent).length).toBe(1)
  })
})
