const RenderCond = ({ x, y }) => {
    return (
        <div>
            {x > 5 && <p>X e maior que 10</p>}
            {x > 5 ? <p>Alto</p> : <p>Baixo</p>}
            <p>o valor de y é {y}</p>
        </div>
    );
};

export default RenderCond;