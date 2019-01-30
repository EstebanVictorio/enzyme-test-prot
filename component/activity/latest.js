import HCardList from 'component/collection/h-cardlist'

const Latest = ({className}) =>
  <div className={className}>
    <h2>Latest</h2>
    <HCardList elements={[{key : 1},{ key : 2},{ key : 3}]}/>
  </div>

export default Latest
