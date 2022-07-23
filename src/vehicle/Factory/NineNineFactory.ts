import Helicopter from "../aerial/Helicopter";
import IArcraft from "../aerial/interfaces/IArcraft";
import ILandVehicle from "../land/interfaces/ILandVehicle";
import Motorcycle from "../land/motorcycle";
import ItransportFactory from "./interfaces/ITransporFactory";

export default class NineNineFactory implements ItransportFactory {
    createTranspotVehicle(): ILandVehicle {
        return new Motorcycle();
    }
    
    createtransportAircraft(): IArcraft {
        return new Helicopter();
    }
}
