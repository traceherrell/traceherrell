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
          <div className="s12 m6 l4">
            {/* <h5>
              <i className="fab fa-react" /> React
            </h5>
            <p>
              
            </p> */}
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
            {/* <h5>
              <i className="fab fa-vuejs" /> Vue
            </h5>
            <p>
              Introduced Bluetooth to Vue and led the adoption state management
              (Vuex) as a design pattern.
            </p> */}
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
            <div className="s12 m4">
              <div className="card">
                <div className="card-image">
                  <img src="ford-config.png" alt="Ford Configuration" />
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
                  <img src="t-mobile-nessie.png" alt="T-Mobile Nessie" />
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
                    src="bluetooth-launchstudio.png"
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
