import IArcraft from "../aerial/interfaces/IArcraft";
import typeTransport from "../const/typeTransport";
import ItransportFactory from "../Factory/interfaces/ITransporFactory";
import ILandVehicle from "../land/interfaces/ILandVehicle";

export default class Client {
    private vehicle: ILandVehicle;
    private aircraft: IArcraft;

    constructor(factory: ItransportFactory, typeOfTransport: string) {
        this.vehicle = factory.createTranspotVehicle();
        this.aircraft = factory.createtransportAircraft();

        switch (typeOfTransport) {
            case typeTransport.LAND:
                this.vehicle = factory.createTranspotVehicle();
                break;
            case typeTransport.AERO:
                this.vehicle = factory.createtransportAircraft();

            default:
        }
    }

    startRoute(): void {
        if (this.vehicle) {
            this.vehicle.startRoute();
        } else if (this.aircraft) {
            this.aircraft.startRoute();
        }
    }
}
