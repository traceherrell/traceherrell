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
        <NavLink path="/make24" text="24" icon="sports_esports" />
      </nav>
      <nav className="s top ">
        <BottomNavLink path="/" icon="home" />
        <BottomNavLink path="/ford" icon="directions_car" />
        <BottomNavLink path="/tmobile" icon="phone" />
        <BottomNavLink path="/bluetooth" icon="bluetooth" />
        <BottomNavLink path="/make24" icon="sports_esports" />
      </nav>

      <div className="main scroll ">{children}</div>
    </div>
  );
}

export default Layout;
