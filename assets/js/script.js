function iniciarDeclaracao() {
    document.getElementById("musica").play();
    document.getElementById("startBtn").style.display = "none";
    document.body.style.background = "linear-gradient(135deg,rgb(255, 132, 162),rgb(255, 82, 140))";
    
    const texto = `Na minha memória cache só tem você🧠.
Minha mente passa o dia fazendo requisições do seu sorriso👩.
Entrei num loop onde todas as condições
só se satisfazem com você❣.

No banco de dados do meu coração
guardo o meu amor💝,
mas o servidor só irá distribuir esse amor
se você fizer a requisição💌.

Espero assincronamente o seu "Sim"🙇‍♂️
para que possamos fazer esse upgrade,
Atualmente, nossa query retorna apenas "amigos",
mas espero um update para "namorados"💏.

Quero ser seu amigo,
mas quero ser também seu namorado.
E futuramente, numa atualização mais robusta,
quero ser seu marido,
quero ser o seu eterno esposo amado!👰🤵💞`;
    let i = 0;
    let elemento = document.getElementById("declaracao");
    
    function digitar() {
        if (i < texto.length) {
            elemento.innerHTML += texto.charAt(i);
            i++;
            setTimeout(digitar, 120);
        } else {
            criarCoracoes();
        }
    }
    digitar();
}

function criarCoracoes() {
    setInterval(() => {
        let heart = document.createElement("div");
        heart.innerHTML = "❤️";
        heart.classList.add("heart");
        document.body.appendChild(heart);
        
        let x = Math.random() * window.innerWidth;
        let y = window.innerHeight;
        heart.style.left = x + "px";
        heart.style.top = y + "px";
        
        setTimeout(() => heart.remove(), 2000);
    }, 300);
}