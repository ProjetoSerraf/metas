function FIrstComponent(){

    const nome = "Ricardo"
    const handleClick = () =>{
        console.log("Clicou no botão");
    }
    return(
        <div>
            <p>Primeiro componente</p>
            <p>Nome: {nome}</p>
            {2+2}
            <button onClick={handleClick}>Botão</button>
        </div>
    )
}

export default FIrstComponent