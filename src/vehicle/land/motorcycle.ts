import ILandVehicle from "./interfaces/ILandVehicle";

export default class Motorcycle implements ILandVehicle {
    startRoute(): void {
        this.getCargo();
        console.log("Moto: iniciando trajeto");
    }
    
    getCargo(): void {
        console.log("moto encomenda retirada");
    }
}
