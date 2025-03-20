import Layout from "../components/Layout";
import ImageGallery from "../components/ImageGallery";

function TMobileProject() {
  const images = [
    {
      src: "/t-mobile-nessie.png",
      alt: "T-Mobile Nessie Dashboard",
      title: "Nessie Network Dashboard",
      description:
        "The main dashboard of the Nessie platform showing network performance metrics and anomaly detection visualization.",
    },
    {
      src: "/t-mobile-nessie1.png",
      alt: "Network Analysis Tool",
      title: "Network Analysis Interface",
      description:
        "Advanced analytics interface for network engineers to identify and diagnose network performance issues.",
    },
    {
      src: "/t-mobile-nessie2.png",
      alt: "Network Analysis Tool",
      title: "Network Analysis Interface",
      description:
        "Advanced analytics interface for network engineers to identify and diagnose network performance issues.",
    },
    {
      src: "/t-mobile-nessie3.png",
      alt: "Network Analysis Tool",
      title: "Network Analysis Interface",
      description:
        "Advanced analytics interface for network engineers to identify and diagnose network performance issues.",
    },
  ];

  return (
    <Layout>
      <div className="medium-margin">
        <h1>T-Mobile Nessie Platform</h1>

        <div className="card medium-margin">
          <div className="card-content">
            <h3>Project Overview</h3>
            <p>
              The T-Mobile Nessie platform is a sophisticated network analysis
              and optimization tool that enables network engineers to monitor,
              analyze, and optimize T-Mobile's nationwide cellular network. The
              platform processes terabytes of network data daily to provide
              real-time insights and automated remediation recommendations.
            </p>

            <div className="small-space" />

            <h4>Key Features</h4>
            <ul className="large-margin">
              <li className="small-padding">
                Real-time network performance monitoring across all regions
              </li>
              <li className="small-padding">
                AI-powered anomaly detection and root cause analysis
              </li>
              <li className="small-padding">
                Predictive maintenance recommendations
              </li>
              <li className="small-padding">
                Interactive network topology visualization
              </li>
              <li className="small-padding">
                Automated ticketing and alert management system
              </li>
            </ul>

            <div className="small-space" />

            <h4>Technologies Used</h4>
            <div className="row medium-margin">
              <span className="chip secondary">React</span>
              <span className="chip secondary">Material UI</span>
              <span className="chip secondary">Java Springboot</span>
              <span className="chip secondary">Azure AD</span>
              <span className="chip secondary">
                Ansible Automation Platform
              </span>
              <span className="chip secondary">Okta</span>
              <span className="chip secondary">Postgres</span>
            </div>
          </div>
        </div>

        <div className="medium-margin">
          <h3>Project Gallery</h3>
          <ImageGallery images={images} />
        </div>

        <div className="card medium-margin">
          <div className="card-content">
            <h3>My Role</h3>
            <p>
              As the Technical Lead for the Nessie platform, I architected the
              cloud-native application infrastructure, designed the real-time
              data processing pipeline. I worked closely with T-Mobile's network
              engineers to translate complex network analysis requirements into
              intuitive user interfaces and powerful backend systems.
            </p>

            <div className="small-space" />

            <h4>Challenges & Solutions</h4>
            <p></p>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default TMobileProject;
