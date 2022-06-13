import React from "react";
import { Container } from "./styles";

const Button: React.FC<{children:string}> = ({children}) => (
<Container>
  {children}
</Container>);
export default Button;