let explore = document.getElementsByClassName("explore")[0];
let oval = document.getElementsByClassName("oval")[0];

explore.addEventListener("mouseover", () => {
  oval.style.cssText = `transform: scale(1)`;
});
explore.addEventListener("mouseout", () => {
  oval.style.cssText = `transition: all 1.4s;transform: scale(0.3)`;
});

explore.addEventListener("click", () => {
  oval.addEventListener("transitionend", () => {
    explore.querySelector("a").href = "#destination";
    explore.querySelector("a").click();
  });
});

let navBar = document.getElementsByClassName("nav-bar")[0];
let navv = document.getElementsByClassName("navv")[0];
let navMenu = document.getElementsByClassName("nav-menu")[0];
let closeBtn = document.getElementsByClassName("mobile-nav")[0];
navv.addEventListener("click", () => {
  navMenu.classList.add("show");
  navBar.classList.add("full-height");
});
closeBtn.addEventListener("click", () => {
  navMenu.classList.remove("show");
  navBar.classList.remove("full-height");
});

/*********Nav Indigator*********** */

let allSection = document.querySelectorAll('section[class*="section"]');
let navItems = document.querySelector(".nav-items").querySelectorAll("li");
window.onscroll = () => {
  let current;
  allSection.forEach((sec) => {
    if (scrollY >= sec.offsetTop) {
      current = document.getElementsByClassName(sec.id + "-tab")[0];
    }
  });
  let navMenu = document.getElementsByClassName("nav-menu")[0];
  if (current.classList.contains("home-tab"))
    navMenu.style.backgroundColor = "hsla(0, 0%, 100%, 0.1)";
  else navMenu.style.backgroundColor = "rgba(66, 66, 66, 0.521)";
  navItems.forEach((item) => {
    item.classList.remove("active");
    current.classList.add("active");
  });
};
navItems.forEach((item) => {
  item.addEventListener("click", (e) => {
    item.querySelector("a").click();
  });
});
/******Technology photo responsive******** */
let techPhoto = document.getElementsByClassName("tech-photo")[0];
if (window.innerWidth < 1200) {
  techPhoto.src = "./assets/technology/image-launch-vehicle-landscape.jpg";
} else {
  techPhoto.src = "./assets/technology/image-launch-vehicle-portrait.jpg";
}
window.addEventListener("resize", () => {
  if (window.innerWidth < 1200) {
    techPhoto.src = "./assets/technology/image-launch-vehicle-landscape.jpg";
  } else {
    techPhoto.src = "./assets/technology/image-launch-vehicle-portrait.jpg";
  }
});

/**********Fetch Json Data********* */
let data = {
  destinations: [
    {
      name: "Moon",
      images: {
        png: "./assets/destination/image-moon.png",
        webp: "./assets/destination/image-moon.webp",
      },
      description:
        "See our planet as you’ve never seen it before. A perfect relaxing trip away to help regain perspective and come back refreshed. While you’re there, take in some history by visiting the Luna 2 and Apollo 11 landing sites.",
      distance: "384,400 km",
      travel: "3 days",
    },
    {
      name: "Mars",
      images: {
        png: "./assets/destination/image-mars.png",
        webp: "./assets/destination/image-mars.webp",
      },
      description:
        "Don’t forget to pack your hiking boots. You’ll need them to tackle Olympus Mons, the tallest planetary mountain in our solar system. It’s two and a half times the size of Everest!",
      distance: "225 mil. km",
      travel: "9 months",
    },
    {
      name: "Europa",
      images: {
        png: "./assets/destination/image-europa.png",
        webp: "./assets/destination/image-europa.webp",
      },
      description:
        "The smallest of the four Galilean moons orbiting Jupiter, Europa is a winter lover’s dream. With an icy surface, it’s perfect for a bit of ice skating, curling, hockey, or simple relaxation in your snug wintery cabin.",
      distance: "628 mil. km",
      travel: "3 years",
    },
    {
      name: "Titan",
      images: {
        png: "./assets/destination/image-titan.png",
        webp: "./assets/destination/image-titan.webp",
      },
      description:
        "The only moon known to have a dense atmosphere other than Earth, Titan is a home away from home (just a few hundred degrees colder!). As a bonus, you get striking views of the Rings of Saturn.",
      distance: "1.6 bil. km",
      travel: "7 years",
    },
  ],
  crew: [
    {
      name: "Douglas Hurley",
      images: {
        png: "./assets/crew/image-douglas-hurley.png",
        webp: "./assets/crew/image-douglas-hurley.webp",
      },
      role: "Commander",
      bio: "Douglas Gerald Hurley is an American engineer, former Marine Corps pilot and former NASA astronaut. He launched into space for the third time as commander of Crew Dragon Demo-2.",
    },
    {
      name: "Mark Shuttleworth",
      images: {
        png: "./assets/crew/image-mark-shuttleworth.png",
        webp: "./assets/crew/image-mark-shuttleworth.webp",
      },
      role: "Mission Specialist",
      bio: "Mark Richard Shuttleworth is the founder and CEO of Canonical, the company behind the Linux-based Ubuntu operating system. Shuttleworth became the first South African to travel to space as a space tourist.",
    },
    {
      name: "Victor Glover",
      images: {
        png: "./assets/crew/image-victor-glover.png",
        webp: "./assets/crew/image-victor-glover.webp",
      },
      role: "Pilot",
      bio: "Pilot on the first operational flight of the SpaceX Crew Dragon to the International Space Station. Glover is a commander in the U.S. Navy where he pilots an F/A-18.He was a crew member of Expedition 64, and served as a station systems flight engineer.",
    },
    {
      name: "Anousheh Ansari",
      images: {
        png: "./assets/crew/image-anousheh-ansari.png",
        webp: "./assets/crew/image-anousheh-ansari.webp",
      },
      role: "Flight Engineer",
      bio: "Anousheh Ansari is an Iranian American engineer and co-founder of Prodea Systems. Ansari was the fourth self-funded space tourist, the first self-funded woman to fly to the ISS, and the first Iranian in space.",
    },
  ],
  technology: [
    {
      name: "Launch vehicle",
      images: {
        portrait: "./assets/technology/image-launch-vehicle-portrait.jpg",
        landscape: "./assets/technology/image-launch-vehicle-landscape.jpg",
      },
      description:
        "A launch vehicle or carrier rocket is a rocket-propelled vehicle used to carry a payload from Earth's surface to space, usually to Earth orbit or beyond. Our WEB-X carrier rocket is the most powerful in operation. Standing 150 metres tall, it's quite an awe-inspiring sight on the launch pad!",
    },
    {
      name: "Spaceport",
      images: {
        portrait: "./assets/technology/image-spaceport-portrait.jpg",
        landscape: "./assets/technology/image-spaceport-landscape.jpg",
      },
      description:
        "A spaceport or cosmodrome is a site for launching (or receiving) spacecraft, by analogy to the seaport for ships or airport for aircraft. Based in the famous Cape Canaveral, our spaceport is ideally situated to take advantage of the Earth’s rotation for launch.",
    },
    {
      name: "Space capsule",
      images: {
        portrait: "./assets/technology/image-space-capsule-portrait.jpg",
        landscape: "./assets/technology/image-space-capsule-landscape.jpg",
      },
      description:
        "A space capsule is an often-crewed spacecraft that uses a blunt-body reentry capsule to reenter the Earth's atmosphere without wings. Our capsule is where you'll spend your time during the flight. It includes a space gym, cinema, and plenty of other activities to keep you entertained.",
    },
  ],
};

/*********Destination Section*********** */
let desInfoTitle = document.querySelector(".des-info-content .title");
let desInfoContent = document.querySelector(".des-info-content .text-content");
let avgDistance = document.querySelector(".avg-distance .distance-value");
let travelTime = document.querySelector(".travel-time .distance-value");
let desInfoImg = document.querySelector(".des-info-img");
let desSlideBarItem = document.querySelector(".des-slidebar ul");
let desSlideBarList = document.querySelectorAll(".des-slidebar ul li");
desSlideBarList.forEach((item) => {
  item.addEventListener("click", () => {
    desSlideBarList.forEach((item) => item.classList.remove("active"));
    item.classList.add("active");
  });
});
function sliderSec(jsonData) {
  desSlideBarItem.addEventListener("click", (e) => {
    let linkIndex = Number(e.target.dataset.linkindex);
    desInfoTitle.textContent = jsonData.destinations[linkIndex].name;
    desInfoContent.textContent = jsonData.destinations[linkIndex].description;
    avgDistance.textContent = jsonData.destinations[linkIndex].distance;
    travelTime.textContent = jsonData.destinations[linkIndex].travel;
    desInfoImg.src = jsonData.destinations[linkIndex].images.webp;
  });
}

/*****Crew Section***** */
let allCrewIndi = document.querySelectorAll(".crew-indicator");
let role = document.querySelector(".crew-content span:first-child");
let cName = document.querySelector(".commander-name");
let bio = document.querySelector(".commander-info");
let crewPhoto = document.querySelector(".crew-photo");
function crewSec(jsonData) {
  allCrewIndi.forEach((item) => {
    item.addEventListener("click", () => {
      allCrewIndi.forEach((item) => item.classList.remove("indi-active"));
      item.classList.add("indi-active");
      let indiIndex = Number(item.dataset.indiindex);
      role.textContent = jsonData.crew[indiIndex].role;
      cName.textContent = jsonData.crew[indiIndex].name;
      bio.textContent = jsonData.crew[indiIndex].bio;
      crewPhoto.src = jsonData.crew[indiIndex].images.webp;
    });
  });
}

/********Technology Section******* */
let techIndicators = document.querySelectorAll(
  ".tech-indicator-section .tech-indicator"
);
let techTitle = document.querySelector(".tech-content-title");
let techArticle = document.querySelector(".tech-content-article");
let techPhotoSec = document.querySelector(".tech-photo");

function techSec(jsonData) {
  techIndicators.forEach((item) => {
    item.addEventListener("click", () => {
      techIndicators.forEach((item) => item.classList.remove("tech-active"));
      let techIndex = Number(item.dataset.techindex);
      item.classList.add("tech-active");
      techTitle.textContent = jsonData.technology[techIndex].name;
      techArticle.textContent = jsonData.technology[techIndex].description;
      if (window.innerWidth < 1200) {
        techPhoto.src = jsonData.technology[techIndex].images.landscape;
      } else {
        techPhoto.src = jsonData.technology[techIndex].images.portrait;
      }
    });
  });
}

sliderSec(data);
crewSec(data);
techSec(data);
