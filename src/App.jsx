import DirectionMaps from './DirectionMaps';
import GoogleMaps from './GoogleMap';
import logo from './logo.svg';
import Travelbar from './TravelBar';
import React, { useEffect, useState } from 'react' ;

function App() {
  const [origem , setOrigem] = useState('');
  const [destino, setDestino] =  useState('');
  const [distance, setDistance] = useState(null);
  const [gasto, setGasto] = useState(null)
  const [eventMap, setEventMap] = useState(null)

  const CalculateCostByFuelType = () =>{
     let fuelPrice= 3.89 //preço do combustivel
     let AverageConsumption= 7.3 // km/por litro do veiculo
      //distance é distancia percorrida
     let result = fuelPrice * (distance / AverageConsumption)
     setGasto(result)
  }

  const handleChangeFields = (novaOrigem, novoDestino)=>{
      setOrigem(novaOrigem)
      setDestino(novoDestino)
      setEventMap(true)      
      CalculateCostByFuelType()
  }

  return (
     <>
         <Travelbar dataMap={{
             gasto, handleChangeFields
        }} />
        
         {<DirectionMaps data={{origem, destino, setDistance, distance, eventMap}} /> }
     </>
  );
}

export default App;