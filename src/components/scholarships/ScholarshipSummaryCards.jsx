import { LuTrophy, LuCoins, LuGlobe, LuMedal } from "react-icons/lu";
import { scholarshipSummary } from "@/helper/scholarships/scholarshipsData";
import Container from "../ui/Container";

const iconMap = { LuTrophy, LuCoins, LuGlobe, LuMedal };

function ScholarshipSummaryCards() {
  return (
    <section className="py-16 md:py-20">
      <Container size="xl">
        <div className="grid grid-cols-2 gap-4 md:grid-cols-4 md:gap-6">
          {scholarshipSummary.map((item) => {
            const Icon = iconMap[item.icon];
            return (
              <div
                key={item.id}
                className="group rounded-2xl border border-border bg-background p-6 text-center shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 hover:shadow-lg"
              >
                <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-xl bg-primary/10 text-primary transition-colors duration-300 group-hover:bg-primary group-hover:text-white">
                  <Icon className="h-7 w-7" aria-hidden="true" />
                </div>
                <h3 className="headingSix text-foreground">{item.title}</h3>
                <p className="mt-1 text-lg font-semibold text-secondary">
                  {item.value}
                </p>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}

export default ScholarshipSummaryCards;
