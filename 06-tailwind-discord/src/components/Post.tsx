interface Props {
  name: string;
  timestamp: string;
  text: string;
}
export const Post = ({ name, timestamp, text }: Props) => {
  const seed = Math.floor(Math.random() * 898) + 1;
  return (
    <div className="w-full flex flex-row items-center justify-start py-4 px-8 cursor-pointer gap-4">
      <img
        className="bg-[#ffffff] w-12  rounded-full mb-auto p-0.5"
        src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${seed}.png`}
      />

      <div className="flex flex-col justify-start">
        <p className="text-left font-semibold text-gray-800 dark:text-white mr-2">
          {name}{" "}
          <small className="text-xs text-left font-semibold text-gray-500 dark:text-gray-600 ml-2">
            {timestamp}
          </small>
        </p>
        <p className="text-lg text-left text-gray-800 dark:text-white">
          {text}
        </p>
      </div>
    </div>
  );
};
