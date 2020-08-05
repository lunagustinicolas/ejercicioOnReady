console.log("Ejercicio OnReady:");
console.log("------------------")
//declaro una super clase con atributos y metodos comunes entre autos y motos:
class Vehiculo {
    constructor(_marca, _modelo, _precio){
        this.marca = _marca;
        this.modelo = _modelo;
        this.precio = _precio;
    }
    getMarca(){
        return this.marca;
    }
    getModelo(){
        return this.modelo;
    }

    getPrecio(){
        return Number(this.precio.toFixed(2));
    }



}


class Auto extends Vehiculo {

    constructor(_marca, _modelo, _puertas, _precio){
        super(_marca,_modelo,_precio);
        this.puertas = _puertas;
        
    }

    getPuertas(){
        return this.puertas;
    }

    getInfo(){
        console.log("Marca: "+ this.marca + "// Modelo: " + this.modelo +" // Puertas: "+ this.puertas + " // Precio: $" + this.precio.toFixed(2));
    }

}

class Moto extends Vehiculo {

    constructor(_marca, _modelo, _cilindrada, _precio){
        
        super(_marca, _modelo, _precio);
        this.cilindrada = _cilindrada;
        
    }
    getCilindrada(){
        return this.cilindrada;
    }
    getInfo(){
        console.log("Marca: "+ this.marca + "// Modelo: " + this.modelo +" // Cilindrada: "+ this.cilindrada + "c // Precio: $" + this.precio.toFixed(2));
    }

}

// instancio los objetos 

var auto1 = new Auto("Peugeot", "206", 4, 200000);
var moto1 = new Moto("Honda", "Titan", 125, 60000);
var auto2 = new Auto("Peugeot", "208", 5, 250000);
var moto2 = new Moto("Yamaha", "YBR", 160, 80500);

// guardo  los vehiculos en un array, asi es mas facil  la impresion:
var vehicles = [auto1, moto1, auto2, moto2];

// imprimo en un ciclo:

for(let i = 0; i < vehicles.length; i++){

    vehicles[i].getInfo();
}
    
console.log("=============================");

/*
Vehículo más caro: Peugeot 208
Vehículo más barato: Honda Titan
Vehículo que contiene en el modelo la letra ‘Y’: Yamaha YBR $80.500,50
*/

//FUNCIONES 

function maximo(lista){
    var maximo = -200000;
    var aux = 0;
  for(let i = 0; i <  lista.length; i++){
   
    if(lista[i].getPrecio() > maximo ){
        aux  = lista[i];
        maximo = lista[i].getPrecio();
        
    }
  }
  return console.log("Vehículo más caro: " + aux.getMarca() + " " + aux.getModelo());
}

function minimo(lista){
    var minimo = 200000000;
    var aux = 0;
  for(let i = 0; i <  lista.length; i++){
   
    if(lista[i].getPrecio() < minimo ){
        aux  = lista[i];
        minimo = lista[i].getPrecio();
        
    }
  }
  return console.log("Vehículo más barato: " + aux.getMarca() + " " + aux.getModelo());
}
function letra(lista){
    var aux
    for (let i = 0; i <lista.length; i++){
        if(lista[i].getMarca().includes("Y")){
          aux = lista[i];
        }
    }
    return console.log("Vehículo que contiene en el modelo la letra ‘Y’: " + aux.getMarca() + " " + aux.getModelo() + " $" + aux.getPrecio());
}

//FUNCION DE ORDENAMIENTO
// en este caso usé bubble sort optimizado
function ordernamiento(lista){
    var aux
    for(let i = 0 ; i < lista.length ;i++){
        for(let j = 0; j < lista.length - 1 - i; j++){
            
            if(lista[j].getPrecio() < lista[j + 1].getPrecio()){
                aux = lista[j];
                lista[j] = lista[j + 1];
                lista[j + 1] = aux; 
                
               
            }

        }
    }
    console.log("Vehículos ordenados por precio de mayor a menor: ")
    for(i = 0; i < lista.length;i++){
        console.log(vehicles[i].getMarca(), vehicles[i].getModelo());
    }
}
//funcion que imprime por consola el maximo
maximo(vehicles);
//funcion que imprime por consola el minimo
minimo(vehicles);
//funcion que imprime marca que contiene la letra 'Y'
letra(vehicles);


console.log("=============================");
console.log("----------------");
console.log("EXTRA");
console.log("----------------");
// ordenamiento
ordernamiento(vehicles);



