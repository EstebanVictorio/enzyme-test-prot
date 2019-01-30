import HCardList from 'component/collection/h-cardlist'

const History = ({className}) =>
  <div className={className}>
    <h2>Your history</h2>
    <HCardList elements={[{key : 1},{ key : 2},{ key : 3}]}/>
  </div>

export default History
