import Link from "next/link";
import ImageWithFallback from "@/components/ui/ImageWithFallback";

export interface ServiceCardProps {
  title: string;
  description: string;
  image: string;
  href: string;
  icon?: React.ReactNode;
}

export default function ServiceCard({
  title,
  description,
  image,
  href,
  icon,
}: ServiceCardProps) {
  return (
    <Link
      href={href}
      className="group block overflow-hidden rounded-xl bg-white shadow-md transition-shadow duration-300 hover:shadow-xl"
    >
      <div className="relative aspect-video overflow-hidden">
        <ImageWithFallback
          src={image}
          alt={title}
          width={600}
          height={338}
          className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
          sizes="(max-width: 767px) 100vw, (max-width: 1023px) 50vw, 33vw"
        />
      </div>
      <div className="p-5">
        {icon && <div className="mb-2 text-das-accent">{icon}</div>}
        <h3 className="text-lg font-semibold text-das-navy">{title}</h3>
        <p className="mt-2 text-sm text-das-gray-600 leading-relaxed">
          {description}
        </p>
        <span className="mt-3 inline-block text-sm font-medium text-das-accent group-hover:underline">
          Learn More →
        </span>
      </div>
    </Link>
  );
}
