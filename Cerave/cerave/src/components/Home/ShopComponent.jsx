import React from "react";
import CardComponent from "../Card/CardComponent";

const ShopComponent = () => {
  const beautyProduct = [
    {
      imgUrl:
        "https://www.healme.com.np/storage/Product/PR-1683014442-1730152.webp",
      title: "Mamaearth Naturally Matte Lip Serum",
      description:
        "A burst of color, a dollop of care. Mamaearth Naturally Matte Lip Serum isn't your regular liquid lipstick. It’s packed with delicious matte color and is crafted with the most nourishing natural ingredients like Vitamin C and Vitamin E that brighten and hydrate.",
    },
    {
      imgUrl: "https://www.healme.com.np/storage/Product/PR-1683107099-6575762.webp",
      title: "Radiance Essence Face Serum ",
      description: "An Essence Serum is a concentrated water-based product that penetrates deep into the skin and gives nourishment on a cellular level. It is lighter than a normal serum and hence it goes deeper into the skin to add an instant boost of hydration.",
    },
    {
        imgUrl:
          "https://www.healme.com.np/storage/Product/PR-1683014442-1730152.webp",
        title: "Mamaearth Naturally Matte Lip Serum",
        description:
          "A burst of color, a dollop of care. Mamaearth Naturally Matte Lip Serum isn't your regular liquid lipstick. It’s packed with delicious matte color and is crafted with the most nourishing natural ingredients like Vitamin C and Vitamin E that brighten and hydrate.",
      },
      {
        imgUrl: "https://www.healme.com.np/storage/Product/PR-1683107099-6575762.webp",
        title: "Radiance Essence Face Serum ",
        description: "An Essence Serum is a concentrated water-based product that penetrates deep into the skin and gives nourishment on a cellular level. It is lighter than a normal serum and hence it goes deeper into the skin to add an instant boost of hydration.",
      },
      {
        imgUrl:
          "https://www.healme.com.np/storage/Product/PR-1683014442-1730152.webp",
        title: "Mamaearth Naturally Matte Lip Serum",
        description:
          "A burst of color, a dollop of care. Mamaearth Naturally Matte Lip Serum isn't your regular liquid lipstick. It’s packed with delicious matte color and is crafted with the most nourishing natural ingredients like Vitamin C and Vitamin E that brighten and hydrate.",
      },
      {
        imgUrl: "https://www.healme.com.np/storage/Product/PR-1683107099-6575762.webp",
        title: "Radiance Essence Face Serum ",
        description: "An Essence Serum is a concentrated water-based product that penetrates deep into the skin and gives nourishment on a cellular level. It is lighter than a normal serum and hence it goes deeper into the skin to add an instant boost of hydration.",
      },
  ];
  return (
    <div className="my-5">
      <CardComponent productData={beautyProduct} />
    </div>
  );
};

export default ShopComponent;
