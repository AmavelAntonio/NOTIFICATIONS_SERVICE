import { Content } from "./content";
import { Notification } from "./notifications";

describe("Notifications", () => {
    it("Should create notification", () => {

    const notification = new Notification({
        content: new Content("New friend request"),
        recipientId: "test-RecepientId",
        category: "Social"
    })

    expect(notification).toBeTruthy();
    });
})