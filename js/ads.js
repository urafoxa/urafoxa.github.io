
const ads = [
  { img: "images/ad1.png", link: "art.html", text: "COOL ART!!!" },
  { img: "images/ad2.png", link: "about.html", text: "ABOUT ME" },
  { img: "images/ad3.png", link: "index.html", text: "CLICK HERE" }
];

const pick = ads[Math.floor(Math.random() * ads.length)];
document.getElementById("adimg").src = pick.img;
document.getElementById("adimg").title = pick.text;
document.getElementById("adlink").href = pick.link;
