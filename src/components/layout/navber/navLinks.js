export const navLinks = [
  {
    label: "Home",
    href: "/",
  },

  {
    label: "About",
    href: "/about",
  },

  {
    label: "Courses",
    children: [
      {
        label: "Courses 01",
        href: "/courses",
      },
      {
        label: "Courses 02",
        href: "/courses/page-2",
      },
    ],
  },

  {
    label: "Pages",
    children: [
      {
        label: "Events",
        href: "/events",
      },
      {
        label: "Gallery",
        href: "/gallery",
      },
      {
        label: "Pricing",
        href: "/pricing",
      },
      {
        label: "FAQ",
        href: "/faq",
      },
      {
        label: "Teachers",
        href: "/teachers",
      },
    ],
  },

  {
    label: "Blog",
    children: [
      {
        label: "Blog",
        href: "/blog",
      },
    ],
  },

  {
    label: "Contact",
    href: "/contact",
  },
];
