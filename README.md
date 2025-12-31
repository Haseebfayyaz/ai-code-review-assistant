# 🤖 AI Code Review Assistant

An AI-powered **pre-review assistant** that automatically reviews code for **readability, structure, and maintainability** before human review.

This tool integrates with **GitHub Pull Requests** and posts actionable feedback directly on PRs, helping teams improve code quality and reduce review time.

---

## ✨ Key Features

- 🔍 **Diff-based code review** (only changed lines)
- 🧠 **AI-driven feedback** using a local LLM (no paid APIs)
- 🧱 Focus on **readability, structure, maintainability**
- 💬 Automatic **PR comments** on GitHub
- 🔒 No source code sent to third-party services
- ⚡ Fast feedback before human review

---

## 🏗️ Architecture Overview

```
GitHub Pull Request
        ↓
   GitHub Webhook
        ↓
   NestJS Backend
        ↓
   Diff Fetcher (GitHub API)
        ↓
   AI Review Engine (Ollama)
        ↓
   Structured Review Output
        ↓
   PR Comment (GitHub)
```

---

## 🛠️ Tech Stack

### Backend
- **NestJS** (TypeScript)
- **Node.js**

### AI Layer
- **Ollama** (local LLM runtime)
- **DeepSeek Coder** (code-focused model)

### Integrations
- **GitHub Webhooks**
- **GitHub REST API**

### Tooling
- Ngrok (local webhook exposure)
- Axios
- Environment-based configuration

---

## 🧠 AI Review Methodology

The AI is instructed to behave as a **Senior Software Engineer** and follows strict rules:

- Review only the PR diff
- Ignore formatting and lint issues
- Focus on:
  - Naming clarity
  - Single Responsibility Principle
  - File/module boundaries
  - Duplication
  - Testability

### Output Format

AI responses are returned as structured JSON:

```json
{
  "severity": "medium",
  "file": "src/user/user.service.ts",
  "lines": "45-62",
  "problem": "Method handles multiple responsibilities",
  "suggestion": "Extract validation and persistence into separate services"
}
```

---

## 🚀 Getting Started

### Prerequisites

- Node.js v18+
- Git
- GitHub account
- Ollama installed locally

---

## 📦 Installation

```bash
# Clone repository
git clone https://github.com/your-username/ai-code-review-assistant.git
cd ai-code-review-assistant

# Install dependencies
npm install
```

---

## 🤖 Setup Local AI (FREE)

### Install Ollama

```bash
curl -fsSL https://ollama.com/install.sh | sh
```

### Pull Model

```bash
ollama pull deepseek-coder:6.7b
```

Ollama runs automatically at:
```
http://localhost:11434
```

---

## 🔐 Environment Variables

Create a `.env` file:

```env
GITHUB_TOKEN=your_github_token
```

> No paid AI API keys required

---

## 🔗 GitHub Webhook Setup

1. Go to **Repository → Settings → Webhooks → Add webhook**
2. Payload URL:

```
https://<ngrok-url>/webhook/github
```

3. Content type: `application/json`
4. Events: **Pull requests**
5. Save

---

## ▶️ Run the Application

```bash
npm run start:dev
```

Expose locally (example using ngrok):

```bash
ngrok http 3000
```

---

## ✅ How It Works in Practice

1. Developer opens a Pull Request
2. GitHub sends webhook event
3. NestJS fetches PR diff
4. AI reviews the code
5. Feedback is posted as a PR comment

This happens **automatically before human review**.

---

## 🎯 Why This Project

This project demonstrates:

- Practical AI integration in real workflows
- Cost-aware engineering decisions
- Clean, scalable backend architecture
- Responsible AI usage with clear boundaries

AI is used as a **quality and productivity multiplier**, not a replacement for developers.

---

## 🔮 Future Enhancements

- Severity-based PR blocking
- Learning from human reviewer overrides
- Multi-language support (PHP, JS, TS)
- CI/CD enforcement
- IDE integrations

---

## 👤 Author

**Haseeb Fayyaz**  
Senior Full Stack Developer  

---

> *AI works best when it supports engineers, not replaces them.*
