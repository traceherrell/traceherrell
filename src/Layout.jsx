import { Link } from "react-router-dom";

const NavLink = ({ path, text, icon }) => {
  return (
    <Link to={path}>
      <i>{icon}</i>
      <span>{text}</span>
    </Link>
  );
};

const BottomNavLink = ({ path, icon }) => {
  return (
    <Link to={path}>
      <i>{icon}</i>
    </Link>
  );
};

function Layout({ children }) {
  return (
    <div>
      <nav className="margin-small left m l">
        <NavLink path="/" text="Home" icon="home" />
        <NavLink path="/ford" text="Ford" icon="directions_car" />
        <NavLink path="/tmobile" text="T-Mobile" icon="phone" />
        <NavLink path="/bluetooth" text="Bluetooth" icon="bluetooth" />
        <i>sports_esports</i>
        {/* <Link to="/2048">
          <h6>2048</h6>
        </Link> */}
        <Link to="/make24">
          <h6>24</h6>
        </Link>
      </nav>

      <div className="main scroll ">{children}</div>
      <nav className="s bottom ">
        <BottomNavLink path="/" icon="home" />
        <BottomNavLink path="/ford" icon="directions_car" />
        <BottomNavLink path="/tmobile" icon="phone" />
        <BottomNavLink path="/bluetooth" icon="bluetooth" />
        <BottomNavLink path="/make24" icon="sports_esports" />
      </nav>
    </div>
  );
}

export default Layout;
