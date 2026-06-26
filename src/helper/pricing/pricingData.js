// Pricing page - all data lives here
// Plans, features, FAQs, trust metrics - everything from one place

import {
  FiUsers,
  FiCalendar,
  FiFileText,
  FiBarChart2,
  FiSmartphone,
  FiBook,
  FiTrendingUp,
  FiGlobe,
  FiCode,
  FiLayout,
  FiShield,
  FiUserCheck,
} from "react-icons/fi";

// ─── Plans ────────────────────────────────────────────────────────────────────
export const plans = [
  {
    id: "starter",
    name: "Starter",
    tagline: "Perfect for small madrashas getting started",
    monthlyPrice: 29,
    yearlyPrice: 23,
    currency: "৳",
    billingNote: "per month, billed monthly",
    billingNoteYearly: "per month, billed yearly",
    savingsPercent: 20,
    popular: false,
    cta: "Get Started Free",
    ctaVariant: "outline", // outline | solid | gradient
    accentColor: "slate",
    features: [
      { text: "Up to 200 students", included: true },
      { text: "Attendance tracking", included: true },
      { text: "Basic exam management", included: true },
      { text: "Result generation", included: true },
      { text: "Parent SMS alerts", included: true },
      { text: "1 branch / campus", included: true },
      { text: "Email support", included: true },
      { text: "Parent portal", included: false },
      { text: "Advanced analytics", included: false },
      { text: "Multi-campus", included: false },
      { text: "API access", included: false },
      { text: "Custom branding", included: false },
    ],
  },
  {
    id: "growth",
    name: "Growth",
    tagline: "For growing institutions that need more power",
    monthlyPrice: 79,
    yearlyPrice: 63,
    currency: "৳",
    billingNote: "per month, billed monthly",
    billingNoteYearly: "per month, billed yearly",
    savingsPercent: 20,
    popular: true,
    cta: "Start 14-day Trial",
    ctaVariant: "gradient",
    accentColor: "orange",
    features: [
      { text: "Up to 1,000 students", included: true },
      { text: "Attendance tracking", included: true },
      { text: "Advanced exam management", included: true },
      { text: "Result generation & reports", included: true },
      { text: "Parent SMS + email alerts", included: true },
      { text: "Up to 3 campuses", included: true },
      { text: "Priority email & chat support", included: true },
      { text: "Parent portal", included: true },
      { text: "Advanced analytics", included: true },
      { text: "Teacher portal", included: true },
      { text: "API access", included: false },
      { text: "Custom branding", included: false },
    ],
  },
  {
    id: "enterprise",
    name: "Enterprise",
    tagline: "Custom solution for large institutions & networks",
    monthlyPrice: null, // custom
    yearlyPrice: null,
    currency: null,
    billingNote: "Custom pricing",
    billingNoteYearly: "Custom pricing",
    savingsPercent: null,
    popular: false,
    cta: "Contact Sales",
    ctaVariant: "dark",
    accentColor: "teal",
    features: [
      { text: "Unlimited students", included: true },
      { text: "Attendance tracking", included: true },
      { text: "Full exam suite", included: true },
      { text: "Custom result templates", included: true },
      { text: "All communication channels", included: true },
      { text: "Unlimited campuses", included: true },
      { text: "Dedicated account manager", included: true },
      { text: "Parent portal", included: true },
      { text: "Advanced analytics + BI", included: true },
      { text: "Teacher portal", included: true },
      { text: "Full API access", included: true },
      { text: "Custom branding + SSO", included: true },
    ],
  },
];

// ─── Comparison Features ──────────────────────────────────────────────────────
export const comparisonCategories = [
  {
    category: "Core Management",
    icon: FiUsers,
    features: [
      {
        label: "Student Management",
        starter: true,
        growth: true,
        enterprise: true,
      },
      {
        label: "Attendance Tracking",
        starter: true,
        growth: true,
        enterprise: true,
      },
      {
        label: "Exam Management",
        starter: "Basic",
        growth: "Advanced",
        enterprise: "Full Suite",
      },
      {
        label: "Result Generation",
        starter: true,
        growth: true,
        enterprise: "Custom Templates",
      },
    ],
  },
  {
    category: "Communication",
    icon: FiSmartphone,
    features: [
      {
        label: "Parent Portal",
        starter: false,
        growth: true,
        enterprise: true,
      },
      {
        label: "Teacher Portal",
        starter: false,
        growth: true,
        enterprise: true,
      },
      {
        label: "SMS Notifications",
        starter: true,
        growth: true,
        enterprise: true,
      },
      {
        label: "Email Notifications",
        starter: false,
        growth: true,
        enterprise: true,
      },
    ],
  },
  {
    category: "Analytics & Reporting",
    icon: FiTrendingUp,
    features: [
      {
        label: "Basic Reports",
        starter: true,
        growth: true,
        enterprise: true,
      },
      {
        label: "Advanced Analytics",
        starter: false,
        growth: true,
        enterprise: true,
      },
      {
        label: "BI Dashboard",
        starter: false,
        growth: false,
        enterprise: true,
      },
      {
        label: "Export to Excel/PDF",
        starter: true,
        growth: true,
        enterprise: true,
      },
    ],
  },
  {
    category: "Scale & Integration",
    icon: FiGlobe,
    features: [
      {
        label: "Campuses",
        starter: "1",
        growth: "Up to 3",
        enterprise: "Unlimited",
      },
      {
        label: "Student Limit",
        starter: "200",
        growth: "1,000",
        enterprise: "Unlimited",
      },
      {
        label: "API Access",
        starter: false,
        growth: false,
        enterprise: true,
      },
      {
        label: "Custom Branding",
        starter: false,
        growth: false,
        enterprise: true,
      },
      { label: "SSO / SAML", starter: false, growth: false, enterprise: true },
      {
        label: "Dedicated Manager",
        starter: false,
        growth: false,
        enterprise: true,
      },
    ],
  },
  {
    category: "Support",
    icon: FiUserCheck,
    features: [
      {
        label: "Email Support",
        starter: true,
        growth: true,
        enterprise: true,
      },
      {
        label: "Live Chat",
        starter: false,
        growth: true,
        enterprise: true,
      },
      {
        label: "Phone Support",
        starter: false,
        growth: false,
        enterprise: true,
      },
      {
        label: "Onboarding Assistance",
        starter: false,
        growth: true,
        enterprise: "White-glove",
      },
      {
        label: "Data Migration",
        starter: false,
        growth: true,
        enterprise: true,
      },
    ],
  },
];

// ─── Trust Metrics 
export const trustMetrics = [
  { value: "500+", label: "Institutions", sublabel: "across Bangladesh" },
  { value: "50K+", label: "Students", sublabel: "actively managed" },
  { value: "99.9%", label: "Uptime", sublabel: "guaranteed SLA" },
  { value: "24/7", label: "Support", sublabel: "always available" },
];
