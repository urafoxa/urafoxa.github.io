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

  // pixels per second (tune these)
  let vx = 120;
  let vy = 40;

  let lastTime = null;

  function tick(time) {
    if (!lastTime) lastTime = time;
    const dt = (time - lastTime) / 1000; // seconds
    lastTime = time;

    const bw = bar.clientWidth;
    const bh = bar.clientHeight;
    const dw = dvd.offsetWidth;
    const dh = dvd.offsetHeight;

    x += vx * dt;
    y += vy * dt;

    if (x <= 0) {
      x = 0;
      vx *= -1;
    } else if (x + dw >= bw) {
      x = bw - dw;
      vx *= -1;
    }

    if (y <= 0) {
      y = 0;
      vy *= -1;
    } else if (y + dh >= bh) {
      y = bh - dh;
      vy *= -1;
    }

    dvd.style.left = x + "px";
    dvd.style.top = y + "px";

    requestAnimationFrame(tick);
  }

  requestAnimationFrame(tick);
}