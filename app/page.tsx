import { Header } from "@/components/header";
import { Hero } from "@/components/hero";
import { Services } from "@/components/services";
import { TrustedBy } from "@/components/trusted-by";
import { Portfolio } from "@/components/portfolio";
import { Testimonials } from "@/components/testimonials";
import { About } from "@/components/about";
import { Contact } from "@/components/contact";
import { Footer } from "@/components/footer";
import { ActivityPopup } from "@/components/activity-popup";

export const metadata = {
  title: "ADIGUN MEDIA - Creative Design & Media Solutions",
  description:
    "Delta-based creative studio delivering world-class design, video production, photography, and branding solutions. Transform your brand with ADIGUN MEDIA.",
  keywords:
    "creative design, video production, photography, branding, web design, motion graphics, Delta, Nigeria",
  authors: [{ name: "ADIGUN MEDIA" }],
  openGraph: {
    title: "ADIGUN MEDIA - Creative Design & Media Solutions",
    description: "Transform your brand with world-class creative solutions",
    type: "website",
  },
};

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      <main>
        <Hero />
        <Services />
        <TrustedBy />
        <Portfolio />
        <Testimonials />
        <About />
        <Contact />
      </main>
      <Footer />
      <ActivityPopup />
    </div>
  );
}
