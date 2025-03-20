export function Input(
  inputProps: React.DetailedHTMLProps<
    React.InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  >
) {
  return (
    <input
      className="bg-white w-full sm:w-auto hover:bg-slate-50 focus:bg-slate-50 cursor-pointer focus:cursor-text focus:shadow-none hover:shadow-none transition-all rounded-full placeholder:text-[#555555] placeholder:font-inter text-sm font-medium outline-none py-3 px-4 shadow"
      {...inputProps}
    />
  );
}
