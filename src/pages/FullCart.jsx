import { Container } from "@material-ui/core";
import React from "react";
import Cart from "../components/Cart";

const FullCart = () => {
  return (
    <Container maxWidth="sm">
      <Cart isFromDrawer={false} />
    </Container>
  );
};

export default FullCart;
