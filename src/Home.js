const profile = require('./Images/profile.png')

const Home = () => {
  return (
    <div className="prof">
      <img className="profile" src={profile} alt="" />
      <div className="info">
        <h1>Emily Byrne</h1>
        <h2>
          👋 Hi, my name is Emily. I am an ambitious and motivated software
          engineer with communication, leadership, and problem-solving skills
          developed through my years of teaching and my Fulbright grant. I am
          detail-oriented, creative, and a team player. My international
          experiences and drive to be challenged make me a distinguished
          candidate.
        </h2>
        <h2>
          In my free time, I like to travel, hike, ski, read, and spend time
          with family and friends.
        </h2>
      </div>
    </div>
  )
}

export default Home
