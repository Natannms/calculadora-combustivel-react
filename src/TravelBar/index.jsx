import React, { useEffect, useState } from 'react'  
import Input from '../DirectionMaps/inputs/Input';
import Button from '../hooks/Button';
import './index.css'
const Travelbar = ({dataMap}) => {  
    const { gasto, handleChangeFields} = dataMap

    const [fieldOrigem, setFieldOrigem] = useState(null); 
    const [fieldDestino, setFieldDestino] = useState(null);

    return (
        <div className='SearchBar'>
               <Input  width="420px" name="origin" id="origin" type="text" title="Partida" className="input-vertical" value={fieldOrigem} onChange={(e)=>setFieldOrigem(e.target.value)}/>

               <Input  width="420px" name="destination" id="destination" type="text" title="Destino" className="input-vertical" value={fieldDestino} onChange={(e)=>setFieldDestino(e.target.value)}/>

              <div className="input-button-vertical">
                <Button title="Calcular"  onClick={()=>{handleChangeFields(fieldOrigem, fieldDestino)}}/>
              </div>

              <div  className={gasto ? 'formmatMoney' : 'waiting'}>
                {gasto ? <p>R${gasto.toFixed(2)}</p> : 'Aguardando ...'}
              </div>
         </div>
         
    );  
}
export default Travelbar; 
