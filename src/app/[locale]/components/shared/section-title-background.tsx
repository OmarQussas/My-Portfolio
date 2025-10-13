interface SectionTitleProps {
  title: string;
  icon: React.ElementType; // Accepts any icon component
  className?: string;
}

export function SectionTitle({
  title,
  icon: Icon,
  className,
}: SectionTitleProps) {
  return (
    <h2
      className={
        "text-h4 md:text-h3 lg:text-h2 text-white uppercase tracking-widest bg-primary-light flex justify-center items-center gap-2 lg:gap-4  py-2 dark:bg-primary font-semibold mb-10 text-center"
      }
    >
      <Icon size={40} /> {title}
    </h2>
  );
}
