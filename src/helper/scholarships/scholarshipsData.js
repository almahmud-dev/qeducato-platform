export const scholarshipSummary = [
  {
    id: "merit",
    icon: "LuTrophy",
    title: "Merit Scholarship",
    value: "Up to 100%",
  },
  { id: "need", icon: "LuCoins", title: "Need Based", value: "Up to 75%" },
  {
    id: "international",
    icon: "LuGlobe",
    title: "International",
    value: "Up to 50%",
  },
  { id: "sports", icon: "LuMedal", title: "Sports", value: "Special Award" },
];

export const eligibilityCriteria = [
  "Minimum GPA of 3.5 or equivalent",
  "Demonstrated leadership experience",
  "Active community service record",
  "Verified financial need",
  "English language proficiency (IELTS/TOEFL)",
];

export const scholarshipBenefits = [
  { icon: "LuGraduationCap", label: "100% Tuition Waiver" },
  { icon: "LuHouse", label: "On-Campus Accommodation" },
  { icon: "LuBookOpen", label: "Books & Study Materials" },
  { icon: "LuFlaskConical", label: "Research Grant" },
  { icon: "LuBriefcase", label: "Internship Placement" },
];

export const scholarshipTypeOptions = [
  { value: "merit", label: "Merit Scholarship" },
  { value: "need-based", label: "Need Based" },
  { value: "international", label: "International" },
  { value: "sports", label: "Sports" },
];

export const programOptions = [
  { value: "bba", label: "BBA" },
  { value: "cse", label: "CSE" },
  { value: "eee", label: "EEE" },
  { value: "english", label: "English" },
  { value: "law", label: "Law" },
];

export const academicYearOptions = [
  { value: "2026-2027", label: "2026 – 2027" },
  { value: "2027-2028", label: "2027 – 2028" },
];

export const intakeOptions = [
  { value: "spring", label: "Spring" },
  { value: "summer", label: "Summer" },
  { value: "fall", label: "Fall" },
];

export const documentRequirements = [
  {
    id: "transcript",
    label: "Transcript",
    description: "Latest official transcript",
    required: true,
    icon: "LuFileText",
  },
  {
    id: "certificates",
    label: "Certificates",
    description: "Academic/extracurricular certificates",
    required: true,
    icon: "LuAward",
  },
  {
    id: "incomeCertificate",
    label: "Income Certificate",
    description: "Required for need-based scholarship",
    required: false,
    icon: "LuReceipt",
  },
  {
    id: "recommendationLetter",
    label: "Recommendation Letter",
    description: "From teacher or employer",
    required: true,
    icon: "LuMail",
  },
  {
    id: "passportNid",
    label: "Passport/NID",
    description: "Valid identification document",
    required: true,
    icon: "LuCreditCard",
  },
  {
    id: "photo",
    label: "Photo",
    description: "Recent photograph, white background",
    required: true,
    icon: "LuImage",
  },
];

export const formSteps = [
  { id: 1, label: "Scholarship Type" },
  { id: 2, label: "Eligibility" },
  { id: 3, label: "Documents" },
  { id: 4, label: "Essay" },
  { id: 5, label: "Review & Submit" },
];
