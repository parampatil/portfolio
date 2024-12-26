import Landing from "./Landing"
import Achievements from "./Achievements"
import Experiance from "./Experiance"

const Home = () => {
  return (
    <div className='snap-y snap-mandatory'>
        <Landing />
        <Achievements />
        <Experiance />
    </div>
  )
}

export default Home