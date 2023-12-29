import { ChakraProvider } from "@chakra-ui/react";
import { MetaFunction } from "@remix-run/node";
import { Outlet } from "@remix-run/react";
import { Document } from "~/Document";

export const meta: MetaFunction = () => {
  return [
    { title: "Ungkapkan Isi Hatimu" },
    { name: "description", content: "Welcome to Home" },
    { name: "viewport", content: "width=device-width,initial-scale=1" },
  ];
};

export default function App() {
  return (
    <Document>
      <ChakraProvider>
        <Outlet />
      </ChakraProvider>
    </Document>
  );
}
