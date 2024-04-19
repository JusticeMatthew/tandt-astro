export default function LargeCategoryLink({ src, title, alt }) {
  return (
    <div className="relative flex justify-end w-screen cursor-pointer h-1/4 group overflow-y-clip">
      <div className="z-10 flex items-center w-1/2 h-full shadow bg-glass/30 backdrop-blur-md">
        <p className="text-6xl max-w-[43.75rem] font-barlow ml-24">{title}</p>
        <img
          src="icons/arrow-up-right.svg"
          alt=""
          className="w-12 h-12 mt-2 ml-4 transition-opacity duration-300 opacity-0 group-hover:opacity-100"
        />
      </div>
      <img
        src={src}
        alt={alt}
        className="absolute place-self-center transition-transform duration-1000 ease-out group-hover:scale-110"
      />
    </div>
  );
}
