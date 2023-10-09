import React, { useEffect, useState } from 'react'

const Hero = () => {

    let numeroPersonaje = 4;
    let pagina = 12;
    let objeto = [];
    const [personaje,setPersonaje] = useState({"name":"", "origin":"", "location":""});
    const [cambio,setCambio] = useState(1);

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
        numeroPersonaje = Math.round(Math.random()*19);
        pagina = Math.round(Math.random()*42);

    }

    function cambiarPersonaje(){
        setCambio(cambio+1);
    }

    useEffect(()=>{
        inicializar();
        obtenerPersonaje();
    },
    [cambio])


  return (
    <div className="container-fluid mt-2">
          <div className="card" style={{width: 24 + 'em'}}>
              <img src={personaje.image} className="card-img-top" alt="Personaje de Rick and Morty"></img>
              <div className="card-body">
                  <h2 className="card-title">{personaje.name}</h2>
                  <h3>Species: {personaje.species}</h3>
                  <h3 className="card-title">Gender: {personaje.gender}</h3>
                  <h3>Origin: {personaje.origin.name}</h3>
                  <h3>Location: {personaje.location.name}</h3>
                  <p className="card-text"></p>
                  <button type="button" className="btn btn-success" onClick={cambiarPersonaje}>Success</button>
              </div>
          </div>
    </div>
  )
}

export default Hero
