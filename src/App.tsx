import Container from "@mui/material/Container";
import { ResponsiveAppBar } from "./components/TopBar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ProductAPIProvider } from "./ProductAPI/ProductAPIContext";
import { ProductAPI } from "./ProductAPI/ProductAPI";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { ProductsPage } from "./components/Products";
import { HomePage } from "./components/Home";
import CssBaseline from "@mui/material/CssBaseline";

const darkTheme = createTheme({
  palette: {
    mode: "dark",
  },
});

export default function App() {
  const productAPI = new ProductAPI();

  return (
    <ProductAPIProvider instance={productAPI}>
      <ThemeProvider theme={darkTheme}>
        <CssBaseline />
        <BrowserRouter>
          <div>
            <ResponsiveAppBar />
            <Container maxWidth="xl" style={{ paddingTop: 50 }}>
              <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/products" element={<ProductsPage />} />
              </Routes>
            </Container>
          </div>
        </BrowserRouter>
      </ThemeProvider>
    </ProductAPIProvider>
  );
}
