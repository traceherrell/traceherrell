import Layout from "../components/Layout";
import ImageGallery from "../components/ImageGallery";

function TMobileProject() {
  const images = [
    {
      src: "/t-mobile-nessie.png",
      alt: "T-Mobile Nessie Landing Page",
      title: "Nessie Landing Page",
      description: "The landing page of the Nessie platform .",
    },
    {
      src: "/t-mobile-nessie1.png",
      alt: "Nessie Service Request",
      title: "Nessie Service Request",
      description:
        "Service request interface for network engineers to request network optimization services.",
    },
    {
      src: "/t-mobile-nessie2.png",
      alt: "Service Request Log",
      title: "Nessie Service Request Log",
      description:
        "Service request log for network engineers to track the status of their service requests.",
    },
    {
      src: "/t-mobile-nessie3.png",
      alt: "Nessie Mulitple Service Requests",
      title: "Nessie Mulitple Service Requests",
      description:
        "Network engineers can submit multiple service requests simultaneously.",
    },
  ];

  return (
    <Layout>
      <div className="medium-margin">
        <h1 className="margin-left">T-Mobile Nessie Platform</h1>

        <div className="card medium-margin">
          <div className="card-content">
            <h3>Project Overview</h3>
            <p>
              The T-Mobile Nessie platform is a front end to Ansible Automation
              Platform that provides visibliblity, governance, automation, and
              change management for T-Mobile's global network infrastructure.
            </p>

            <div className="small-space" />

            <h4>Key Features</h4>
            <ul className="large-margin">
              <li className="small-padding">Governance</li>
              <li className="small-padding">Change management</li>
              <li className="small-padding">Automation</li>

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
            <p>
              One of the biggest challenges was integrating the Nessie platform
              with T-Mobile's existing network infrastructure. We solved this
              problem by creating a custom API that translated network data into
              a format that the Nessie platform could understand.
            </p>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default TMobileProject;
