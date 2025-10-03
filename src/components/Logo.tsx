// Simple WebX logo component - wordmark + icon
const Logo = ({ className = "" }: { className?: string }) => {
  return (
    <div className={`flex items-center gap-2 ${className}`}>
      {/* Simple icon - code brackets */}
      <svg 
        width="24" 
        height="24" 
        viewBox="0 0 24 24" 
        fill="none" 
        className="text-accent"
        aria-hidden="true"
      >
        <path 
          d="M8 6L4 12L8 18M16 6L20 12L16 18" 
          stroke="currentColor" 
          strokeWidth="2" 
          strokeLinecap="round" 
          strokeLinejoin="round"
        />
      </svg>
      {/* Wordmark */}
      <span className="text-xl font-semibold tracking-tight">WebX</span>
    </div>
  );
};

export default Logo;
