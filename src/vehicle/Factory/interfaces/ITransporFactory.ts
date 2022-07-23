import IArcraft from "../../aerial/interfaces/IArcraft";
import ILandVehicle from "../../land/interfaces/ILandVehicle";

export default interface ItransportFactory {
    createTranspotVehicle(): ILandVehicle;
    createtransportAircraft(): IArcraft;
}
