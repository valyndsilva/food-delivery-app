import axios from "axios";
import { useEffect } from "react";
import { Featured, PizzaList } from "../components";
const Home = ({ pizzaList }) => {
  return (
    <main className="">
      <Featured />
      <PizzaList pizzaList={pizzaList} />
    </main>
  );
};

export default Home;

export const getServerSideProps = async () => {
  const res = await axios.get("http://localhost:3000/api/products");
  const pizzaList = res.data;
  return {
    props: {
      pizzaList: pizzaList,
    },
  };
};
