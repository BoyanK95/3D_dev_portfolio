const SocialMediaPointerButton = () => {
  return (
    <a href="#footer">
      <button className="text-lg group transition-all duration-300 hover:-translate-y-1 hover:text-blue-200 hover:text-xl">
        Write me on Social Media
        <svg
          className="w-10 h-10 transition-transform duration-300 group-hover:translate-y-1"
          fill="none"
          viewBox="0 0 18 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={3}
            d="M19 14l-7 7m0 0l-7-7m7 7V3"
          />
        </svg>
      </button>
    </a>
  );
};

export default SocialMediaPointerButton;
