import Image from "next/image";
import Container from "@/components/ui/Container";
import { partnersData } from "@/helper/teachers/partnersData";

export default function PartnersStrip() {
  return (
    <section className="bg-[#125875] py-10">
      <Container size="xl">
        <div className="flex flex-wrap items-center justify-center gap-10 md:gap-16 lg:justify-between">
          {partnersData.map((partner) => (
            <div
              key={partner.id}
              className="relative h-8 w-32 opacity-80 hover:opacity-100 transition-opacity duration-200"
            >
              <Image
                src={partner.logo}
                alt={partner.name}
                fill
                className="object-contain"
                sizes="128px"
              />
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
