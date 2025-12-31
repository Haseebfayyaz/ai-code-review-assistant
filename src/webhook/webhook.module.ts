import { Module } from '@nestjs/common';
import { WebhookController } from './webhook.controller';
import { ReviewModule } from '../review/review.module';

@Module({
  imports: [ReviewModule],
  controllers: [WebhookController],
})
export class WebhookModule {}
