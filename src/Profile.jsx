import { useRef } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";

import profile from "/herrell_trace_profile.jpg";

function Profile() {
  return (
    <>
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
              <button style={{ marginLeft: 0 }} className="primary small-round">
                Read More
              </button>
              <div className="small-space" />
            </div>
          </div>
        </div>
        <div className="medium-space" />

        <div className="medium-margin large-text">
          <div id="about-me">
            I am a full-stack software engineer and cloud architect with over 20
            years of experience in the industry. Consistently delivers scalable,
            secure, and performant solutions while leading and mentoring
            high-performing development teams. Proven track record of improving
            deployment efficiency, infrastructure automation, and application
            modernization for Fortune 500 clients, including{" "}
            <a
              className="bold underline"
              target="_blank"
              href="https://www.bluetooth.org"
            >
              Bluetooth SIG
            </a>
            ,{" "}
            <a
              className="bold underline"
              target="_blank"
              href="https://www.t-mobile.com"
            >
              T-Mobile
            </a>
            ,{" "}
            <a
              className="bold underline"
              target="_blank"
              href="https://www.adobe.com"
            >
              Adobe
            </a>
            ,{" "}
            <a
              className="bold underline"
              target="_blank"
              href="https://www.redhat.com"
            >
              RedHat
            </a>
            ,{" "}
            <a
              className="bold underline"
              target="_blank"
              href="https://www.johnlscott.com"
            >
              John L Scott
            </a>
            , and{" "}
            <a
              className="bold underline"
              target="_blank"
              href="https://www.seattlechildrens.org"
            >
              Children's Hospital
            </a>
            .
          </div>
          <div className="small-space" />
          <div className="">
            I can help you with a wide range of services, including:
          </div>
          <div className="large-margin">
            <div className="row">
              <i>terminal</i>Software development
            </div>
            <div className="row">
              <i>cloud</i>Cloud migration
            </div>
            <div className="row">
              <i>security</i>Security and compliance
            </div>
            <div className="row">
              <i>manage_accounts</i>Managed services
            </div>
          </div>

          <p>
            I am passionate about helping small businesses succeed. I understand
            the challenges that you face and I am committed to providing you
            with the resources you need to succeed. Contact me today for a free
            consultation. I will assess your needs and develop a custom plan to
            help you achieve your goals.
          </p>

          <div className="small-space" />
          <div>
            Here are some additional details about each of the services I can
            offer:
          </div>

          <ul className="large-margin">
            <li className="small-padding">
              Software development: I can help you develop custom software
              applications to meet your specific needs. I have experience with a
              variety of programming languages and technologies, including
              JavaScript, Python, Rust, and .NET C#.
            </li>
            <li className="small-padding">
              Cloud migration: I can help you migrate your existing applications
              to the cloud. I have experience with a variety of cloud platforms,
              including Amazon Web Services (AWS), Microsoft Azure, and Google
              Cloud Platform (GCP).
            </li>
            <li className="small-padding">
              Security and compliance: I can help you assess your security
              posture and implement security controls. I have experience with a
              variety of security standards, including PCI DSS, HIPAA, and SOX.
            </li>
            <li className="small-padding">
              Managed services: I can provide managed services by handling tasks
              such as system administration, network administration, and
              disaster recovery. I have experience with a variety of IT
              infrastructure, including servers, storage, and networking.
            </li>
          </ul>
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
      </div>
    </>
  );
}

export default Profile;
