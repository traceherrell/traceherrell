import { Link, useLocation } from "react-router-dom";

function Layout({ children }) {
  const location = useLocation();
  
  return (
    <div className="margin-medium main center">
      <nav className="left">
        <Link to="/" className={location.pathname === "/" ? "active" : ""}>Home</Link>
        <Link to="/projects/ford" className={location.pathname === "/projects/ford" ? "active" : ""}>Ford Configuration</Link>
        <Link to="/projects/tmobile" className={location.pathname === "/projects/tmobile" ? "active" : ""}>T-Mobile Nessie</Link>
        <Link to="/projects/bluetooth" className={location.pathname === "/projects/bluetooth" ? "active" : ""}>Bluetooth Qualification</Link>
      </nav>
      
      {children}
    </div>
  );
}

export default Layout;