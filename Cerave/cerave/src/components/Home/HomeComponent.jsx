import React from 'react'
import CardComponent from '../Card/CardComponent'
import ListViewComponent from '../../ListView/ListViewComponent';

const HomeComponent = () => {
  const beautyProduct = [
    {
      imgUrl:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTW7zpG7Q2QGK9YGchMgfbXycRtDimjSCjk8w&s",
      title: "The Awesome Dog",
      description: "This is the description of awesome dog.",
    },
    {
      imgUrl: "https://d2zp5xs5cp8zlg.cloudfront.net/image-53920-800.jpg",
      title: "The Awesome Cat",
      description: "This is the description of awesome dog.",
    },
  ];

  const productList = [
    {
      productName: 'Fixderma Shadow Sunscreen',
      price: 'Rs.700/-'
    },
    {
      productName: 'Derma co Clay Daily Face Wash',
      price: 'Rs.850/-'
    },
  ];
  return (
    <div className='my-5'>
      <CardComponent productData={beautyProduct}/>
      <ListViewComponent productViewList = {productList}/>
    </div>
  )
}

export default HomeComponent
