import { routes } from "../../../static/routes";
import { StyledShoppingCartIcon } from "../StyledNavbar";

export const navbarData = [
  {
    content: "Home",
    path: routes.home,
  },
  {
    content: "Products",
    path: routes.products,
  },
  {
    content: "About us",
    path: routes.about,
  },
  {
    content: "Contact",
    path: routes.contact,
  },
  {
    content: <StyledShoppingCartIcon />,
    path: "",
  },
];
