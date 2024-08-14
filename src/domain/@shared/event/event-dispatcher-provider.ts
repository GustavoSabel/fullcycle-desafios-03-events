import EnviaAddressConsoleLogHandler from "../../customer/event/handler/envia-address-console-log-handler";
import EnviaConsoleLog1Handler from "../../customer/event/handler/envia-console-log1-handler";
import EnviaConsoleLog2Handler from "../../customer/event/handler/envia-console-log2-handler";
import SendEmailWhenProductIsCreatedHandler from "../../product/event/handler/send-email-when-product-is-created.handler";
import EventDispatcher from "./event-dispatcher";

// Essa parte eu não soube bem como fazer
// Fiz dessa forma para simplificar o compartilhamento dessa variável entre o sistema
// pois entendo que todo o sistema deve usar a mesma instância de EventDispatcher
// E também fiz assim para facilitar o acesso ao EventDispatcher em qualquer lugar do sistema, sem precisar ter que ficar passando como parâmetro
const eventDispatcher = new EventDispatcher()
eventDispatcher.register("ProductCreatedEvent", new SendEmailWhenProductIsCreatedHandler());
eventDispatcher.register("CustomerCreatedEvent", new EnviaConsoleLog1Handler());
eventDispatcher.register("CustomerCreatedEvent", new EnviaConsoleLog2Handler());
eventDispatcher.register("CustomerAddressChangedEvent", new EnviaAddressConsoleLogHandler());

export {
   eventDispatcher
};