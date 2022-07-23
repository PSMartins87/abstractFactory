import Drone from "../aerial/Drone";
import IArcraft from "../aerial/interfaces/IArcraft";
import ILandVehicle from "../land/interfaces/ILandVehicle";
import Scooter from "../land/Scooter";
import ItransportFactory from "./interfaces/ITransporFactory";

export default class LimeFactory implements ItransportFactory{
    createTranspotVehicle(): ILandVehicle {
        return new Scooter();
    }
    createtransportAircraft(): IArcraft {
        return new Drone();
    }

}