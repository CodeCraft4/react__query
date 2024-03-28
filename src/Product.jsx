import React from "react";
import { useQuery } from "@tanstack/react-query";

const Product = () => {
  // Just for paractice...
  const fetchData = async () => {
    const response = await fetch(`https://dummyjson.com/products`);
    const data = await response.json();
    return data.products;
  };
  // const [limit,setLimit] = useState(4);

  const {
    isPending,
    error,
    data: product,
  } = useQuery({
    // querykey use for identification..
    queryKey: ["product"],
    // querykey use for function whoes  data fetch on queryFn...
    queryFn: fetchData,
    // StaleTime use for to store data in the cache staleTime working on to stop the request on a server.
    // OR....
    // StaleTime use globally  if you want...
    // staleTime: 10000,
  });

  if (isPending) {
    return "Loading......";
  }
  if (error) return error.message;

  return (
    <div style={{ display: "flex", flexWrap: "wrap" }}>
      {product?.map((ex) => (
        <di style={{ display: "flex" }}>
          <div
            key={ex.id}
            style={{
              boxShadow: "3px 6px 9px gray",
              margin: "12px",
              borderRadius: "8px",
            }}
          >
            <img
              src={ex.thumbnail}
              alt="imag"
              style={{
                width: "300px",
                height: "300px",
                borderRadius: "8px",
              }}
            />
            <h4>{ex.title}</h4>
            <p>{ex.category}</p>z
          </div>
        </di>
      ))}
    </div>
  );
};

export default Product;
