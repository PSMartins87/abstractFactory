import IArcraft from "./interfaces/IArcraft";

export default class Drone implements IArcraft {
    startRoute(): void {
        this.checkWind();
        this.getCargo();
        console.log("Drone decolou");
    }
    getCargo(): void {
        console.log("Drone está carregado");
    }
    checkWind(): void {
        console.log("Drone vento a 20 km/h");
    }
}
