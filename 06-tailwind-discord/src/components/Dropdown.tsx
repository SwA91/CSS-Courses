import { Icon } from "@iconify/react";
import { useState } from "react";
import { Chevronicon } from "./Chevronicon";
import { TopicSelection } from "./TopicSelection";

interface Props {
  header: string;
  selections: string[];
}

export const Dropdown = ({ header, selections }: Props) => {
  const [expanded, setExpanded] = useState(true);
  return (
    <div className="w-full px-2 pb-2 transition duration-300 ease-in-out">
      <div
        className="flex items-center justify-evenly cursor-pointer"
        onClick={() => setExpanded(!expanded)}
      >
        <Chevronicon expanded={expanded}></Chevronicon>
        <h5
          className={
            expanded
              ? "text-[#9f9f9f] text-lg font-bold"
              : " text-gray-500 text-lg font-semibold "
          }
        >
          {header}
        </h5>
        <Icon
          icon="ic:outline-plus"
          width="12"
          height="12"
          className="text-gray-600 dark:text-white/80 my-auto ml-auto"
        />
      </div>
      {expanded &&
        selections &&
        selections.map((item) => <TopicSelection item={item} />)}
    </div>
  );
};
