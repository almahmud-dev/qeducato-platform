export const nationalities = [
  "Bangladeshi",
  "Indian",
  "Pakistani",
  "Nepali",
  "Sri Lankan",
  "Bhutanese",
  "Malaysian",
  "Indonesian",
  "Other",
];

export const programs = [
  { value: "bsc-cse", label: "B.Sc. in Computer Science & Engineering" },
  { value: "bba", label: "Bachelor of Business Administration (BBA)" },
  { value: "llb", label: "LL.B. (Honours)" },
  { value: "bsc-eee", label: "B.Sc. in Electrical & Electronic Engineering" },
  { value: "bpharm", label: "B.Pharm" },
  { value: "barch", label: "B.Arch" },
  { value: "ba-eng", label: "BA in English" },
  { value: "mba", label: "Master of Business Administration (MBA)" },
  { value: "msc-cse", label: "M.Sc. in Computer Science & Engineering" },
];

export const intakes = [
  "Spring 2026",
  "Summer 2026",
  "Fall 2026",
  "Spring 2027",
];

export const campuses = [
  { value: "main", label: "Main Campus, Dhaka" },
  { value: "north", label: "North Campus, Gazipur" },
  { value: "online", label: "Online Campus" },
];

export const studyModes = ["Full-Time", "Part-Time", "Evening", "Online"];

export const qualifications = [
  "SSC / O-Level",
  "HSC / A-Level",
  "Diploma",
  "Bachelor's Degree",
  "Master's Degree",
  "Other",
];

export const graduationYears = Array.from({ length: 12 }, (_, i) =>
  String(new Date().getFullYear() + 1 - i),
);

export const scholarshipTypes = [
  "Merit-Based Scholarship",
  "Need-Based Scholarship",
  "Sports Scholarship",
  "Talent Hunt Scholarship",
  "Freedom Fighter Quota",
  "Sibling / Alumni Discount",
];

export const familyIncomeRanges = [
  "Below BDT 20,000 / month",
  "BDT 20,000 – 50,000 / month",
  "BDT 50,000 – 1,00,000 / month",
  "Above BDT 1,00,000 / month",
];

export const requiredDocuments = [
  {
    key: "passportPhoto",
    label: "Passport-size Photo",
    hint: "Recent, white background · JPG or PNG",
    accept: "image/jpeg,image/png",
    optional: false,
  },
  {
    key: "transcript",
    label: "Academic Transcript",
    hint: "Latest mark-sheet or transcript · PDF",
    accept: "application/pdf",
    optional: false,
  },
  {
    key: "certificate",
    label: "Certificate",
    hint: "SSC / HSC / Bachelor's certificate · PDF",
    accept: "application/pdf",
    optional: false,
  },
  {
    key: "passportOrNid",
    label: "Passport / NID",
    hint: "Valid national ID or passport · PDF or image",
    accept: "application/pdf,image/jpeg,image/png",
    optional: false,
  },
  {
    key: "recommendationLetter",
    label: "Recommendation Letter",
    hint: "From a teacher or employer · PDF (optional)",
    accept: "application/pdf",
    optional: true,
  },
];

export const STEP_TITLES = [
  "Personal Information",
  "Program Selection",
  "Academic Qualification",
  "Upload Documents",
  "Scholarship Application",
  "Review & Submit",
];

export const STEP_SUBTITLES = [
  "Let's start with a few details about you",
  "Tell us what and where you'd like to study",
  "Your academic background so far",
  "Attach the required documents",
  "Financial aid — completely optional",
  "Check everything before you send it in",
];

export const initialApplyFormData = {
  personal: {
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    nationality: "",
    dob: "",
  },
  program: {
    program: "",
    intake: "",
    campus: "",
    studyMode: "",
  },
  academic: {
    qualification: "",
    institution: "",
    gpa: "",
    graduationYear: "",
  },
  documents: {
    passportPhoto: null,
    transcript: null,
    certificate: null,
    passportOrNid: null,
    recommendationLetter: null,
  },
  scholarship: {
    applying: "",
    type: "",
    essay: "",
    familyIncome: "",
  },
  agreeTerms: false,
};
