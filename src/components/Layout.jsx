import { Link, useLocation } from "react-router-dom";

function Layout({ children }) {
  const location = useLocation();

  return (
    <div className="margin-medium main center">
      <nav className="left m l xl ">
        <Link to="/" className={location.pathname === "/" ? "active" : ""}>
          Home
        </Link>
        <Link
          to="/ford"
          className={location.pathname === "/ford" ? "active" : ""}
        >
          Ford Configuration
        </Link>
        <Link
          to="/tmobile"
          className={location.pathname === "/tmobile" ? "active" : ""}
        >
          T-Mobile Nessie
        </Link>
        <Link
          to="/bluetooth"
          className={location.pathname === "/bluetooth" ? "active" : ""}
        >
          Bluetooth Qualification
        </Link>
      </nav>
      <nav className="bottom s">
        <Link to="/" className={location.pathname === "/" ? "active" : ""}>
          Home
        </Link>
        <Link
          to="/ford"
          className={location.pathname === "/ford" ? "active" : ""}
        >
          Ford
        </Link>
        <Link
          to="/tmobile"
          className={location.pathname === "/tmobile" ? "active" : ""}
        >
          T-Mobile
        </Link>
        <Link
          to="/bluetooth"
          className={location.pathname === "/bluetooth" ? "active" : ""}
        >
          Bluetooth
        </Link>
      </nav>
      {children}
    </div>
  );
}

export default Layout;
