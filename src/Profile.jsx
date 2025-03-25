import { Link } from "react-router-dom";
import Layout from "./components/Layout";
import profile from "/herrell_trace_profile.jpg";

const scrollTo = (id) => {
  const element = document.getElementById(id);
  element.scrollIntoView({ behavior: "smooth" });
};

const ProfileCard = ({ title, description, link, src }) => (
  <article className="no-padding s12 m6 l4">
    <img className="responsive small" src={src} />
    <div className="padding">
      <h5>{title}</h5>
      <p>{description}</p>
      <nav>
        <Link to={link} className="primary button small-round">
          View Project
        </Link>
      </nav>
    </div>
  </article>
);

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
          <div className="s12 m6 l4">
            <h5>
              <i className="fab fa-redhat" /> Red Hat
            </h5>
            <p>
              Red Hat OpenShift on AWS (ROSA), Microsoft Azure Red Hat OpenShift
              (ARO), Redhat OpenShift AI, Kubernetes, Podman, Argo, ArgoCD, Helm
              Charts, Operators, Istio, Terraform, Vault.
            </p>
          </div>
          <div className="s12 m6 l4">
            <h5>
              <i className="fab fa-microsoft" /> Azure
            </h5>
            <p>
              GitHub Actions, Azure Functions, Azure Kubernetes Service (AKS),
              Azure API Management, Azure SQL, Cosmos DB, Redis Cache, Azure
              Active Directory (Entra), Azure App Services, Azure Logic Apps.
            </p>
          </div>

          <div className="s12 m6 l4">
            <h5>
              <i className="fab fa-aws" /> Amazon
            </h5>
            <p>
              AWS Lambda, API Gateway, DynamoDB, S3, RDS, CloudFormation,
              CloudWatch, IAM, Cognito, SNS, SQS, Step Functions, Amplify, Code
              Build.
            </p>
          </div>
          <div className="s12 m6 l4">
            <h5>
              <i className="fa fa-lg fa-code" /> Code
            </h5>
            <p>
              JavaScript, TypeScript, Golang, Python, C#, Java, PHP, HTML, CSS,
              SCSS, Less, PowerShell, Bash. Node, React, Vue, Svelte, Express,
              NestJS, NextJS, GraphQL, Webpack, Babel, Jest, Veet, Cypress.
            </p>
          </div>
          <div className="s12 m6 l4">
            <h5 className="sub-heading">
              <i className="fa fa-lg fa-database" /> Database
            </h5>
            <p>
              SQL Server, MySQL, PostgreSQL, Oracle, MongoDB, Cosmos DB, Redis
              Cache, DynamoDB, SQLite, Firebase, Firestore.
            </p>
          </div>

          <div className="s12 m6 l4">
            <h5>
              <i className="fa fa-lg fa-cloud" /> API
            </h5>
            <p>
              REST, GraphQL, gRPC, SOAP, WebSockets, Serverless, Microservices,
              Nignx, API Gateway, Swagger, OpenAPI, Postman. Go, Node, Expres,
              NestJS, .NET Core, Spring Boot.
            </p>
          </div>
        </div>

        <div className="small-space" />
        <div className="medium-margin">
          <h2 id="featured-projects">Featured Projects</h2>
          <div className="small-space" />
          <div className="grid">
            <ProfileCard
              title="Ford Configuration"
              description="Advanced vehicle configuration platform for Ford Engineers"
              link="/ford"
              src="ford-config.png"
            />
            <ProfileCard
              title="T-Mobile Nessie"
              description="Change control and governance for T-Mobile Network devices"
              link="/tmobile"
              src="t-mobile-nessie.png"
            />
            <ProfileCard
              title="Bluetooth Qualification"
              description="Device certification platform for Bluetooth SIG Qualification"
              link="/bluetooth"
              src="bluetooth-launchstudio.png"
            />
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default Profile;
