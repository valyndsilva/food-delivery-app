import Head from "next/head";
import { Featured, Footer, PizzaList } from "../components";

const Home = () => {
  return (
      <main className="">
        <Featured />
        <PizzaList />
      </main>
  );
};

export default Home;
