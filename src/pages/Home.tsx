import Worklist from '../components/WorkList'
import TagSelectButton from '../components/TagSelectButton'
const Home = () => {
  return (
    <div className="home basic__page">
      <TagSelectButton />
      <Worklist />
    </div>
  )
}

export default Home
