export type Certification = {
  name: string;
  organization: string;
  date: string;
  mark: string;
  certificateUrl: string;
};

export const certifications: Certification[] = [
  {
    name: "ISTQB Certified Tester Foundation Level (CTFL)",
    organization:
      "International Software Testing Qualifications Board (ISTQB)",
    date: "12/01/2025",
    mark: "ISTQB",
    certificateUrl:
      "https://drive.google.com/file/d/14UXo5cgimwVqcRs30DyfNeUz7uiVNzjr/view",
  },
  {
    name: "Stellar Local Volunteer - NASA 2022",
    organization: "NASA Space Apps Challenge",
    date: "01/10/2022",
    mark: "NASA",
    certificateUrl:
      "https://drive.google.com/file/d/1GdVzvngly-PZRdOYAL3BeTCICFTBl7PA/view",
  },
];