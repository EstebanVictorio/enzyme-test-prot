import React from 'react'
import Main from 'component/layout/main'


const withLayout = Component => class extends React.Component{
  render(){
    return <Main>
      <Component/>
    </Main>
  }
}

export default withLayout
