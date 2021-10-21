import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import CardList from "./components/child/cardlist/cardList";
import HomePage from "./components/parent/homePage"
import Toggle from "./components/theme/toggle"
import { ThemeProvider } from "./components/theme/themeContext"
import logo from "./image/depot es krim sahara.png"

const data = [
  { gambar: "https://asset.kompas.com/crops/35TEsl8wdJMV4LcidChyG73JM1Q=/0x0:996x664/750x500/data/photo/2020/06/11/5ee243469e9be.jpg", nama: "Es Krim Coklat", stok: 40, harga: 12000 },
  { gambar: "http://blog.sayurbox.com/wp-content/uploads/2020/02/sayurbox-ice-cream-strawberry-savingdessert.jpg", nama: "Es Krim Stroberi", stok: 30, harga: 15000 },
  { gambar: "https://awsimages.detik.net.id/customthumb/2015/07/29/297/172940_eskrimvanillacover.jpg?w=700&q=90", nama: "Es Krim Vanila", stok: 10, harga: 12000 },
  { gambar: "https://akcdn.detik.net.id/visual/2015/01/29/30fd9c4c-e7a5-4842-a662-da70f21051f0_169.jpg?w=650", nama: "Es Krim Mint", stok: 5, harga: 12000 },
  { gambar: "https://cdn2.uzone.id/assets/uploads/feeding/672db6b6953c3efd04f7d87a04fba0af.jpg", nama: "Es Krim Tiramisu", stok: 14, harga: 15000 },
  { gambar: "https://img.kurio.network/1zweGvGcdxLQDXrJroMrvgdHqlA=/1200x1200/filters:quality(80)/https://kurio-img.kurioapps.com/20/11/07/9f4c10f9-d507-483d-a8c9-4f20db06f5f8.jpeg", nama: "Es Krim Matcha", stok: 23, harga: 15000 },
];

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider>
      <body className = "h-screen bg-white dark:bg-gray-900">
        <Toggle />
        <HomePage 
          menu_data = {data}
          logo = {logo}
        />
      </body>
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
