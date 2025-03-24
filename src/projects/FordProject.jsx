import Layout from "../components/Layout";
import ImageGallery from "../components/ImageGallery";

function FordProject() {
  const images = [
    {
      src: "/ford-config-1.png",
      alt: "Ford Options Panel",
      title: "Vehicle Options Panel",
      description:
        "Detailed interface for selecting and customizing vehicle options, including interior, exterior, and performance features.",
    },
    {
      src: "/ford-config-2.png",
      alt: "Ford Options Panel",
      title: "Vehicle Options Panel",
      description:
        "Detailed interface for selecting and customizing vehicle options, including interior, exterior, and performance features.",
    },
    {
      src: "/ford-config-3.png",
      alt: "Ford Options Panel",
      title: "Vehicle Options Panel",
      description:
        "Detailed interface for selecting and customizing vehicle options, including interior, exterior, and performance features.",
    },
    {
      src: "/ford-config-4.png",
      alt: "Ford Options Panel",
      title: "Vehicle Options Panel",
      description:
        "Detailed interface for selecting and customizing vehicle options, including interior, exterior, and performance features.",
    },
    {
      src: "/ford-config-5.png",
      alt: "Ford Options Panel",
      title: "Vehicle Options Panel",
      description:
        "Detailed interface for selecting and customizing vehicle options, including interior, exterior, and performance features.",
    },
    {
      src: "/ford-config-6.png",
      alt: "Ford Options Panel",
      title: "Vehicle Options Panel",
      description:
        "Detailed interface for selecting and customizing vehicle options, including interior, exterior, and performance features.",
    },
  ];

  return (
    <Layout>
      <div className="medium-margin">
        <h1 className="margin-left">Ford Vehicle Configuration </h1>

        <div className="card medium-margin">
          <div className="card-content">
            <h3>Project Overview</h3>
            <p>
              The Ford Configuration Platform is an enterprise-grade solution
              developed to streamline the ECU configuration process for Ford
              engeneering teams. This web application allows engineers to set
              variables on multiple ECU's, generate configuration files, and
              deploy them to the vehicle's network.
            </p>

            <div className="small-space" />

            <h4>Key Features</h4>
            <ul className="large-margin">
              <li className="small-padding">
                Real-time configuration updates for multiple ECUs
              </li>
              <li className="small-padding">
                Customizable configuration templates for different vehicle
                models
              </li>
              <li className="small-padding">
                JFrog integration for secure configuration file storage
              </li>
              <li className="small-padding">
                Automated deployment to vehicle network using Yugabyte
              </li>
            </ul>

            <div className="small-space" />

            <h4>Technologies Used</h4>
            <div className="chip-container medium-margin">
              <span className="chip">React</span>
              <span className="chip">JFrog</span>
              <span className="chip">Yugabyte</span>
              <span className="chip">Kubevela - Open Application Model</span>
              <span className="chip">GCP Kubernetes</span>
              <span className="chip">Go</span>
              <span className="chip">Github Actions</span>
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
              As the Lead Developer for this project, I was responsible for
              architecting both the frontend application and the backend
              services that power the Ford Configuration Platform. I worked
              closely with Ford's engineering team to understand their
              requirements and ensure that the platform met their needs.
            </p>

            <div className="small-space" />

            <h4>Challenges & Solutions</h4>
            <p>
              Focus of this project was building on a new CI/CD platform with
              Kubernetes and Kubevela Open Application Model. This was a new
              technology stack for the team, so I provided training and guidance
              on best practices for deploying and managing applications in a
              Kubernetes environment.
            </p>
          </div>
        </div>
      </div>

      <style jsx>{`
        .chip-container {
          display: flex;
          flex-wrap: wrap;
          gap: 0.5rem;
        }

        .chip {
          background-color: var(--secondary-container);
          color: var(--on-secondary-container);
          padding: 0.5rem 1rem;
          border-radius: 16px;
          font-size: 0.9rem;
        }
      `}</style>
    </Layout>
  );
}

export default FordProject;
