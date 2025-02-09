import logo1 from './logo.svg';
import './App.css';
import "@cloudscape-design/global-styles/index.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import LogInPage from './pages/LogInPage';
import Home from './pages/Home/Home';
import MapSelection from './pages/MapSelection/MapSelection';
import RoomSelection from './pages/MapSelection/RoomSelection';
import NotFoundPage from './pages/NotFoundPage';
import { TopNavigation } from '@cloudscape-design/components';
import ReviewHousingInfo from './pages/ReviewHousingInfo';
import UserPreferences from './pages/user_preferences';
import Panorama from './KilgoRoomTour/panorama_sample';


// Define a functional component with TypeScript annotations
const App: React.FC = () => {
  return (
    <>
      <TopNavigation
        identity={{
          href: "/",
          title: "Duke Housing and Residence",
          logo: {
            src: logo1, // Correct usage of the imported logo
            alt: "Service"
          }
        }}
      />

      <>
        <Router>
          <Routes>
            <Route path="/home" element={<Home />} />
            <Route path="/" element={<LogInPage />} />
            <Route path="/room-tour" element={<Panorama />}/>
            <Route path="/map-selection" element={<MapSelection />} />
            <Route path="/review" element={<ReviewHousingInfo />} />
            <Route path="map-selection/floor/:floor/house/:house" element={<RoomSelection />} /> 
            <Route path="/user_preferences" element={<UserPreferences />} />
            {/* Add a wildcard route for 404 */}
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </Router>
      </>
    </>
  );
}

export default App;
