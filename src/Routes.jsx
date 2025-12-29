import {Routes, Route} from "react-router-dom"
import AuthPage from "./Components/Auth.jsx"
import LandingPage from "./Pages/LandingPage.jsx"
import Home from "./Components/Home.jsx"
import ExploreSkills from "./Pages/Explore.jsx"
import Navbar2 from "./Components/Navbar2.jsx"
import MessengerReplica from "./Pages/Message.jsx"
import CommunityGroups from "./Pages/CommunityGroups.jsx"
import Challenges from "./Components/Challenges.jsx"
import Achievement from "./Components/Achievement.jsx"
import SkillWallet from "./Components/Skillwallet.jsx"
import Profile from "./Components/Profile.jsx"
import Participants from "./Components/Participants.jsx"
import TeachLearn from "./Components/Teach&Learn.jsx"
import Message2 from "./Pages/Message2.jsx"

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/auth" element={<AuthPage />} />
      <Route path="/landingpage" element={<LandingPage />} />
      <Route path="/home" element={<Home />} />
      <Route path="/explore" element={<ExploreSkills />} />
      <Route path="/nav" element={<Navbar2 />} />
      <Route path="/communitygroups" element={<CommunityGroups />} />
      <Route path="/Challenges" element={<Challenges />} />
      <Route path="/achievement" element={<Achievement />} />
      <Route path="/skillwallet" element={<SkillWallet />} />
      <Route path="/profile" element={<Profile/>} />
      <Route path="/auth/:mode" element={<AuthPage />} />
      <Route path="/participants" element={<Participants />} />
      <Route path="/teachlearn" element={<TeachLearn />} />
      <Route path="/teachlearn/:mode" element={<TeachLearn />} />
      <Route path="/messengerreplica" element={<MessengerReplica />} />
      <Route path="/message2" element={<Message2 />} />


      {/* Add more routes here as needed */}
    </Routes>
  )
}