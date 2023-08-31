import Article from "./components/article/Article";
import { Header } from "./components/header";
import { InfoHeader } from "./components/infoHeader";
import Stack from "./components/stack/Stack";

const Home = () => {
  return (
    <main className="bg-background text-primary min-h-screen pb-14 md:pb-2">
      <Header />
      <InfoHeader />
      <hr className="line" />
      <Stack />
      <Article />
    </main>
  );
};
export default Home;
