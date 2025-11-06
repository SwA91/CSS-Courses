import { Icon } from "@iconify/react";

interface Props {
  icon: string;
  text: string;
}

export const SidebarIcon = ({ icon, text }: Props) => {
  return (
    <div className="group relative flex items-center justify-center h-12 w-12 my-2 mx-auto  bg-gray-400 dark:bg-[#313338] hover:bg-[#5865F2] text-white hover:text-white/80 rounded-full hover:rounded-xl transition-all duration-100 ease-linear cursor-pointer shadow-lg">
      <Icon icon={icon} width="32" height="32" />
      <span className="absolute w-auto p-2 m-2 min-w-max left-14 rounded-md shadow-md bg-[#141414] text-white transition-all duration-100 scale-0 origin-left group-hover:scale-100">
        {text}
      </span>
    </div>
  );
};
