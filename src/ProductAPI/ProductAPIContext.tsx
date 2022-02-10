import React, { createContext, useContext } from "react";
import type { ProductAPIInterface } from "./ProductAPI";

type ContextType = ProductAPIInterface;

const ProductAPIContext = createContext<ContextType | null>(null);

type ProductAPIProviderProps = {
  instance: ProductAPIInterface;
};

export const ProductAPIProvider: React.FunctionComponent<
  ProductAPIProviderProps
> = ({ instance, children }) => {
  return (
    <ProductAPIContext.Provider value={instance}>
      {children}
    </ProductAPIContext.Provider>
  );
};

export const useProductAPI = (): ContextType => {
  const value = useContext(ProductAPIContext);

  if (value === null) {
    throw new Error("useProductAPI must be used within a ProductAPIProvider");
  }

  return value;
};
