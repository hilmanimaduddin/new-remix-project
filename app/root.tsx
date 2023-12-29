import { ChakraProvider } from "@chakra-ui/react";
import { MetaFunction } from "@remix-run/node";
import { Outlet } from "@remix-run/react";
import { Document } from "~/Document";

export const meta: MetaFunction = () => {
  return [
    { title: "Ungkapkan Isi Hatimu" },
    { name: "description", content: "Welcome to Home" },
    { name: "viewport", content: "width=device-width,initial-scale=1" },
    {
      rel: "icon",
      type: "image/x-icon",
      href: "https://i.pinimg.com/564x/37/8f/03/378f039a9167388718c65f6da8aba040.jpg",
    },
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
