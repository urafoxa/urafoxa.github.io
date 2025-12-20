function initTopbar() {
  const marquees = [
    { text: "WELCOME TO THE FUCK ZONE", direction: "left", speed: 4, weight: 5 },
    { text: "~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~", direction: "right", speed: 1, behavior: "slide", weight: 2 },
    { text: "↑ TOP SHELF ↑", direction: "left", speed: 4, weight: 4 },
    { text: "DVD", direction: "down", behavior: "alternate", speed: 4, weight: 1 },
    { text: "holy shit did you guys see that", direction: "left", speed: 50, loop: 1, weight: 1 }
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

  target.innerHTML = ""; // prevent duplicates

  const m = pickWeighted(marquees);
  console.log("topbar picked:", m.text);

  const marquee = document.createElement("marquee");
  marquee.textContent = m.text;
  marquee.direction = m.direction || "left";
  marquee.scrollAmount = m.speed || 4;
  marquee.behavior = m.behavior || "scroll";
  marquee.loop = m.loop ?? -1;
  marquee.setAttribute("truespeed", "");

  target.appendChild(marquee);
}
