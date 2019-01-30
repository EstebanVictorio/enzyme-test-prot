import Card from 'component/element/card'

const CardList = ({className, elements = []}) =>
  <div className={className}>
    { elements.map((element, index) =>
        <Card
          size='xs'
          title={`Title ${index}`}
          desc={'This is a description'}
          pic={'https://via.placeholder.com/200x180'}/>)
    }
  </div>


export default CardList
