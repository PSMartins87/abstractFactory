import ILandVehicle from "./interfaces/ILandVehicle";

export default class Scooter implements ILandVehicle {
    startRoute(): void {
        this.getCargo();
        console.log("Patinete iniciou o trajeto");
    }
    
    getCargo(): void {
        console.log("Patinete está carregado");
    }
}
