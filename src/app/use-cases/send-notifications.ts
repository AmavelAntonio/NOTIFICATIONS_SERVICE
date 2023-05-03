import { Content } from "../entities/content";
import { Notification } from "../entities/notifications";

interface SendNotificationsResponse {
    notification: Notification
}

interface SendNotificationsRequest {
    recipientId: string
    content: string
    category: string
}

export class SendNotifications {

    async execute (request: SendNotificationsRequest ): Promise<SendNotificationsResponse> {
        const { recipientId, content, category } = request;

        const notification = new Notification({
            recipientId,
            content: new Content(content),
            category
        })

        return {
            notification
        }
    }
}