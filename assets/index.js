const video = document.querySelector("video")
const button = document.querySelector("button")

function MediaPlayer(config){    // aqui estamos declarando la "clase" que en Js es un objeto que vamos a instanciar despues en otro
    this.media = config.el;
}

MediaPlayer.prototype.play = function(){   // aqui estamos definiendo un metodo para la clase MediaPLayer que es play, siempre debemos agregarlo al protoype d ela clase
        this.media.play();
}

MediaPlayer.prototype.pause = function(){
    this.media.pause();
}

MediaPlayer.prototype.togglePlay = function(){
    if(this.media.paused){
        this.media.play();
    } else {
        this.media.pause();
    }
}

const player = new MediaPlayer( { el: video });  // instanciamos un nuevo objeto de MediaPlayer que se llama player
button.onclick = () => player.togglePlay();  // aplicamos el metodo play que hemos creado antes en MediaPlayer