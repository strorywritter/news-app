import React, { useEffect } from "react";
import CategoryCard from "../componets/categoryCard/CategoryCard";
import MainLayout from "../Layout/MainLayout";
import { getAllCategories } from "../services/categories";

export default function Categories() {
  const [categories, setCategories] = React.useState([]);

  useEffect(() => {
    return () => {
      getCategories();
    };
  }, []);

  const getCategories = async () => {
    const response = await getAllCategories();
    setCategories(response.data);
  };

  return (
    <>
    <MainLayout />
      <div style={{ padding: "20px", backgroundColor: "#c5bcbe", height:700}}>
        <div>
          {categories.map((category) => {
            return <CategoryCard category={category} />;
          })}
        </div>
      </div>
    </>
  );
}
