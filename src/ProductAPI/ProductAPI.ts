export type Product = {
  id: number;
  title: string;
  price: string;
  category: string;
  description: string;
  image: string;
};

export interface ProductAPIInterface {
  getProducts(): Promise<Array<Product>>;
  getProduct(id: number): Promise<Product | null>;
}

const BASE_URL = "https://fakestoreapi.com";

export class ProductAPI implements ProductAPIInterface {
  async getProducts(): Promise<Array<Product>> {
    const queryParams = new URLSearchParams({
      limit: "50",
    });
    const productsEndpoint = "products";
    const url = `${BASE_URL}/${productsEndpoint}?${queryParams}`;

    const response = await window.fetch(url);

    if (response.status === 200) {
      const productsResponse: Array<Product> = await response.json();

      return productsResponse;
    }

    return [];
  }

  async getProduct(id: number): Promise<Product | null> {
    const productEndpoint = `products/${id}`;
    const url = `${BASE_URL}/${productEndpoint}`;

    const response = await window.fetch(url);

    if (response.status === 200) {
      const productResponse: Product = await response.json();

      return productResponse;
    }
    return null;
  }
}
