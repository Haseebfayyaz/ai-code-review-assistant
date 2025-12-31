import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { WebhookModule } from './webhook/webhook.module';
import { ReviewModule } from './review/review.module';
import { AiModule } from './ai/ai.module';
import { GitModule } from './git/git.module';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    ConfigModule.forRoot(),
    WebhookModule,
    ReviewModule,
    AiModule,
    GitModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
