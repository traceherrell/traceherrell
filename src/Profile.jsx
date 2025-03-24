import { Link } from "react-router-dom";
import Layout from "./components/Layout";
import profile from "/herrell_trace_profile.jpg";

const scrollTo = (id) => {
  const element = document.getElementById(id);
  element.scrollIntoView({ behavior: "smooth" });
};

function Profile() {
  return (
    <Layout>
      <div className="margin-medium main center">
        <div className="grid">
          <div className="s12 m6">
            <div className="max" />
            <img
              style={{ borderRadius: "8px" }}
              className="center"
              alt="Profile"
              src={profile}
            />
          </div>

          <div className="s12 m6">
            <div className="medium-margin middle">
              <h1 className="">Hello, I'm Trace</h1>
              <h6 className="">
                Highly accomplished Cloud Architect and Lead Developer with 15+
                years of experience driving the design, development, and
                deployment of enterprise-grade cloud applications. Expert in
                Azure, Kubernetes, and modern JavaScript frameworks.
              </h6>
              <div className="small-space" />
              <button
                onClick={() => scrollTo("featured-projects")}
                style={{ marginLeft: 0 }}
                className="primary small-round"
              >
                Read More
              </button>
              <div className="small-space" />
            </div>
          </div>
        </div>
        <div className="large-space" />

        <div className="medium-margin large-text">
          <h2>Experience</h2>
        </div>
        <div className="small-space" />
        <div className="grid medium-margin">
          <div className="s12 m6 l3">
            <h5>
              <i className="fab fa-react" /> React
            </h5>
            <p>
              I've built a couple of projects as well as leading new end teams.
              Redux state management, story book components
            </p>
          </div>
          <div className="s12 m6 l3">
            <h5>
              <i className="fab fa-vuejs" /> Vue
            </h5>
            <p>
              Introduced Bluetooth to Vue and led the adoption state management
              (Vuex) as a design pattern.
            </p>
          </div>
          <div className="s12 m6 l3">
            <h5>
              <i className="fab fa-microsoft" /> .Net Core
            </h5>
            <p>
              Micro services. Queues, Event Sourcing, Repository, Dependency
              injection.
            </p>
          </div>
          <div className="s12 m6 l3">
            <h5>
              <i className="fab fa-docker" /> Docker
            </h5>
            <p>
              Azure container services (ACS), Azure Kubernetes Service (AKS),
              Azure DevOps.
            </p>
          </div>

          <div className="s12 m6 l3">
            <h5>
              <i className="fa fa-lg fa-html5" /> HTML/CSS
            </h5>
            <p>
              Implement responsive designs for a usable experience across
              desktop, tablet, and phone browsers.
            </p>
          </div>
          <div className="s12 m6 l3">
            <h5>
              <i className="fa fa-lg fa-code" /> Code
            </h5>
            <p>
              Well versed in functional and OO programming. I primarily write
              JavaScript, and C#. Recently new to Rust
            </p>
          </div>
          <div className="s12 m6 l3">
            <h5>
              <i className="fa fa-lg fa-cloud" /> API
            </h5>
            <p>
              Develop RESTful interfaces that incorporate stateless designs,
              self-descriptive messages and semantic URLs. Apigee, Azure Api
              Management.
            </p>
          </div>
          <div className="s12 m6 l3">
            <h5 className="sub-heading">
              <i className="fa fa-lg fa-database" /> Database
            </h5>
            <p>
              Relational, Document, Azure SQL Server, Cosmos, Mongo, Redis,
              T-SQL, Modeling, Query optimization.
            </p>
          </div>
        </div>

        <div className="small-space" />
        <div className="medium-margin">
          <h2 id="featured-projects">Featured Projects</h2>
          <div className="small-space" />
          <div className="grid">
            <div className="s12 m4">
              <div className="card">
                <div className="card-image">
                  <img src="/ford-config.png" alt="Ford Configuration" />
                </div>
                <div className="card-content">
                  <h5>Ford Configuration</h5>
                  <p>
                    Advanced vehicle configuration platform for Ford customers
                  </p>
                </div>
                <div className="card-action">
                  <Link to="/projects/ford" className="primary button">
                    View Project
                  </Link>
                </div>
              </div>
            </div>

            <div className="s12 m4">
              <div className="card">
                <div className="card-image">
                  <img src="/t-mobile-nessie.png" alt="T-Mobile Nessie" />
                </div>
                <div className="card-content">
                  <h5>T-Mobile Nessie</h5>
                  <p>
                    Change control and governance for T-Mobile Network devices{" "}
                  </p>
                </div>
                <div className="card-action">
                  <Link to="/projects/tmobile" className="primary button">
                    View Project
                  </Link>
                </div>
              </div>
            </div>

            <div className="s12 m4">
              <div className="card">
                <div className="card-image">
                  <img
                    src="/bluetooth-launchstudio.png"
                    alt="Bluetooth Qualification"
                  />
                </div>
                <div className="card-content">
                  <h5>Bluetooth Qualification</h5>
                  <p>Device certification platform for Bluetooth SIG</p>
                </div>
                <div className="card-action">
                  <Link to="/projects/bluetooth" className="primary button">
                    View Project
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default Profile;
