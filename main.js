  const slider = document.getElementById("myRange");
  const gbLeft = document.getElementById("gbLeft");
  const gbUsed = document.getElementById("gbUsed");

  gbUsed.innerHTML = slider.value;
  gbLeft.innerHTML = 1000 - slider.value;
  slider.oninput = () => {
      gbLeft.innerHTML = 1000 - slider.value;
      gbUsed.innerHTML = slider.value;
  }

  slider.addEventListener("mousemove", () => {
      let x = slider.value;
      let color = "linear-gradient(90deg , hsl(6, 100%, 80%)" + x / 10 + "% , hsl(335, 100%, 65%)" + x / 10 + "%,  hsl(229, 57%, 11%)" + x / 10 + "%)";
      slider.style.background = color;
  })