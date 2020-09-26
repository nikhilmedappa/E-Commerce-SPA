import React from "react";
import Product from "../Product";


const prodata = [
    {
      id: 1,
      url: "https://static.zara.net/photos///2020/V/0/2/p/3057/358/401/532/w/615/3057358401_2_1_1.jpg?ts=1583407875205",
      title: "Checks Shirt",
      description: 120,
      size: "S,M,L Available",
      price: 5299 + "/-"
    },
    {
      id: 2,
      url: "https://static.zara.net/photos///2020/V/0/2/p/4107/466/505/2/w/615/4107466505_2_2_1.jpg?ts=1583251667564",
      title: "Printed Shirt",
      description: 120,
      size: "S,M,L Available",
      price: 2599 + "/-"
    },
    {
      id: 3,
      url: "https://static.zara.net/photos///2020/V/0/2/p/3894/400/250/2/w/1920/3894400250_1_1_1.jpg?ts=1580317364964",
      title: "Plain White Shirt",
      description: 120,
      size: "S,M,L Available",
      price: 3099 + "/-"
    },
    {
      id: 4,
      url: "https://static.zara.net/photos///2020/W/0/2/p/6048/401/712/2/w/615/6048401712_2_5_1.jpg?ts=1580286334658",
      title: "Stripe Shirt",
      description: 1220,
      size: "S,M,L Available",
      price: 4999 + "/-"
    },
    {
      id: 5,
      url: "https://static.zara.cn/photos///2020/V/0/2/p/1928/401/052/2/w/750/1928401052_2_1_1.jpg?ts=1580145662685",
      title: "Beige No Collar",
      description: 640,
      size: "S,M,L Available",
      price: 5499 + "/-"
    },
    {
      id: 6,
      url: "https://static.zara.cn/photos///2020/V/0/2/p/8211/403/401/2/w/750/8211403401_2_5_1.jpg?ts=1583933145440",
      title: "Dot Print Shirt",
      description: 270,
      size: "S,M,L Available",
      price: 2099 + "/-"
    },
    {
      id: 7,
      url: "https://bofrike.com/wp-content/uploads/2020/02/3057305305_2_1_1.jpg",
      title: "Large Stripe Shirt",
      description: 130,
      size: "S,M,L Available",
      price: 3499 + "/-"
    }
  ];

const ProductList = (addToCart) => {
  
  console.log(prodata);

  return (
    <div className="products-list">
      {prodata.map((item, index) => {
        return <Product product={item} {...item} key={item.id} />;
      })}
    </div>
  ); 
}

export default ProductList;