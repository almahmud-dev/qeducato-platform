"use client";

import { useState } from "react";
import FAQCategories from "./FAQCategories";
import FAQAccordion from "./FAQAccordion";
import FAQContactCard from "./FAQContactCard";
import Container from "../ui/Container";
import { faqCategories, faqItems } from "@/helper/faq/faqData";
import SectionHeader from "../common/SectionHeader";

export default function FAQSection() {
  const [activeCategory, setActiveCategory] = useState("general");
  const [openId, setOpenId] = useState(faqItems["general"][0]?.id ?? null);

  // Category change kole first item open hobe
  const handleCategorySelect = (categoryId) => {
    setActiveCategory(categoryId);
    setOpenId(faqItems[categoryId]?.[0]?.id ?? null);
  };

  // Same item click kole close, noya item click kole open
  const handleToggle = (id) => {
    setOpenId((prev) => (prev === id ? null : id));
  };

  const currentItems = faqItems[activeCategory] ?? [];

  return (
    <section
      aria-labelledby="faq-section-heading"
      className="pt-16 md:pt-20 lg:pt-24"
    >
      <Container size="xl">
        {/* Section heading */}
          <SectionHeader
            label="Our Support"
            text="FAQ Categories"
            colorWord="Categories"
          />

        {/* Layout: sidebar + accordion */}
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-10 xl:gap-14">
          {/* Left sidebar */}
          <aside
            className="lg:w-64 xl:w-72 shrink-0"
            aria-label="FAQ category navigation"
          >
            <FAQCategories
              categories={faqCategories}
              activeCategory={activeCategory}
              onSelect={handleCategorySelect}
            />
            {/* Contact card — lg+ e sidebar e thakbe */}
            <div className="hidden lg:block">
              <FAQContactCard />
            </div>
          </aside>

          {/* Right accordion */}
          <div className="flex-1 min-w-0">
            <FAQAccordion
              items={currentItems}
              openId={openId}
              onToggle={handleToggle}
            />
          </div>
        </div>

        {/* Contact card — mobile e niche thakbe */}
        <div className="lg:hidden mt-8">
          <FAQContactCard />
        </div>
      </Container>
    </section>
  );
}
