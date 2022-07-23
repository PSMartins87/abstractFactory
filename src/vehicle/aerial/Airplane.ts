import IArcraft from "./interfaces/IArcraft";

export default class Airplane implements IArcraft {
    startRoute(): void {
        this.checkWind();
        this.getCargo();
        console.log("Aviao: iniciando decolagem");
    }
    getCargo(): void {
        console.log("passageiros a bordo");
    }
    checkWind(): void {
        console.log("aviao vento a 30 km/h");
    }
}
