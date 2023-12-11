import Banner  from "./components/Banner";
import Aula from "./components/Aula";
import Footer from "./components/Footer";
import Header from "./components/Header";

export const revalidate=0
export default function Home() {
  return (
    <>
      <Header />
      <Banner />
      <Footer />
      <Aula   />

    </>

  )
}