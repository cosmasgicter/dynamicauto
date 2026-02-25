export interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  centered?: boolean;
}

export default function SectionHeading({
  title,
  subtitle,
  centered = false,
}: SectionHeadingProps) {
  return (
    <div className={centered ? "text-center" : ""}>
      <h2 className="text-3xl font-bold text-das-navy tablet:text-4xl">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-3 text-lg text-das-gray-600">{subtitle}</p>
      )}
    </div>
  );
}
