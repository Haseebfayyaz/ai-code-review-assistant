/* eslint-disable @typescript-eslint/no-unsafe-return */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
import { Injectable } from '@nestjs/common';
import axios from 'axios';

@Injectable()
export class AiService {
  private ollma_url = process.env.OLLAMA_URL || '';

  async review(diff: string) {
    const prompt = `
          You are a Senior Software Engineer reviewing a GitHub pull request.

          Rules:
          - Focus only on readability, structure, maintainability
          - Ignore formatting
          - Return ONLY valid JSON array

          Schema:
          [
            {
              "severity": "low|medium|high",
              "file": "file path",
              "lines": "line range",
              "problem": "issue",
              "suggestion": "fix"
            }
          ]

          Code diff:
          ${diff}
        `;

    const response = await axios.post(this.ollma_url, {
      model: 'deepseek-coder:6.7b',
      prompt,
      stream: false,
    });
    return JSON.parse(response.data.response);
  }
}
