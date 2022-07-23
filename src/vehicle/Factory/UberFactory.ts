import Airplane from "../aerial/Airplane";
import IArcraft from "../aerial/interfaces/IArcraft";
import Car from "../land/car";
import ILandVehicle from "../land/interfaces/ILandVehicle";
import ItransportFactory from "./interfaces/ITransporFactory";

export default class UberFactory implements ItransportFactory {
    createTranspotVehicle(): ILandVehicle {
        return new Car();
    }
    
    createtransportAircraft(): IArcraft {
        return new Airplane();
    }
}
