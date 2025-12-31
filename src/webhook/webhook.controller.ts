/* eslint-disable @typescript-eslint/no-explicit-any */
import { Controller, Post, Body, Headers } from '@nestjs/common';
import { ReviewService } from '../review/review.service';

@Controller('webhook')
export class WebhookController {
  constructor(private readonly reviewService: ReviewService) {}

  @Post('github')
  async handleGithubPR(
    @Body() payload: any,
    @Headers('x-github-event') event: string,
  ) {
    if (event !== 'pull_request') return { ignored: true };

    await this.reviewService.processPullRequest(payload);
    return { status: 'AI review started' };
  }
}
