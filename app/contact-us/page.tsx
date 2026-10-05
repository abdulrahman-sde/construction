import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import MinimalContactSection from "@/components/contact/MinimalContactSection";

export const metadata: Metadata = {
  title: "Contact Us | Buildcraft360",
  description:
    "Get in touch with Buildcraft360. Send us a message or connect directly via email and LinkedIn.",
};

export default function ContactUsPage() {
  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground">
      {/* Global Navigation */}
      <Header />

      {/* Minimal Contact Section */}
      <main className="flex-1 flex items-center justify-center py-14 sm:py-20 md:py-24 px-4 sm:px-6 lg:px-8">
        <MinimalContactSection />
      </main>

      {/* Global Footer */}
      <Footer />
    </div>
  );
}
