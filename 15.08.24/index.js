const username = "Анатолій Семанюк"
function setup() {
    const cardAll = document.querySelectorAll (".card");
    const cardArr = Array.from(cardAll);

    cardArr.map((element) => initCard(element));
}
setup()
function initCard(card) {
    const cardContent = card.querySelector(".card__content");
    card.addEventListener ("mousemove", function(e)
    {
       const clientX = e.clientX
       const clientY = e.clientY
        console.log("працює")
        console.log(clientX)
        console.log(clientY)
        const cardRect = card.getBoundingClientRect()
        console.log(cardRect)
        const halfWidth = cardRect.width / 2;
        const halfHeight = cardRect.height / 2;
        const cardCenterX = cardRect.left + halfWidth;
        const cardCenterY = cardRect.top + halfHeight;
        const deltaX = clientX - cardCenterX;
        const deltaY = clientY - cardCenterY;
        const distancetoCenter = Math.sqrt(deltaX * deltaX + deltaY * deltaY);
        const maxDistance = Math.max( halfWidth, halfHeight);
        const degree = mapNumberRange(distancetoCenter, 0, maxDistance, 0, 10);
        const rx = mapNumberRange(deltaY, 0, halfWidth, 0, 1); 
        const ry = mapNumberRange(deltaX, 0, halfHeight, 0, 1);
        cardContent.style.transform = `perspective(400px) rotate3d(${-rx}, ${ry}, 0, ${degree}deg)`;

    })
    card.addEventListener("mouseleave", () => {
        cardContent.style = null;
      });
    
}
function mapNumberRange(n, a, b, c, d) {
    return (n-a) * (d-c) / (b-a) + c
}

