import { Notifications } from "../entities/notifications"
import { SendNotifications } from "./send-notifications"
import { InMemoryNotificationsRepository } from "../../../test/respositories/in-memory-notifications-respositories";


describe("Send Notification", () => {
    it("Should be able to send notification", async () => {
        const notificationsRepository = new InMemoryNotificationsRepository();
        const sendNotifications = new SendNotifications(notificationsRepository);

        await sendNotifications.execute({
            content: "This is a notification",
            category: "Social",
            recipientId: "example-recipient-id"
        });

        console.log(notificationsRepository.notifications);
        expect(notificationsRepository.notifications).toHaveLength(1);
    })
})