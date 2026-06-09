import SectionReveal from "./SectionReveal";

interface ScrollDividerProps {
  className?: string;
}

export default function ScrollDivider({ className }: ScrollDividerProps) {
  return (
    <SectionReveal direction="scale" className={className}>
      <div className="py-8 flex items-center justify-center">
        <div className="w-full max-w-2xl mx-auto h-px bg-gradient-to-r from-transparent via-gold/50 to-transparent" />
        <div className="mx-4 flex-shrink-0">
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            className="text-gold"
          >
            <path
              d="M12 2L14.5 9H22L16 13.5L18.5 21L12 16.5L5.5 21L8 13.5L2 9H9.5L12 2Z"
              fill="currentColor"
              opacity="0.6"
            />
          </svg>
        </div>
        <div className="w-full max-w-2xl mx-auto h-px bg-gradient-to-r from-transparent via-gold/50 to-transparent" />
      </div>
    </SectionReveal>
  );
}