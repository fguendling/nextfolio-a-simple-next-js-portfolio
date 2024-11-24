export interface Project {
  title: string;
  year: number;
  description: string;
  url: string;
}

export const projects: Project[] = [
  {
    title: "DevOps Engineer, for a client in the telecommunication sector",
    year: 2024,
    description:
      "Introducing and improving automated solutions based on DevOps best practices. The project is about an element management system (EMS), which runs on Linux servers in multiple regions in an on-premises setup.",
    url: "https://example.com/",
  },
  {
    title: "DevOps Engineer, for a client in the pharmaceutical industry",
    year: 2023,
    description:
      "This project was about operating and evolving the existing Google Cloud environment of the client. The project required working with Google Cloud Platform (GCP) and multiple products within GCP (such as Cloud Functions, IAM, Google Workflows, Pub/Sub, Cloud Endpoints, Deployment Manager), Terraform, Linux (Bash), GitHub (including GitHub Actions), Gitlab, YAML, Python. The overall objective was to automate as much as possible and improve reliability of a so called project builder, which is used to generate new GCP projects for end users",
    url: "https://example.com/",
  },
  {
    title: "DevOps Engineer, for a client in the energy industry",
    year: 2021,
    description:
      "The project started with an analysis of the client's requirements regarding their planned cloud migration and landing zone design on the Google Cloud Platform. We were responsible for the development of technical design documents that describe the cloud architecture. I implemented parts of the actual the cloud foundation on the Google Cloud Platform, by using Terraform and Jenkins. Content-wise, the focus was on VPCs, setup of an entire organization in GCP, setup of IAM, preparation of application migrations and deployments, as well as implementation of best practices on the Google Cloud Platform, such as logging and monitoring via built-in solutions.",
    url: "https://example.com/",
  },
];
