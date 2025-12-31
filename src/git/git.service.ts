/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unsafe-return */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
import { Injectable } from '@nestjs/common';
import axios from 'axios';

@Injectable()
export class GitService {
  private githubToken = process.env.GITHUB_TOKEN;

  async getPullRequestDiff(payload: any): Promise<string> {
    const diffUrl = payload.pull_request.diff_url;

    const response = await axios.get(diffUrl, {
      headers: {
        Authorization: `Bearer ${this.githubToken}`,
        Accept: 'application/vnd.github.v3.diff',
      },
    });

    return response.data;
  }

  async postComment(payload: any, review: any[]) {
    const commentsUrl = payload.pull_request.comments_url;

    const body = this.formatComment(review);

    await axios.post(
      commentsUrl,
      { body },
      {
        headers: {
          Authorization: `Bearer ${this.githubToken}`,
        },
      },
    );
  }

  private formatComment(reviews: any[]) {
    return `
### 🤖 AI Pre-Review Results

${reviews
  .map(
    (r) =>
      `**${r.severity.toUpperCase()}**  
📄 ${r.file}:${r.lines}  
❗ ${r.problem}  
✅ ${r.suggestion}`,
  )
  .join('\n\n')}
`;
  }
}
