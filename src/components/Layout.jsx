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
      <nav className="margin-small left m l xl">
        <NavLink path="/" text="Home" icon="home" />
        <NavLink path="/ford" text="Ford" icon="directions_car" />
        <NavLink path="/tmobile" text="T-Mobile" icon="phone" />
        <NavLink path="/bluetooth" text="Bluetooth" icon="bluetooth" />
        <NavLink path="/2048" text="2048" icon="sports_esports" />
      </nav>
      <nav className="bottom s no-padding">
        <BottomNavLink path="/" icon="home" />
        <BottomNavLink path="/ford" icon="directions_car" />
        <BottomNavLink path="/tmobile" icon="phone" />
        <BottomNavLink path="/bluetooth" icon="bluetooth" />
        <BottomNavLink path="/2048" icon="sports_esports" />
      </nav>
      <div className=" main responsive">{children}</div>
    </div>
  );
}

export default Layout;
