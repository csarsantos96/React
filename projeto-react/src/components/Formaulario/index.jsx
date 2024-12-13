import { useState, useEffect } from "react";

const Formulario =() =>{
    let [materiaA, setmateriaA] = useState(0);
    let [materiaB, setmateriaB] = useState(0);
    let [materiaC, setmateriaC] = useState(0);

    useEffect(() =>{
        console.log('O estado mudou')
    });
    
    const renderizaResultado = () =>{
        const soma = materiaA + materiaB + materiaC
        const media = soma / 3;
        console.log(soma);
        console.log(media);

        if (media >= 7){
            return (
                <p>Você foi aprovado</p>
            )
        } else{
            return(
            <p>Você foi reprovado</p>
        )}
    }
    
    return(
        <form>
            <input type="number" placeholder="Nota matéria A" onChange={evento => setmateriaA(parseInt(evento.target.value))}/>
            <input type="number" placeholder="Nota matéria B" onChange={evento => setmateriaB(parseInt(evento.target.value))}/>
            <input type="number" placeholder="Nota matéria C" onChange={evento => setmateriaC(parseInt(evento.target.value))}/>
            {renderizaResultado()}
        </form>
    )
}

export default Formulario;