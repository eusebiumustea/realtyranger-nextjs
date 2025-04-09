import classNames from "classnames";
import {
  DetailedHTMLProps,
  forwardRef,
  memo,
  Ref,
  SelectHTMLAttributes,
  TextareaHTMLAttributes
} from "react";
interface InputProps
  extends DetailedHTMLProps<
    React.InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  > {
  label?: string;
  component?: "input";
}
interface SelectProps
  extends DetailedHTMLProps<
    SelectHTMLAttributes<HTMLSelectElement>,
    HTMLSelectElement
  > {
  label?: string;
  component?: "select";
  options: string[];
}
interface TextAreaProps
  extends DetailedHTMLProps<
    TextareaHTMLAttributes<HTMLTextAreaElement>,
    HTMLTextAreaElement
  > {
  label?: string;
  component?: "textarea";
}
type InputType = InputProps | TextAreaProps | SelectProps;
export const Input = memo(
  forwardRef((inputProps: InputType, ref) => (
    <div className="w-full sm:w-auto">
      {inputProps?.label && (
        <h1 className="ml-2 mb-1 text-lg font-ptsans">{inputProps.label}</h1>
      )}
      {inputProps.component === "textarea" ? (
        <textarea
          ref={ref as Ref<HTMLTextAreaElement>}
          {...(inputProps as DetailedHTMLProps<
            TextareaHTMLAttributes<HTMLTextAreaElement>,
            HTMLTextAreaElement
          >)}
          className={classNames(
            "bg-white w-full hover:bg-slate-50 focus:bg-slate-50 cursor-pointer focus:cursor-text focus:shadow-none hover:shadow-none transition-all placeholder:text-[#555555] rounded-md placeholder:font-inter text-sm font-medium outline-none py-3 px-4 shadow",
            inputProps.className
          )}
        />
      ) : inputProps.component === "select" ? (
        <select
          ref={ref as Ref<HTMLSelectElement>}
          className="bg-white hover:bg-slate-50 focus:bg-slate-50 cursor-pointer focus:shadow-none hover:shadow-none transition-all placeholder:text-[#555555] rounded-md placeholder:font-inter text-sm font-medium outline-none py-3 px-4 shadow"
        >
          {inputProps.options.map((optionName, i) => (
            <option key={i}>{optionName}</option>
          ))}
        </select>
      ) : (
        <input
          ref={ref as Ref<HTMLInputElement>}
          {...(inputProps as DetailedHTMLProps<
            React.InputHTMLAttributes<HTMLInputElement>,
            HTMLInputElement
          >)}
          className={classNames(
            "bg-white w-full hover:bg-slate-50 focus:bg-slate-50 cursor-pointer focus:cursor-text focus:shadow-none hover:shadow-none transition-all rounded-full placeholder:text-[#555555] placeholder:font-inter text-sm font-medium outline-none py-3 px-4 shadow",
            inputProps.className
          )}
        />
      )}
    </div>
  ))
);
