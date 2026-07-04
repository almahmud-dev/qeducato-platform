import {
  LuCheck,
  LuGraduationCap,
  LuHouse,
  LuBookOpen,
  LuFlaskConical,
  LuBriefcase,
} from "react-icons/lu";
import Container from "../ui/Container";
import {
  eligibilityCriteria,
  scholarshipBenefits,
} from "@/helper/scholarships/scholarshipsData";

const benefitIconMap = {
  LuGraduationCap,
  LuHouse,
  LuBookOpen,
  LuFlaskConical,
  LuBriefcase,
};

function EligibilityBenefits() {
  return (
    <section className="bg-surface py-16 md:py-20">
      <Container size="xl">
        <div className="grid gap-10 md:grid-cols-2 md:gap-14">
          <div>
            <h2 className="headingTwo text-foreground">Who Can Apply</h2>
            <ul className="mt-6 space-y-4">
              {eligibilityCriteria.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span className="mt-0.5 flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
                    <LuCheck className="h-4 w-4" aria-hidden="true" />
                  </span>
                  <span className="PeraTwo text-foreground">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="headingTwo text-foreground">Benefits</h2>
            <ul className="mt-6 space-y-4">
              {scholarshipBenefits.map((item) => {
                const Icon = benefitIconMap[item.icon];
                return (
                  <li
                    key={item.label}
                    className="flex items-center gap-3 rounded-xl border border-border bg-background px-4 py-3"
                  >
                    <span className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-lg bg-secondary/10 text-secondary">
                      <Icon className="h-5 w-5" aria-hidden="true" />
                    </span>
                    <span className="PeraTwo text-foreground">
                      {item.label}
                    </span>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </Container>
    </section>
  );
}

export default EligibilityBenefits;
