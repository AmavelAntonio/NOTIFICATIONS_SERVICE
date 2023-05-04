import { Content } from "../entities/content";
import { Notifications } from "../entities/notifications";
import { NotificationRepository } from "../repository/notifications-repository";

interface SendNotificationsResponse {
    notification: Notifications
}

interface SendNotificationsRequest {
    recipientId: string
    content: string
    category: string
}

export class SendNotifications {

    constructor (private NotificationRepository: NotificationRepository) { }

    async execute (request: SendNotificationsRequest ): Promise<SendNotificationsResponse> {
        const { recipientId, content, category } = request;

        const notification = new Notifications({
            recipientId,
            content: new Content(content),
            category
        })

        await this.NotificationRepository.create(notification);

        return {
            notification
        }
    }
}