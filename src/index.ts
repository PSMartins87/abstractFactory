import Client from "./vehicle/clients/Client";
import company from "./vehicle/const/company";
import typeTransport from "./vehicle/const/typeTransport";
import ItransportFactory from "./vehicle/Factory/interfaces/ITransporFactory";
import LimeFactory from "./vehicle/Factory/LimeFactory";
import NineNineFactory from "./vehicle/Factory/NineNineFactory";
import UberFactory from "./vehicle/Factory/UberFactory";

const currentCompany = company.UBER;
let factory: ItransportFactory;

switch (currentCompany) {
    case company.LIME:
        factory = new LimeFactory();
        break;
    case company.UBER:
        factory = new UberFactory();
        break;
    case company.NINENINE:
        factory = new NineNineFactory();
        break;
    default:
        console.log("companhia não definida");
}
const client = new Client(factory!, typeTransport.AERO);
client.startRoute();
