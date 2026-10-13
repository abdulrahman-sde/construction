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

  if (!service) {
    return {
      title: "Service Not Found | Buildcraft360",
    };
  }

  return {
    title: `${service.title} | Buildcraft360`,
    description: service.metaDescription,
    openGraph: {
      title: `${service.title} | Buildcraft360`,
      description: service.metaDescription,
      type: "website",
    },
  };
}

export default async function ServiceSlugPage({ params }: ServicePageProps) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);

  if (!service) {
    notFound();
  }

  return <ServiceLayout service={service} />;
}
