const icons = [
    "https://i.ibb.co/G39q0G2/cryoIcon.png", //cryo
    "https://i.ibb.co/7RkHBc8/dendro-Icon.png", //dendro
    "https://i.ibb.co/RTQwTyW/electro-Icon.png", //electro
    "https://i.ibb.co/HgZN3KX/geoIcon.png", // geo
    "https://i.ibb.co/Mp2d6yP/hydro-Icon.png", // hydro
    "https://i.ibb.co/1rRZf81/pyroIcon.png", // pyro
    "https://i.ibb.co/52rVtLf/anemo-Icon.png" // anemo
];

function randomIcon() {
    return icons[Math.floor(Math.random() * 7)]
}
module.exports = {
    randomIcon,
    icons
}