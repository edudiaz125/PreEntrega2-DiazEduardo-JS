let nombre = prompt ("Por favor. Ingrese su nombre")
console.log (`Hola, ${nombre}!`)
alert("Hola " + nombre + ". Bienvenido/a!")

const destinos = [
    {id: "1", lugarDestino: "Humahuaca", precio: "$34.000", disponibilidad: "si"},
    {id: "2", lugarDestino: "Purmamarca", precio: "$26.500", disponibilidad: "si"},
    {id: "3", lugarDestino: "Iruya", precio: "$29.700", disponibilidad: "no"},
    {id: "4", lugarDestino: "Cafayate", precio: "$40.500", disponibilidad: "si"},
    {id: "5", lugarDestino: "Cabra Corral", precio: "$36.000", disponibilidad: "si"},
    {id: "6", lugarDestino: "La Cienaga", precio: "$20.000", disponibilidad: "no"},
  ];
  
  let destinoEncontrado = "";
  
  while (true) {
    const idDestino = prompt("¿A que destino desea viajar? \n" +
                                "1) Humahuaca \n" +
                                "2) Purmamarca \n" +
                                "3) Iruya \n" +
                                "4) Cafayate \n" +
                                "5) Cabra Corral \n" +
                                "6) La Cienaga \n" +
                                " \n" +
                                "Ingrese el Destino Deseado.");
  
    destinoEncontrado = destinos.find((destino) => destino.id === idDestino);
  
    if (destinoEncontrado) {
      if (destinoEncontrado.disponibilidad === "si") {
        alert(`Tu destino seleccionado: ${destinoEncontrado.lugarDestino} está disponible✅ y su estadia es de ${destinoEncontrado.precio} pesos`);
      } else {
        const buscarOtro = confirm(`El Destino elegido ${destinoEncontrado.lugarDestino} no estara disponible en los proximos 7 dias😓 ¿Desea buscar otro Destino?`);
        if (!buscarOtro) {
          break; 
        }
      }
    } else {
      const buscarOtro = confirm("El Id del Destino no es correcto❌ ¿Desea buscar otro Destino?");
      if (!buscarOtro){
        break; 
      }
    }
  }
  
  const destinoDisponible = destinos.filter((destino) => destino.disponibilidad === "si");
  
  if (destinoDisponible.length > 0) {
    const DestinosDisponiblesAhora = destinoDisponible.map((destino) => destino.lugarDestino);
    alert(`Actualmente Los Destinos disponibles son:\n✅${DestinosDisponiblesAhora.join("\n✅")}`);
    console.log(`Actualmente Los Destinos disponibles son:\n✅${DestinosDisponiblesAhora.join("\n✅")}`)
  } 
