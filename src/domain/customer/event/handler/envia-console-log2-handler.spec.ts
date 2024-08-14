import EventDispatcher from "../../../@shared/event/event-dispatcher";
import Customer from "../../entity/customer";
import CustomerCreatedEvent from "../customer-created-event";
import EnviaConsoleLog2Handler from "./envia-console-log2-handler";

describe("Created new customer 02", () => {
  it("should notify all event handlers", () => {
    const eventDispatcher = new EventDispatcher();
    const eventHandler = new EnviaConsoleLog2Handler();
    const spyEventHandler = jest.spyOn(eventHandler, "handle");

    eventDispatcher.register("CustomerCreatedEvent", eventHandler);

    expect(eventDispatcher.getEventHandlers["CustomerCreatedEvent"][0]).toMatchObject(
      eventHandler
    );

    eventDispatcher.notify(
      new CustomerCreatedEvent(new Customer("1", "Customer 1"))
    );

    expect(spyEventHandler).toHaveBeenCalled();
  });
});
