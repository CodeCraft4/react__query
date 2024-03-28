import React from "react";
import { QueryClient, QueryClientProvider, useQuery } from "@tanstack/react-query";
import Product from "./Product";

const App = () => {
  // const user = new QueryClient()



  // StaleTime globally..
  const user = new QueryClient({
    defaultOptions: {
      queries: {
        staleTime: 10000,
      },
    },
  });



  return (
    <QueryClientProvider client={user}>
      <Product />
    </QueryClientProvider>
  );
};

export default App;
