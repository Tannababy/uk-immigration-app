import type { ImmigrationRoutes } from "../types/ImmigrationRoutes";

const MOCK_DATA: ImmigrationRoutes[] = [
  {
    id: "skilled-worker",
    title: "Skilled Worker Visa",
    description:
      "Information regarding the Skilled Worker visa route, eligibility, and requirements for sponsorship.",
    learnMoreLink: "https://www.gov.uk/skilled-worker-visa",
  },
  {
    id: "spouse-visa",
    title: "Spouse/Partner Visa",
    description:
      "Details on applying for a visa as a spouse or partner of a British citizen or settled person.",
    learnMoreLink: "https://www.gov.uk/uk-family-visa/partner-child-visa",
  },
  {
    id: "long-residence",
    title: "Long Residence ILR",
    description:
      "Information about applying for indefinite leave to remain based on 10 years long residence in the UK.",
    learnMoreLink:
      "https://www.gov.uk/indefinite-leave-to-remain/long-residence",
  }
];

export async function fetchAllImmigrationRoutesMock(): Promise<
  ImmigrationRoutes[]
> {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(MOCK_DATA);
    }, 700); // Simulate network delay
  });
}

