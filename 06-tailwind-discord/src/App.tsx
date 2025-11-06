import { ChannelBar } from "./components/ChannelBar";
import { ContentContainer } from "./components/ContentContainer";
import { Sidebar } from "./components/Sidebar";
function App() {
  return (
    <main className="flex h-screen">
      <Sidebar></Sidebar>
      <ChannelBar></ChannelBar>
      <ContentContainer></ContentContainer>
    </main>
  );
}

export default App;
