import { Link, useLocation } from "react-router-dom";

const ButtonLink = ({ path, text }) => {
  const location = useLocation();
  const isActive =
    location.pathname === path
      ? " primary small-round"
      : " secondary small-round";
  return (
    <Link to={path}>
      <button style={{ width: "45px" }} className={isActive}>
        {text}
      </button>
    </Link>
  );
};

function Layout({ children }) {
  return (
    <div className="margin-small main center">
      <nav className="left m l xl">
        <ButtonLink path="/" text="Home" />
        <ButtonLink path="/ford" text="Ford" />
        <ButtonLink path="/tmobile" text="T-Mobile" />
        <ButtonLink path="/bluetooth" text="Bluetooth" />
      </nav>

      {children}
    </div>
  );
}

export default Layout;
