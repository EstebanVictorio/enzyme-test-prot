import styled from 'styled-components'
import defaultTheme from 'theme/default'

const TINY = 'xs'
const SMALL = 'sm'
const MEDIUM = 'md'
const LARGE = 'lg'
const HUGE = 'xl'

const CardTitle = ({title,size = 'md'}) => {
  let header = null;
  switch (size) {
    case TINY:
      header = <h5>{title}</h5>
      break
    case SMALL:
      header = <h4>{title}</h4>
      break
    case LARGE:
      header = <h2>{title}</h2>
      break
    case HUGE:
      header = <h1>{title}</h1>
      break
    case MEDIUM:
    default:
      header = <h3>{title}</h3>
  }
  return header;
}

const CardDescription = ({className, desc}) =>
  <p className={className}>
    {desc}
  </p>

const StyledCardDescription = styled(CardDescription)`${({size}) =>
  defaultTheme.card[size].desc}`

const CardContent = ({className, size, title, desc }) =>
  <div className={className}>
    <CardTitle title={title} size={size}/>
    <StyledCardDescription size={size} desc={desc}/>
  </div>

const StyledCardContent = styled(CardContent)`${defaultTheme.card.content}`;

const Card = ({className, title ='', desc = '', pic = '', size = 'md'}) =>
  <div className={className}>
    <img src={pic} alt="Not found..."/>
    <StyledCardContent size={size} title={title} desc={desc}/>
  </div>

const StyledCard = styled(Card)`${({size}) => defaultTheme.card[size].body}`

export default StyledCard
