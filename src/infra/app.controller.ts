import { Controller, Get, Post, Body } from '@nestjs/common';
import { randomUUID } from "node:crypto"
import { PrismaService } from '../prisma.service';

@Controller("notifications")
export class AppController {
  constructor(private readonly prisma: PrismaService) {}

  @Get()
  list() {
    return this.prisma.notifications.findMany();
  }

  @Post() 
  async create(@Body() body: any) {
    const { recipientId, content, category } = body;

    await this.prisma.notifications.create({
      data: {
        id: randomUUID(),
        content,
        category,
        recipientId
      }
    })
  }
}
