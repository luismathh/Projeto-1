const imagem = document.getElementById('animal-card');
const descricao = document.getElementById('descricao');
const modal = document.getElementById('modal');

document.getElementById("btn-1").addEventListener('click',()=>{
    imagem.src = '../assets/gato.jpg'
    descricao.textContent = "Olhar de mil gatinhas"
});
document.getElementById("btn-2").addEventListener('click',()=>{
    imagem.src = '../assets/cachorro.jpg'
    descricao.textContent = "Fica tranquileba"
});
document.getElementById("btn-3").addEventListener('click',()=>{
    imagem.src = '../assets/leao.webp'
    descricao.textContent = "Leaozao do mato"
});
document.getElementById("btn-4").addEventListener('click',()=>{
    imagem.src = '../assets/tung.webp'
    descricao.textContent = "TUNG TUNG SAHUR!"
});



document.getElementById('buttonModal').addEventListener('click', () =>{
    modal.style.display = "flex"
})
document.getElementById('fechar').addEventListener('click', () =>{
    modal.style.display = "none"
})