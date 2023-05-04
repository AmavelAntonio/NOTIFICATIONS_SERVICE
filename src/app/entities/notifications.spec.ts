import { Content } from "./content";
import { Notifications } from "./notifications";

describe("Notifications", () => {
    it("Should create notification", () => {

    const notification = new Notifications({
        content: new Content("New friend request"),
        recipientId: "test-RecepientId",
        category: "Social"
    })

    expect(notification).toBeTruthy();
    });
})