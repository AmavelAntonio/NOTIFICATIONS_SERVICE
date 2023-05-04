import { Notifications } from "src/app/entities/notifications";
import { NotificationRepository } from "src/app/repository/notifications-repository";


export class InMemoryNotificationsRepository implements NotificationRepository {
    public notifications: Notifications[] = [];

    async create(notification: Notifications) {
        this.notifications.push(notification)
    }
}