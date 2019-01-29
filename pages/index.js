import withLayout from 'component/hoc/with-layout'
import Latest from 'component/activity/latest'
import History from 'component/activity/history'

const Home = props => <div>
<Latest/>
<History/>
</div>

export default withLayout(Home)
