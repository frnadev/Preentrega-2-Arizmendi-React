const productos = [
  {
    id: "1",
    name: "Remera xl",
    price: 3000,
    category: "remeras",
    stock: "30",
    description: "remera xl masculino",
  },
];

export const getProducts = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(productos);
    }, 500);
  });
};
