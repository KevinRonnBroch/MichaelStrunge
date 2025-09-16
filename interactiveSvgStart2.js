document.addEventListener("DOMContentLoaded", function () {
  runProgram();
});

async function runProgram() {
  let selected;
  let selectedID;
  // let color;
  let active;
  let infoboks;
  let steder;

  // 1. Load svg map
  //------------------------------------------------------------------------------------

  let myJson = await fetch("kort.json");
  steder = await myJson.json();

  let mySvg = await fetch("/public/kbhsvgmap12.svg");
  let svg = await mySvg.text();

  document.querySelector("#map").innerHTML = svg;

  let svgElement = document.querySelector("#map svg");

  // tilføj style direkte
  svgElement.style.maxHeight = "90vh";
  svgElement.style.width = "100%"; // hvis du også vil have den tilpasse sig bredden

  // HUS
  let hus = document.querySelector("#map svg #hus");
  hus.style.cursor = "pointer";
  hus.addEventListener("mouseenter", () => {
    hus.style.opacity = "0.8";
  });
  hus.addEventListener("mouseleave", () => {
    hus.style.opacity = "1";
  });

  // LEJLIGHED
  let lejlighed = document.querySelector("#map svg #lejlighed");
  lejlighed.style.cursor = "pointer";
  lejlighed.addEventListener("mouseenter", () => {
    lejlighed.style.opacity = "0.8";
  });
  lejlighed.addEventListener("mouseleave", () => {
    lejlighed.style.opacity = "1";
  });

  // VICTOR
  let victor = document.querySelector("#map svg #victor");
  victor.style.cursor = "pointer";
  victor.addEventListener("mouseenter", () => {
    victor.style.opacity = "0.8";
  });
  victor.addEventListener("mouseleave", () => {
    victor.style.opacity = "1";
  });

  // KIRKE
  let kirke = document.querySelector("#map svg #kirke");
  kirke.style.cursor = "pointer";
  kirke.addEventListener("mouseenter", () => {
    kirke.style.opacity = "0.8";
  });
  kirke.addEventListener("mouseleave", () => {
    kirke.style.opacity = "1";
  });

  // 2. find infobokse og skjul dem
  //------------------------------------------------------------------------------

  // 3. Skift farve ved klik, og vis tekst
  //-----------------------------------------------------------------------

  document.querySelector("#map #POI").addEventListener("click", function (evt) {
    clicked(evt);
  });

  //function clicked
  //--------------------------------------------------------------------

  function clicked(obj) {
    if (infoboks) {
      infoboks.style.visibility = "hidden";
    }

    // a. find det klikkede element
    //----------------------------------------------

    selected = obj.target;
    // b. find det klikkede elementets ID
    //---------------------------------------------

    selectedID = selected.getAttribute("id");

    // c. find  det klikkede elements fillfarve
    //---------------------------------------------

    // color = selected.getAttribute("fill");

    // d. vis infobokse
    //--------------------------------------------

    // if (selectedID == "punkt1") {
    //   info_1.style.visibility = "visible";
    //   infoboks = info_1;
    // }
    // if (selectedID == "punkt2") {
    //   info_2.style.visibility = "visible";
    //   infoboks = info_2;
    // }
    // if (selectedID == "punkt3") {
    //   info_3.style.visibility = "visible";
    //   infoboks = info_3;
    // }
    // if (selectedID == "punkt4") {
    //   info_4.style.visibility = "visible";
    //   infoboks = info_4;
    // }

    // 4. hvis der tidligere har været klikket skal det forige element skifte farve til original
    //------------------------------------------------------------------------------------

    steder.forEach((sted) => {
      if (sted.sted == selectedID) {
        document.querySelector("#tekst").textContent = sted.tekst;
      }
    });

    // if (active) {
    //   active.setAttribute("fill", color);
    // }

    //gør det klikkede til det aktive
    //-------------------------------------------------------------------------

    active = selected;
    console.log(active);

    //skift farve på det valgte
    //-------------------------------------------------------------------------

    // if (color === "#b62300") {
    //   document.querySelector("#" + selectedID).setAttribute("fill", "#123456");
    // }

    //reset farve og skjul tekst hvis valgt elementet allerede er aktivt
    //--------------------------------------------------------------------------
    // else {
    //   document.querySelector("#" + selectedID).setAttribute("fill", "#b62300");
    //   infoboks.style.visibility = "hidden";
    // }
  }
}
