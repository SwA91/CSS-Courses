import { Icon } from "@iconify/react";

interface Props {
  item: string;
}

export const TopicSelection = ({ item }: Props) => {
  return (
    <div className="flex items-center justify-evenly mt-1 mr-auto ml-2  transition duration-300 ease-in-out  cursor-pointer">
      <Icon
        icon="tabler:hash"
        width="24"
        height="24"
        className="text-gray-400"
      />
      <h5 className="text-gray-500 font-semibold tracking-wide mr-auto transition duration-300 ease-in-out hover:text-pink-500 dark:hover:text-gray-500/80 cursor-pointer">
        {item}
      </h5>
    </div>
  );
};
