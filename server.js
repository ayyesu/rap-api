const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());

const PORT = process.env.PORT || 8000;

const rapApi = {
  "kwesi arthur": {
    name: "Emmanuel Kwesi Danso Arthur Junior",
    age: 27,
    birthLocation: "Tema",
    img: "https://i.scdn.co/image/ab6761610000e5eb923b3b4b3e92e8fe1e206241",
  },
  sarkodie: {
    name: "Michael Owusu Addo",
    age: 32,
    birthLocation: "Tema",
    img: "http://t3.gstatic.com/licensed-image?q=tbn:ANd9GcSwx-HV-TCMZdopLUfdYfcLlrolqW8Uil3o9EE9HscykCSq2ePYRM0mmU7lgQYEoyOu",
  },
  "black sherif": {
    name: "Mohammed Ismail Sharrif",
    age: 20,
    birthLocation: "Konongo",
    img: "https://cdn.vanguardngr.com/wp-content/uploads/2022/10/Black-Sherif-2.jpg",
  },
};

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/index.html");
});

app.get("/api/rapper/:rapName", (req, res) => {
  const rapperName = req.params.rapName.toLowerCase();
  if (rapApi[rapperName]) {
    res.json(rapApi[rapperName]);
    console.log(rapApi[rapperName]);
  } else {
    console.log(`${rapperName} is not available`);
    res.end();
  }
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
