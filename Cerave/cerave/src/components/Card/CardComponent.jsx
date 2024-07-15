import React from "react";

const CardComponent = (props) => {

  return (
    <>
      <div className="flex justify-evenly flex-wrap">
        {props.productData.map((product, index) => {
          return (
            <div className=" flex gap-5" key = {index}>
                <div className="max-w-sm rounded overflow-hidden shadow-lg bg-white">
                  <img
                    className="w-full h-60 object-cover"
                    src={product.imgUrl}
                    alt="Image"
                  />
                  <div className="px-6 py-4">
                    <div className="font-bold text-xl mb-2">
                      {product.title}
                    </div>
                    <p className="text-gray-700 text-base">
                      {product.description}
                    </p>
                  </div>
                  <div className="px-6 pt-4 pb-2">
                    <span className="inline-block bg-blue-400 rounded-full px-3 py-1 text-sm font-semibold text-white mr-2 mb-2">
                      View More
                    </span>
                  </div>
                </div>
              </div>
          );
        }
        )}
      </div>


    </>
  );
};

export default CardComponent;
