import WithLogging from "../HOC/WithLogging";
import LoginBase from "./Login"; // keep extension-less for Jest/node resolver

export default WithLogging(LoginBase);
