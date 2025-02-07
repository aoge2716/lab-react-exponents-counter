const Exponents = (props) => {
    let exp = props.exponent;

    const expo = ()=>{
        let str = props.count;
        for (let i=0;i<exp;i++){
            str+= ` * ${props.count} `;
        }
        console.log(props.count);
        return str;
    }
    return(
        <div className="exponent-counter-container">
            <label>
                Exponents:
                <input 
                    type="number" 
                    placeholder="0"
                    min={0}
                    required={true}
                    value={exp}
                    onChange={e => props.setExponent(Number(e.target.value))}
                />
            </label>
            
            <p className="exponent-label">{props.count}^{exp}</p>
            <p className="exponent-result"> {expo()} = <span className="total">{props.count** exp}</span></p>
        </div>
    )
    
};
  
  export default Exponents;