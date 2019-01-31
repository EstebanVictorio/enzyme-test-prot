import React from 'react'
import styled from 'styled-components'
import defaultTheme from 'theme/default'
import { configure, shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import toJson from 'enzyme-to-json'
configure({adapter:new Adapter()})
import StyledCard,{Card , StyledCardContent} from 'component/element/card'
const MCardWithStyle = styled(Card)`${({size}) => defaultTheme.card[size].body}`


describe('A simple React Testing Suite',() => {
  it('It should render without any error', () => {
    expect(wrapper.contains(<div className='asd'>
      <img src='' alt='Not found...'/>
      <StyledCardContent size='xs' title='Title sample' desc='This is a description'/>
    </div>)
    ).toBe(true)
  })
})
