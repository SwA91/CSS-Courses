import { Divider } from "./Divider";
import { SidebarIcon } from "./SidebarIcon";
export const Sidebar = () => {
  return (
    <section className="fixed top-0 left-0 h-screen bg-white dark:bg-[#1E1F22] shadow-lg hidden md:flex flex-col w-16">
      <SidebarIcon icon="ic:baseline-discord" text="Add channel" />
      <Divider />
      <SidebarIcon icon="mdi-light:plus" text="Add channel" />
      <SidebarIcon icon="ant-design:thunderbolt-filled" text="Add channel" />
      <SidebarIcon icon="tabler:poo-filled" text="Add channel" />
      <Divider />
      <SidebarIcon icon="mdi:gear" text="Add channel" />
    </section>
  );
};
