import { SearchIcon, SettingsIcon } from "../assets";
import { SecoundaryButton } from "../button";
import { Input } from "../input";

export function FilterSection() {
  return (
    <div className="p-8 w-full 2sm:w-auto flex flex-col sm:grid sm:grid-cols-2 lg:flex lg:flex-row justify-center items-center bg-opacity-35 bg-white gap-6">
      <Input placeholder="Category" />
      <Input placeholder="Location" />
      <SecoundaryButton icon={<SettingsIcon />}>Advanced</SecoundaryButton>
      <SecoundaryButton icon={<SearchIcon />}>Search Property</SecoundaryButton>
    </div>
  );
}
