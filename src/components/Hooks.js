import { useState, useEffect } from "react";

const Hooks = () => {

    let idade = 30;
    const [novaIdade, setonvaIdade] = useState(40)

    const changeAge = () => {
        idade = 31;
        console.log(idade);
    };

    const changeNewAge = () => {
        setonvaIdade(45);
    }

    useEffect(() => {
        console.log("Testando");
    });

    return (
        <div>
            <p>Idade: {idade}</p>
            <button onClick={changeAge}>Mudar Idade</button>
            <p>Idade: {novaIdade}</p>
            <button onClick={changeNewAge}>Mudar Idade</button>
        </div>
    );
};

export default Hooks;