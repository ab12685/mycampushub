import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

import HelpDesk from "./HelpDesk";
import Rating from "./Rating";
import Complaint from "./Complaint";
import Privacy from "./Privacy";
import StudentDashboard from "./StudentDashboard";
import "./App.css";

export default function App() {
  return (
    <Router>
      <div className="container">
        <h1>College Event Management</h1>

        <nav>
          <Link to="/">Help Desk</Link>
          <Link to="/rating">Rating</Link>
          <Link to="/complaint">Complaint</Link>
          <Link to="/privacy">Privacy Policy</Link>
        </nav>

        <Routes>
          <Route path="/" element={<HelpDesk />} />
          <Route path="/rating" element={<Rating />} />
          <Route path="/complaint" element={<Complaint />} />
          <Route path="/dashboard" element={<StudentDashboard />} />
          <Route path="/privacy" element={<Privacy />} />
        </Routes>
      </div>
    </Router>
  );
}
