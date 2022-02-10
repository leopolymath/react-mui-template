import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { useProductAPI } from "../ProductAPI/ProductAPIContext";
import { Product } from "../ProductAPI/ProductAPI";
import { useCallback, useEffect, useState } from "react";
import Grid from "@mui/material/Grid";
import CardContent from "@mui/material/CardContent";
import Card from "@mui/material/Card";
import { GridContainer } from "./Grid";
import Avatar from "@mui/material/Avatar/Avatar";
import AvatarGroup from "@mui/material/AvatarGroup";

type ProductCardProps = Product;

export const ProductsPage: React.FunctionComponent = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const productApi = useProductAPI();

  const fetchProducts = useCallback(async () => {
    const productsResponse = await productApi.getProducts();

    setProducts(productsResponse);
  }, [productApi]);

  useEffect(() => {
    fetchProducts();
  }, [fetchProducts]);

  return (
    <div>
      <Typography variant="h2" noWrap>
        Products
      </Typography>
      <Box paddingBottom={5} />
      <GridContainer>
        {products.map((product) => {
          return (
            <Grid key={product.id} item xl={3} lg={4} md={6} sm={12} xs={12}>
              <ProductCard
                id={product.id}
                title={product.title}
                price={product.price}
                category={product.category}
                description={product.description}
                image={product.image}
              />
            </Grid>
          );
        })}
      </GridContainer>
    </div>
  );
};

const ProductCard: React.FunctionComponent<ProductCardProps> = ({
  id,
  title,
  price,
  category,
  description,
  image,
}) => {
  return (
    <Card sx={{ borderRadius: 6, border: "grey solid 1px" }}>
      <CardContent>
        <AvatarGroup>
          <Avatar alt={title} src={image} />
          <Avatar alt={title} src={image} />
        </AvatarGroup>
        <Typography sx={{ fontSize: 18 }}>{title}</Typography>
        <Typography sx={{ fontSize: 16 }}>Price: {price}</Typography>
        <Typography>Category: {category}</Typography>
        <Typography>
          {id} {description}
        </Typography>
      </CardContent>
    </Card>
  );
};
