import { ElegantNavbar } from "@/components/ElegantNavbar";
import { ElevatedHero } from "@/components/ElevatedHero";
import { MinimalServices } from "@/components/MinimalServices";
import { StudioGallery } from "@/components/StudioGallery";
import { ContactSuite } from "@/components/ContactSuite";
import { SignatureFooter } from "@/components/SignatureFooter";
import { WhatsAppButton } from "@/components/WhatsAppButton";

export default function Home() {
  return (
    <main className="min-h-screen bg-dark flex flex-col gap-20 md:gap-32 pb-20">
      <ElegantNavbar />
      <ElevatedHero />
      <div className="fine-line mx-20" />
      <MinimalServices />
      <div className="fine-line mx-20" />
      <StudioGallery />
      <div className="fine-line mx-20" />
      <ContactSuite />
      <div className="fine-line mx-20" />
      <SignatureFooter />
      <WhatsAppButton />
    </main>
  );
}
