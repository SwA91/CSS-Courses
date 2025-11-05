import { Icon } from "@iconify-icon/react";
import { CardMenu } from "../components/HomeComponents/CardMenu";
import { dataProyectos } from "../data/data";
import { useThemeStore } from "../store/useThemeStore";

export const Home = () => {
  const { theme, toggleTheme } = useThemeStore();
  // Tailwind lee la configuracion del PC para aplicar dark
  return (
    <main className="bg-primary h-screen  dark:bg-primary-dark flex flex-col items-center justify-center overflow-hidden">
      <section className=" rounded-lg min-w-[450px]  ">
        <h1 className="text-black dark:text-white text-4xl font-bold mb-4 flex items-center justify-center gap-4">
          Proyectos
          <Icon icon="catppuccin:tailwind" width="40" height="40" />
        </h1>
        {dataProyectos.map((item, index) => {
          return <CardMenu key={index} item={item} index={index}></CardMenu>;
        })}
      </section>
      <button
        className="p-2 rounded-lg bg-amber-600 dark:bg-black dark:text-white"
        onClick={toggleTheme}
      >
        {theme === "light" ? "🌞 Modo claro" : "🌛 Modo oscuro"}
      </button>
    </main>
  );
};
