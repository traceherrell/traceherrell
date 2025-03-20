import Layout from "../components/Layout";
import ImageGallery from "../components/ImageGallery";

function BluetoothProject() {
  const images = [
    {
      src: "/bluetooth-launchstudio.png",
      alt: "Bluetooth Qualification Platform",
      title: "Qualification Dashboard",
      description:
        "The main dashboard of the Bluetooth Qualification Platform showing device submission status and certification progress.",
    },
    {
      src: "/bluetooth-launchstudio-new.png",
      alt: "Test Case Management",
      title: "Test Case Management",
      description:
        "Interface for managing test cases and compliance verification for Bluetooth device certification.",
    },
    {
      src: "/bluetooth-launchstudio-search.png",
      alt: "Bluetooth Qualification Platform",
      title: "Launch Studio Search",
      description:
        "Search functionality for finding Bluetooth devices and certification details in the database.",
    },
  ];

  return (
    <Layout>
      <div className="medium-margin">
        <h1>Bluetooth Qualification Platform - Launch Studio</h1>

        <div className="card medium-margin">
          <div className="card-content">
            <h3>Project Overview</h3>
            <p>
              The Bluetooth Qualification Platform is a comprehensive
              certification system for the Bluetooth Special Interest Group
              (SIG) that enables manufacturers worldwide to certify their
              Bluetooth-enabled devices. This enterprise platform handles the
              entire qualification process from application submission to final
              certification.
            </p>

            <div className="small-space" />

            <h4>Key Features</h4>
            <ul className="large-margin">
              <li className="small-padding">
                End-to-end qualification workflow management
              </li>
              <li className="small-padding">
                Automated test case validation and compliance verification
              </li>
              <li className="small-padding">
                Global manufacturer portal with multi-language support
              </li>
              <li className="small-padding">
                Secure document management for confidential specifications
              </li>
              <li className="small-padding">
                Integrated payment processing for certification fees
              </li>
              <li className="small-padding">
                Analytics dashboard for certification trends and statistics
              </li>
            </ul>

            <div className="small-space" />

            <h4>Technologies Used</h4>
            <div className="chip-container medium-margin">
              <span className="chip">Vue.js</span>
              <span className="chip">Vuex</span>
              <span className="chip">.NET Core</span>
              <span className="chip">Azure</span>
              <span className="chip">SQL Server</span>
              <span className="chip">Azure DevOps</span>
              <span className="chip">Kubernetes</span>
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
              As the Cloud Architect and Lead Developer, I spearheaded the
              modernization of Bluetooth SIG's legacy qualification system to a
              cloud-native platform. I introduced Vue.js as the frontend
              technology, designed the microservices architecture, and
              implemented CI/CD pipelines for automated deployment. I also
              mentored the development team on cloud-native development
              practices and modern JavaScript frameworks.
            </p>

            <div className="small-space" />

            <h4>Challenges & Solutions</h4>
            <p>
              The primary challenge was migrating from a monolithic legacy
              system to a modern microservices architecture without disrupting
              the ongoing certification processes. I designed a phased migration
              strategy with parallel operations and data synchronization between
              the old and new systems. This approach allowed for incremental
              deployment of new features while maintaining backward
              compatibility. We also implemented a comprehensive automated
              testing framework that reduced regression bugs by 78% during the
              migration process.
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

export default BluetoothProject;
