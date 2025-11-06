import { Dropdown } from "./Dropdown";
import { Header } from "./Header";

const topics = ["tailwind-css", "react"];
const questions = ["jit-compilation", "purge-files", "dark-mode"];
const random = ["variants", "plugins"];

export const ChannelBar = () => {
  return (
    <section className="w-80 h-auto bg-gray-200 dark:bg-[#2b2d31] hidden md:block">
      <Header></Header>
      <div className="flex flex-col items-center justify-start p-1">
        <Dropdown header="Topics" selections={topics}></Dropdown>
        <Dropdown header="Questions" selections={questions}></Dropdown>
        <Dropdown header="Random" selections={random}></Dropdown>
      </div>
    </section>
  );
};
