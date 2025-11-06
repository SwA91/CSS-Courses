import { Icon } from "@iconify/react";

export const BottomBar = () => {
  return (
    <div className="flex items-center justify-between bottom-2  right-8  rounded-lg bg-gray-400 dark:bg-[#383A40] gap-3 px-2  m-2">
      <Icon
        className="cursor-pointer dark:text-gray-400 text-[#313338]"
        icon="zondicons:add-solid"
        width="20"
        height="20"
      />
      <input
        type="text"
        placeholder="Ingrese mensaje"
        className="font-semibold w-full bg-transparent outline-none text-gray-500 dark:text-gray-400 placeholder-gray-500 cursor-text h-12"
      />
    </div>
  );
};
