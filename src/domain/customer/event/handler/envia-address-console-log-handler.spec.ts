import EventDispatcher from "../../../@shared/event/event-dispatcher";
import Customer from "../../entity/customer";
import Address from "../../value-object/address";
import CustomerAddressChangedEvent from "../customer-address-changed-event";
import EnviaAddressConsoleLogHandler from "./envia-address-console-log-handler";

describe("Change address event", () => {
  it("should notify event handlers", () => {
    const eventDispatcher = new EventDispatcher();
    const eventHandler = new EnviaAddressConsoleLogHandler();
    const spyEventHandler = jest.spyOn(eventHandler, "handle");

    eventDispatcher.register("CustomerAddressChangedEvent", eventHandler);

    expect(
      eventDispatcher.getEventHandlers["CustomerAddressChangedEvent"][0]
    ).toMatchObject(eventHandler);

    const customer = new Customer("1", "Customer 1");
    customer.changeAddress(
      new Address("Street 1", 123, "13330-250", "São Paulo")
    );
    eventDispatcher.notify(new CustomerAddressChangedEvent(customer));

    expect(spyEventHandler).toHaveBeenCalled();
  });
});
