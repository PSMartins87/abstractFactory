import IArcraft from "./interfaces/IArcraft";

export default class Helicopter implements IArcraft {
    startRoute(): void {
        this.checkWind();
        this.getCargo();
        console.log("helicoptero iniciando decolagem");
    }
    getCargo(): void {
        console.log("helicoptero passageiros a bordo");
    }
    checkWind(): void {
        console.log("helicoptero vento a 40 km/h");
    }
}
