var i = 0;
var titulo = document.getElementById("h2");
var paragrafo = document.getElementById("p");
var img = document.getElementById("img");
function proximo(){
    if(i<=3){
        i = i+1;
    if(i == 1){
        titulo.innerHTML = "Sabe o quanto eu gosto de você?"
        paragrafo.innerHTML = "Bom, quando a gente terminou, de inicio não caiu a ficha. Mas depois parei e refletir um pouco, de que não posso forçar algo no qual você não estava bem. Eu estaria sendo ignorante, e narcisista força a você a ficar com alguém, no qual não confia. Então resolvi, seguir em frente."
        img.style.backgroundImage = "url('img/solidao.jpg')"
        img.style.visibility = "visible";
        img.style.position = "relative";
    }
    else if(i==2){
        titulo.innerHTML = "Pensava em você todo dia.";
        paragrafo.innerHTML = "Dias se passava, e você não saia da minha mente, pensava no que eu fiz de errado que fez você perder a confiança em mim. E muitas das vezes, queria que esse termino, fosse temporário e que você voltaria pra mim, e quanto mais demorava, menor a esperança ficava."
        img.style.backgroundImage = "url('img/coracaopartido.jpg')"
    } 
    else if(i==3){
        titulo.innerHTML = "Seguindo a diante.";
        paragrafo.innerHTML = "Todas as vezes que eu via a sua foto, e a foto de nois dois que ainda, tenho, me perco nos momentos em que passamos. Porém vi que não podia ficar assim, e apaguei todas as fotos do celular, e deixando guardas na nuvem, de forma arquivada."
    }else if(i==4){
        titulo.innerHTML = "Não superei...";
        paragrafo.innerHTML = "Mas sempre voltava a ver as sua fotos, e sempre ficava maravilhado e pensativo, imaginando de como seria se eu ainda estivesse contigo."
    }
    else if(i>=4){
        i=4;
    }
    }

}
function retornar(){
    i = i-1;

    if(i<=3){
        if(i == 1){
            titulo.innerHTML = "Sabe o quanto eu gosto de você?"
            paragrafo.innerHTML = "Bom, quando a gente terminou, de inicio não caiu a ficha. Mas depois parei e refletir um pouco, de que não posso forçar algo no qual você não estava bem. Eu estaria sendo ignorante, e narcisista força a você a ficar com alguém, no qual não confia. Então resolvi, seguir em frente."
        }
        else if(i==2){
            titulo.innerHTML = "Pensava em você todo dia.";
            paragrafo.innerHTML = "Dias se passava, e você não saia da minha mente, pensava no que eu fiz de errado que fez você perder a confiança em mim. E muitas das vezes, queria que esse termino, fosse temporário e que você voltaria pra mim, e quanto mais demorava, menor a esperança ficava."
        } 
        else if(i==3){
            titulo.innerHTML = "Seguindo a diante.";
            paragrafo.innerHTML = "Todas as vezes que eu via a sua foto, e a foto de nois dois que ainda, tenho, me perco nos momentos em que passamos. Porém vi que não podia ficar assim, e apaguei todas as fotos do celular, e deixando guardas na nuvem, de forma arquivada."
        }
        else if(i==4){
            titulo.innerHTML = "Não superei...";
            paragrafo.innerHTML = "Mas sempre voltava a ver as sua fotos, e sempre ficava maravilhado e pensativo, imaginando de como seria se eu ainda estivesse contigo."
        }
        else if(i<=1){
            i=1;
        }
        else{
            document.getElementsByTagName('span').innerHTML = "Erro!"
        }
    }
    
}