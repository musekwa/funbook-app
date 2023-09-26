import React from "react";
import { useHeaderHeight } from "@react-navigation/elements";
import  ListOfFavorites from "../components/ListOfFavorites";
import Layout from "../../Layout";

const Favorites = () => {
  const headerHeight = useHeaderHeight();

  return (
    <Layout>
      <ListOfFavorites />
    </Layout>
  );
};

export default Favorites;