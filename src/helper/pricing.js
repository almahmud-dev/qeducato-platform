const pricing = [
  {
    id: 1,
    plan: "Basic",
    price: 299,
    period: "per semester",
    color: "gray",
    features: [
      "Access to 5 courses",
      "Basic learning materials",
      "Community forum access",
      "Email support",
      "Certificate of completion",
    ],
    notIncluded: [
      "Live mentorship sessions",
      "Career counseling",
      "Scholarship eligibility",
    ],
  },
  {
    id: 2,
    plan: "Standard",
    price: 599,
    period: "per semester",
    color: "orange",
    popular: true,
    features: [
      "Access to 20 courses",
      "Full learning materials",
      "Community forum access",
      "Priority email support",
      "Certificate of completion",
      "2 live mentorship sessions/month",
      "Career counseling",
    ],
    notIncluded: ["Scholarship eligibility"],
  },
  {
    id: 3,
    plan: "Premium",
    price: 999,
    period: "per semester",
    color: "dark",
    features: [
      "Unlimited course access",
      "Full learning materials",
      "Community forum access",
      "24/7 priority support",
      "Certificate of completion",
      "Unlimited mentorship sessions",
      "Career counseling",
      "Scholarship eligibility",
    ],
    notIncluded: [],
  },
];

export default pricing;
