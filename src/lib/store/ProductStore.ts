import { create } from "zustand";

interface StoreState {
  activeTab: string;
  setActiveTab: (tab: string) => void;
  productList: ListType[];
  setProductList: (productList: ListType[]) => void;
  getProductById: (id: number) => ListType | undefined; // New method
}

type ListType = {
  name: string;
  image: string;
  className: string;
  discount: number;
  price: number;
  id: number;
};

const featuredList: ListType[] = [
  {
    name: "Green Breeze",
    image: "/vapes/vape1.png",
    className: "col-span-3",
    discount: 40,
    price: 500,
    id: 1,
  },
  {
    name: "Mint Blue",
    image: "/vapes/pen.png",
    className: "col-span-2",
    discount: 10,
    price: 500,
    id: 2,
  },
  {
    name: "Fire Breath",
    image: "/vapes/vape2.png",
    className: "col-span-2",
    discount: 40,
    price: 500,
    id: 3,
  },
  {
    name: "Green Breeze",
    image: "/vapes/vape1.png",
    className: "col-span-3",
    discount: 30,
    price: 500,
    id: 4,
  },

  {
    name: "Mint Blue",
    image: "/vapes/pen.png",
    className: "col-span-2",
    discount: 30,
    price: 500,
    id: 5,
  },
  {
    name: "Green Breeze",
    image: "/vapes/vape1.png",
    className: "col-span-3",
    discount: 40,
    price: 500,
    id: 6,
  },
  {
    name: "Fire Breath",
    image: "/vapes/vape2.png",
    className: "col-span-2",
    discount: 20,
    price: 500,
    id: 7,
  },
  {
    name: "Green Breeze",
    image: "/vapes/vape1.png",
    className: "col-span-3",
    discount: 30,
    price: 500,
    id: 8,
  },
  {
    name: "Green Breeze",
    image: "/vapes/vape1.png",
    className: "col-span-3",
    discount: 40,
    price: 500,
    id: 9,
  },
  {
    name: "Mint Blue",
    image: "/vapes/pen.png",
    className: "col-span-2",
    discount: 10,
    price: 500,
    id: 10,
  },
  {
    name: "Fire Breath",
    image: "/vapes/vape2.png",
    className: "col-span-2",
    discount: 40,
    price: 500,
    id: 11,
  },
  {
    name: "Green Breeze",
    image: "/vapes/vape1.png",
    className: "col-span-3",
    discount: 30,
    price: 500,
    id: 12,
  },
  {
    name: "Green Breeze",
    image: "/vapes/vape1.png",
    className: "col-span-3",
    discount: 20,
    price: 500,
    id: 13,
  },
  {
    name: "Mint Blue",
    image: "/vapes/pen.png",
    className: "col-span-2",
    discount: 30,
    price: 500,
    id: 14,
  },
  {
    name: "Fire Breath",
    image: "/vapes/vape2.png",
    className: "col-span-2",
    discount: 20,
    price: 500,
    id: 15,
  },
  {
    name: "Green Breeze",
    image: "/vapes/vape1.png",
    className: "col-span-3",
    discount: 30,
    price: 500,
    id: 16,
  },
  {
    name: "Green Breeze",
    image: "/vapes/vape1.png",
    className: "col-span-3",
    discount: 40,
    price: 500,
    id: 17,
  },
  {
    name: "Mint Blue",
    image: "/vapes/pen.png",
    className: "col-span-2",
    discount: 10,
    price: 500,
    id: 18,
  },
  {
    name: "Fire Breath",
    image: "/vapes/vape2.png",
    className: "col-span-2",
    discount: 40,
    price: 500,
    id: 19,
  },
  {
    name: "Green Breeze",
    image: "/vapes/vape1.png",
    className: "col-span-3",
    discount: 30,
    price: 500,
    id: 20,
  },
  {
    name: "Green Breeze",
    image: "/vapes/vape1.png",
    className: "col-span-3",
    discount: 20,
    price: 500,
    id: 21,
  },
  {
    name: "Mint Blue",
    image: "/vapes/pen.png",
    className: "col-span-2",
    discount: 30,
    price: 500,
    id: 22,
  },
  {
    name: "Green Breeze",
    image: "/vapes/vape1.png",
    className: "col-span-3",
    discount: 40,
    price: 500,
    id: 23,
  },
  {
    name: "Fire Breath",
    image: "/vapes/vape2.png",
    className: "col-span-2",
    discount: 20,
    price: 500,
    id: 24,
  },
  {
    name: "Green Breeze",
    image: "/vapes/vape1.png",
    className: "col-span-3",
    discount: 30,
    price: 500,
    id: 25,
  },
  {
    name: "Green Breeze",
    image: "/vapes/vape1.png",
    className: "col-span-3",
    discount: 40,
    price: 500,
    id: 26,
  },
  {
    name: "Mint Blue",
    image: "/vapes/pen.png",
    className: "col-span-2",
    discount: 10,
    price: 500,
    id: 27,
  },
  {
    name: "Fire Breath",
    image: "/vapes/vape2.png",
    className: "col-span-2",
    discount: 40,
    price: 500,
    id: 28,
  },
  {
    name: "Green Breeze",
    image: "/vapes/vape1.png",
    className: "col-span-3",
    discount: 30,
    price: 500,
    id: 29,
  },
  {
    name: "Green Breeze",
    image: "/vapes/vape1.png",
    className: "col-span-3",
    discount: 20,
    price: 500,
    id: 30,
  },
  {
    name: "Mint Blue",
    image: "/vapes/pen.png",
    className: "col-span-2",
    discount: 30,
    price: 500,
    id: 31,
  },
  {
    name: "Fire Breath",
    image: "/vapes/vape2.png",
    className: "col-span-2",
    discount: 20,
    price: 500,
    id: 32,
  },
  {
    name: "Green Breeze",
    image: "/vapes/vape1.png",
    className: "col-span-3",
    discount: 30,
    price: 500,
    id: 33,
  },
];

const useProduct = create<StoreState>((set) => ({
  activeTab: "home",
  setActiveTab: (activeTab) => set({ activeTab }),
  productList: featuredList,
  setProductList: (productList: ListType[]) => set({ productList }),
  getProductById: (id: number) => {
    // Access the current store state
    return featuredList.find((product) => product.id === id);
  },
}));

export default useProduct;
