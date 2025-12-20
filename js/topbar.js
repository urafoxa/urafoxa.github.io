function initTopbar() {
  const marquees = [
    { text: "WELCOME TO THE FUCK ZONE", direction: "left", speed: 4, weight: 5 },
    { text: "CanTankr is a band Ura likes in-universe, it's not real, I don't think!", direction: "left", speed: 8, behavior: "alternate", weight: 5 },
    { text: "↑ TOP SHELF ↑", direction: "left", speed: 4, weight: 4 },
    { text: "DVD", direction: "down", behavior: "alternate", speed: 4, weight: 1 },
    { text: "holy shit did you guys see that", direction: "left", speed: 140, loop: 1, weight: 1 }
  ];

  function pickWeighted(items) {
    const total = items.reduce((s, i) => s + (i.weight || 1), 0);
    let r = Math.random() * total;
    for (const item of items) {
      r -= item.weight || 1;
      if (r <= 0) return item;
    }
  }

  const target = document.getElementById("topbar");
  if (!target) {
    console.error("topbar not found");
    return;
  }


  //target.innerHTML = ""; // breaks my fucking code

  const m = pickWeighted(marquees);
  console.log("topbar picked:", m.text);

  const marquee = document.createElement("marquee");
  
 if (m.text === "DVD") {
	marquee.style.fontSize = "12px";
	marquee.style.lineHeight = "12px";
	marquee.style.height = "100%";
	const dvd = document.getElementById("dvd");
	const p = document.createElement("p");
	p.textContent = "DVD";
	dvd.appendChild(p);
	startDVD();
	return;
}
  
  
  marquee.textContent = m.text;
  marquee.direction = m.direction || "left";
  marquee.scrollAmount = m.speed || 4;
  marquee.behavior = m.behavior || "scroll";
  marquee.loop = m.loop ?? -1;
  marquee.setAttribute("truespeed", "");
  // i hate good coding principles 


  target.appendChild(marquee);
}

function startDVD() {
  const dvd = document.getElementById("dvd");
  const bar = document.getElementById("topbar");

  let x = 10;
  let y = 5;
  let vx = 1.5;
  let vy = 1;

  function tick() {
    const bw = bar.clientWidth;
    const bh = bar.clientHeight;
    const dw = dvd.offsetWidth;
    const dh = dvd.offsetHeight;

    x += vx;
    y += vy;

    if (x <= 0 || x + dw >= bw) vx *= -1;
    if (y <= 0 || y + dh >= bh) vy *= -1;

    dvd.style.left = x + "px";
    dvd.style.top = y + "px";

    requestAnimationFrame(tick);
  }

  tick();
}