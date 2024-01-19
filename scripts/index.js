const imgCopoGrande = document.querySelector(".starbucks");

const imgCopoVerde = document.querySelector(".verde");

const imgCopoAmarelo = document.querySelector(".amarelo");

const imgCopoRosa = document.querySelector(".rosa");

const circle = document.querySelector(".circle-desing");


imgCopoVerde.addEventListener ("click", () => {
    imgCopoGrande.src = "./img/img1.png"
    circle.style.background = ("#017143")
})


imgCopoAmarelo.addEventListener ("click", () => {

    imgCopoGrande.src = "./img/img2.png"
    circle.style.background = ("#eb7495")

}) 

imgCopoRosa.addEventListener ("click", () => {

    imgCopoGrande.src = "./img/img3.png"
    circle.style.background = ("#d752b1")
})
