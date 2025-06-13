export type Product = {
  id: number;
  name: string;
  price: number;
  description: string;
  image: string;
};

export const products: Product[] = [
  {
    id: 1,
    name: "Ikan Nila Segar",
    price: 30000,
    description: "Ikan nila pilihan, langsung dari kolam budidaya terbaik.",
    image: "/Untitled.jpeg",
  },
  {
    id: 2,
    name: "Ikan Lele Jumbo",
    price: 25000,
    description:
      "Lele berkualitas, sehat dan gemuk, cocok untuk masakan harian.",
    image: "/Untitled.jpeg",
  },
  {
    id: 3,
    name: "Ikan Gurame Premium",
    price: 45000,
    description: "Gurame berdaging tebal, rasa gurih alami, favorit keluarga.",
    image: "/Untitled.jpeg",
  },
  {
    id: 4,
    name: "Ikan Patin Segar",
    price: 35000,
    description: "Patin segar dan bersih, bebas bau lumpur.",
    image: "/Untitled.jpeg",
  },
];
