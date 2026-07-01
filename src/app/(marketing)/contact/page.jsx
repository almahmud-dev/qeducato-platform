import PageHero, { heroDataMap } from "@/components/common/PageHero";
import { metaDataMap } from "@/lib/metadata";
import ContactInfo from "@/components/contact/ContactInfo";
import ContactMap from "@/components/contact/ContactMap";
import ContactForm from "@/components/contact/ContactForm";
import Container from "@/components/ui/Container";

export const metadata = metaDataMap.contact;

export default function Contact() {
  return (
    <>
      <PageHero {...heroDataMap.contact} />
      <Container>
        <ContactInfo />
      </Container>
      <ContactMap />
      
        <ContactForm />
      
    </>
  );
}