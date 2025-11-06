import { Icon } from "@iconify/react";

interface Props {
  expanded: boolean;
}

export const Chevronicon = ({ expanded }: Props) => {
  const chevClass = "text-gray-600 dark:text-white/80 my-auto mr-1";
  return expanded ? (
    <Icon
      icon="mingcute:down-line"
      width="14"
      height="14"
      className={chevClass}
    />
  ) : (
    <Icon
      icon="mingcute:right-line"
      width="14"
      height="14"
      className={chevClass}
    />
  );
};
