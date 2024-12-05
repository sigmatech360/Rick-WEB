import { Route, Routes, BrowserRouter } from "react-router-dom";
import Home from '../Screens/Home'
import About from "../Screens/about";
import OurWork from "../Screens/ourwork";
import GetHelp from "../Screens/gethelp";
import Givedonation from "../Screens/givedonation";
import Contactus from "../Screens/contactus";
import Sponsorship from "../Screens/Sponsorship";
import ProgramsProjects from "../Screens/Programs&Projects";
import TopVolunteer from "../Screens/TopVolunteer";
import Ourpodcast from "../Screens/ourpodcast";
 import Transitionalagedyouthshelter from '../Screens/Transitionalagedyouthshelter'
 import TransitionalHousingProgram from '../Screens/TransitionalHousingProgram'
 import CommunityOutreachDay from '../Screens/communityoutreachday'
import Event from '../Screens/event'
export default function UserRouter() {
  return (
    <BrowserRouter basename="/His-oc">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About/>} />
        <Route path="/ourwork" element={<OurWork/>} />
        <Route path="/gethelp" element={<GetHelp/>} />
        <Route path="/givedonation" element={<Givedonation/>} />
        <Route path="/contactus" element={<Contactus/>} />
        <Route path="/sponsorship" element={<Sponsorship/>} />
        <Route path="/our-programs" element={<ProgramsProjects/>} />
        <Route path="/topvolunteer" element={<TopVolunteer/>} />
        <Route path="/ourpodcast" element={<Ourpodcast/>} />
        <Route path="/transitional-housing-program" element={<TransitionalHousingProgram/>} />
        <Route path="/transitional-aged-youth-shelter" element={<Transitionalagedyouthshelter/>} />
        <Route path="/event" element={<Event/>} />
        <Route path="/communityOutreachDay" element={<CommunityOutreachDay/>} />
         
         
      </Routes>
    </BrowserRouter>
  );
}