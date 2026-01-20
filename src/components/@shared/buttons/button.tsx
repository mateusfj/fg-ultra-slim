interface ButtonProps {
  children: React.ReactNode;
}
export const Button = ({ children }: ButtonProps) => {
  return (
    <button className="w-full text-accent cursor-pointer md:w-auto px-12 py-5 bg-linear-to-r from-[#2DD4A1] to-primary font-extrabold uppercase text-sm rounded-full shadow-[0px_4px_15px_rgba(45,212,161,0.3)] hover:scale-105 transition-transform duration-300">
      {children}
    </button>
  );
};
