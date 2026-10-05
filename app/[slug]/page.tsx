import { notFound } from "next/navigation";
import type { Metadata } from "next";
import ServiceLayout from "@/components/services/ServiceLayout";
import { getServiceBySlug, getAllServiceSlugs } from "@/lib/services-data";

interface ServicePageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return getAllServiceSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: ServicePageProps): Promise<Metadata> {
  const { slug } = await params;
  const service = getServiceBySlug(slug);

  if (service) {
    return {
      title: `${service.title} | Construct Estimates`,
      description: service.metaDescription,
      openGraph: {
        title: `${service.title} | Construct Estimates`,
        description: service.metaDescription,
        type: "website",
      },
    };
  }

  return {
    title: "Page Not Found | Construct Estimates",
  };
}

export default async function ServicePage({ params }: ServicePageProps) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);

  if (service) {
    return <ServiceLayout service={service} />;
  }

  notFound();
}
