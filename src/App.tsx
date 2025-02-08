import logo1 from './logo.svg';
import './App.css';
import "@cloudscape-design/global-styles/index.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import LogInPage from './pages/LogInPage';
import MapSelection from './pages/MapSelection/MapSelection';
import NotFoundPage from './pages/NotFoundPage';
import { TopNavigation } from '@cloudscape-design/components';


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
            <Route path="/" element={<LogInPage />} />
            <Route path="/home" element={<LogInPage />} />
            <Route path="/map-selection" element={<MapSelection />} />
            {/* Add a wildcard route for 404 */}
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </Router>
      </>
    </>
  );
}

export default App;
