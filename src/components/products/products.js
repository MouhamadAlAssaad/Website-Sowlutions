import { useEffect, useState } from "react";
import axios from "axios";
import "./products.css"
import Cardppopup from "../cardpopup/cardpopup";

function Products() {
  const [data, setData] = useState([]);
  const [showCard, setShowCard] = useState(false);
    const [eachData, setEachData] = useState([]);

  const fetchData = async () => {
    try {
      const response = await axios.get(
        "https://api.manoapp.com/api/v1/users/products/whats_new",
        {
          headers: {
            StoreID: 4,
            Authorization: "f44a4aabfc5992514d262d7f517327e7",
            UserAddressID: 60877,
          },
        }
      );
      setData(response.data.data.items);
      console.log(response.data.data.items);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="products">
      <div className="cards">
        {data.map((product) => {
          return (
            <div className="card">
              <div className="image">
                <img
                  src={product.images[0].large}
                  alt=""
                  width="100%"
                  height="100%"
                />
              </div>
              <div className="description">
                <p>{product.price}$</p>
                <h2>{product.title}</h2>
              </div>

            </div>
          );
        })}
        {showCard && (
            <Cardppopup
              title={data.title}
              onClick={() => setShowCard(false)}
            />
          )}
      </div>
    </div>
  );
}

export default Products;
// import React, { useState, useEffect } from "react";
// import axios from "axios";
// import "./products.css"
// import Cardppopup from "../cardpopup/cardpopup";
// function Products() {
//   // Create a state to store the data response from the database
//   const [data, setData] = useState([]);
//   const [isLoading, setIsLoading] = useState(false);
//   const [showCard, setShowCard] = useState(false);
//   const [eachData, setEachData] = useState([]);

//   const fetchData = async () => {
//     try {
//       setIsLoading(true);
//       const response = await axios.get(
//         "https://api.manoapp.com/api/v1/users/products/whats_new",
//         {
//           headers: {
//             StoreID: 4,
//             Authorization: "f44a4aabfc5992514d262d7f517327e7",
//             UserAddressID: 60877,
//           },
//         }
//       );
//       setData(response.data.data.items);
//       console.log(response.data.data);
//       setIsLoading(false);
//     } catch (error) {
//       console.log(error);
//     }
//   };

//   const getProductByID = async (id) => {
//     try {
//       const response = await axios.get(
//         `https://api.manoapp.com/api/v1/users/products/${id}`,
//         {
//           headers: {
//             StoreID: 4,
//             Authorization: "f44a4aabfc5992514d262d7f517327e7",
//             UserAddressID: 60877,
//           },
//         }
//       );
//       console.log(response.data);
//     } catch (error) {
//       console.log(error);
//     }
//   };

//   useEffect(() => {
//     fetchData();
//   }, []);

//   return (
//     <>
//       (
//       <div className="products">
//         <div className="hero-section">
//           <h1>Products</h1>
//         </div>
//         <div className="cards">
//           {data.map((product) => {
//             return (
//               <div
//                 className="card"
//                 onClick={() => {
//                   setShowCard(true);
//                   getProductByID(product.id);
//                 }}
//               >
//                 <div className="image">
//                   <img
//                     src={product.images[0].original}
//                     width="100%"
//                     height="100%"
//                   />
//                 </div>
//                 <div className="description">
//                   <p>{product.price}$</p>
//                   <h2>{product.title}</h2>
//                 </div>
               
//               </div>
//             );
//           })}
//           {/* Show the pop up when the state is true */}
//           {showCard && (
//             <Cardppopup
//               title={data.title}
//               onClick={() => setShowCard(false)}
//             />
//           )}
//         </div>
//       </div>
//       )
//     </>
//   );
// }

// export default Products;
