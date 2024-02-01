import { createContext } from "react";

export const denemeContext = createContext({
  deneme: 0,
  changeDeneme: () => {},
})