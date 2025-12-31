/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { Injectable } from '@nestjs/common';
import { GitService } from '../git/git.service';
import { AiService } from '../ai/ai.service';

@Injectable()
export class ReviewService {
  constructor(
    private readonly gitService: GitService,
    private readonly aiService: AiService,
  ) {}

  async processPullRequest(payload: any) {
    const diff = await this.gitService.getPullRequestDiff(payload);
    const aiReview = await this.aiService.review(diff);

    await this.gitService.postComment(payload, aiReview);
  }
}
