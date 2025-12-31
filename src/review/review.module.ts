import { Module } from '@nestjs/common';
import { ReviewService } from './review.service';
import { GitModule } from '../git/git.module';
import { AiModule } from '../ai/ai.module';

@Module({
  imports: [GitModule, AiModule],
  providers: [ReviewService],
  exports: [ReviewService],
})
export class ReviewModule {}
