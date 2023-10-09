import React, { useEffect, useState } from 'react'

const Hero = () => {

    let numeroPersonaje = 4;
    let pagina = 12;
    let objeto = [];
    //let tarjeta;
    const letrasOscuras = "#353535";
    const letrasClaras = "#f2f2f2";
    const [personaje,setPersonaje] = useState({"name":"", "origin":"", "location":""});
    const [cambio,setCambio] = useState(1);
    const [tema,setTema] = useState(1);

    async function obtenerPersonaje(){
        await fetch(`https://rickandmortyapi.com/api/character/?page=${pagina}`)
        .then((response) => response.json())  
	    .then((personajes) => {
            objeto = Object.values(personajes);
            return objeto;
        }).then((objeto) => {
            setPersonaje(objeto[1][numeroPersonaje]);
        }).then((personaje)=>console.log(personaje));

    }

    function inicializar(){
        numeroPersonaje = Math.round(Math.random()*18);
        pagina = Math.round(Math.random()*41);

    }

    function cambiarPersonaje(){
        setCambio(cambio+1);
    }

    function cambiarTema(_tarjeta){
        //let tema = Math.round(Math.random()*20);
        //let tema = 1;

        setTema(Math.round(Math.random()*20));

        switch(tema){
            case 1: _tarjeta.style.backgroundColor = "#cdf13c";
            _tarjeta.style.color = letrasOscuras;break;
            case 2: _tarjeta.style.backgroundColor = "##4b1d62";
            _tarjeta.style.color = letrasClaras;break;
            case 3: _tarjeta.style.backgroundColor = "#136bd2";
            _tarjeta.style.color = letrasClaras;break;
            case 4: _tarjeta.style.backgroundColor = "#fb6956";
            _tarjeta.style.color = letrasClaras;break;
            case 5: _tarjeta.style.backgroundColor = "#6f21db";
            _tarjeta.style.color = letrasClaras;break;
            case 6: _tarjeta.style.backgroundColor = "#6de440";
            _tarjeta.style.color = letrasOscuras;break;
            case 7: _tarjeta.style.backgroundColor = "#fd8733";
            _tarjeta.style.color = letrasOscuras;break;
            case 8: _tarjeta.style.backgroundColor = "#cc355a";
            _tarjeta.style.color = letrasClaras;break;
            case 9: _tarjeta.style.backgroundColor = "#a0aef2";
            _tarjeta.style.color = letrasOscuras;break;
            case 10: _tarjeta.style.backgroundColor = "#75d7ee";
            _tarjeta.style.color = letrasOscuras;break;
            case 11: _tarjeta.style.backgroundColor = "#17c08e";
            _tarjeta.style.color = letrasClaras;break;
            case 12: _tarjeta.style.backgroundColor = "#d90285";
            _tarjeta.style.color = letrasClaras;break;
            case 13: _tarjeta.style.backgroundColor = "#75625e";
            _tarjeta.style.color = letrasClaras;break;
            case 14: _tarjeta.style.backgroundColor = "#b0253a";
            _tarjeta.style.color = letrasClaras;break;
            case 15: _tarjeta.style.backgroundColor = "#fc3358";
            _tarjeta.style.color = letrasClaras;break;
            case 16: _tarjeta.style.backgroundColor = "#939923";
            _tarjeta.style.color = letrasClaras;break;
            case 17: _tarjeta.style.backgroundColor = "#be8402";
            _tarjeta.style.color = letrasClaras;break;
            case 18: _tarjeta.style.backgroundColor = "#1cb3ad";
            _tarjeta.style.color = letrasOscuras;break;
            case 19: _tarjeta.style.backgroundColor = "#03049c";
            _tarjeta.style.color = letrasClaras;break;
            case 20: _tarjeta.style.backgroundColor = "#b75104";
            _tarjeta.style.color = letrasClaras;break;
            default: _tarjeta.style.backgroundColor = "#bc0035";
            _tarjeta.style.color = letrasClaras;break;
        }

    }

    useEffect(()=>{
        let tarjeta = document.getElementById("tarjeta");
        cambiarTema(tarjeta);
        inicializar();
        obtenerPersonaje();
    },
    [cambio])


  return (
    <div className="container mx-auto">
          <div className="card my-4 mx-auto p-2" id="tarjeta" style={{width: 18 + 'em'}}>
              <img src={personaje.image} className="card-img-top" alt="Personaje de Rick and Morty"></img>
              <div className="card-body">
                  <h2 className="card-title">{personaje.name}</h2>
                  <h6>Species: {personaje.species}</h6>
                  <h6>Status: {personaje.status}</h6>
                  <h6 className="card-title">Gender: {personaje.gender}</h6>
                  <h6>Origin: {personaje.origin.name}</h6>
                  <h6>Location: {personaje.location.name}</h6>
                  <p className="card-text"></p>
                  <div class="btn-group" role="group" aria-label="Basic example">
                      <button type="button" class="btn btn-dark" onClick={cambiarPersonaje}>Change</button>
                  </div>
              </div>
          </div>
    </div>
  )
}

export default Hero
