import EventDispatcher from "../../../@shared/event/event-dispatcher";
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
      new CustomerCreatedEvent({
        name: "Test",
      })
    );

    expect(spyEventHandler).toHaveBeenCalled();
  });
});
