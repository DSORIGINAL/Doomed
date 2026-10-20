# Doomed — A Gemini-Native Conversational Workbench

**Short GitHub Repository Description**

A powerful, local-first Gemini API client built for deep conversations, branching histories, advanced context caching, reasoning controls, and transparent token analytics.

---

## About Doomed

**Doomed is not another generic AI chatbot frontend.**

It is a specialized, Gemini-native conversational workbench designed for people who use AI as an environment for thinking, researching, experimenting, and exploring complex ideas.

Built around Google's Gemini API, Doomed provides direct control over model behavior, conversation structure, context management, and API usage—capabilities often simplified or hidden by conventional chat applications.

Whether you're investigating competing hypotheses, working through sophisticated technical problems, experimenting with reasoning configurations, or maintaining extensive conversations over time, Doomed is designed to make those interactions more controllable, inspectable, and reusable.

Unlike general-purpose multi-provider clients, Doomed focuses exclusively on Gemini, embracing its native API capabilities rather than abstracting them behind a universal interface.

## Key Features

### 🧠 Gemini-Native Reasoning Controls
- Configurable model selection, thinking levels, and generation parameters.
- Preservation of supported Gemini thought signatures and structured response parts.
- Native Google Search grounding and Gemini code execution.
- Custom system instructions and conversation-specific configurations.

### 🌳 Branching Conversation Architecture
- Regenerate responses without permanently replacing earlier versions.
- Explore alternative answers through independent conversation branches.
- Preserve downstream follow-up messages associated with response versions.
- Fork conversations from earlier messages to investigate different ideas.

### 📌 Advanced Context Caching
- Support for Gemini's implicit and explicit context caching.
- Create, extend, inspect, and delete explicit server-side caches.
- Automatic cache snapshot management as conversations grow.
- Prefix locking and tail-grounding workflows designed to improve context reuse.
- Monitor cached-token usage and estimated savings.

### 📊 Transparent API Analytics
- Detailed input, output, thinking, and cached-token accounting.
- Per-request estimated costs and cumulative usage statistics.
- Append-only request ledger covering generation and auxiliary API calls.
- Exportable usage records for further analysis.

### 📂 Local-First Conversation Management
- IndexedDB-backed persistent conversation history.
- Image, PDF, and text-file attachments.
- JSON workspace backup and restoration.
- Markdown conversation export.
- Persistent response versions, metadata, and available reasoning-continuity information.

### ⚡ Self-Contained Architecture
- Single-file HTML, CSS, and JavaScript application.
- No mandatory build tools or dedicated backend.
- Runs directly in a modern browser.
- Bring your own Gemini API key.
- Designed for inspection, modification, and experimentation.

## Why Doomed?

Most AI interfaces are designed around a simple interaction: ask a question, receive an answer, and move on.

Doomed is designed around a different workflow.

**Ask. Investigate. Challenge. Regenerate. Branch. Compare. Preserve. Continue.**

A sophisticated AI conversation is rarely linear. Ideas evolve, assumptions get challenged, explanations branch into competing possibilities, and earlier discussions become valuable reference material.

Doomed treats these interactions as structured, evolving intellectual work rather than disposable chat messages.

It gives users greater control over how Gemini receives context, how responses are generated, how alternative reasoning paths are explored, and how those conversations are preserved.

## Who Is Doomed For?

Doomed is particularly suited to:

- Researchers and intellectually curious users exploring complex subjects.
- Developers experimenting with Gemini API features and model behavior.
- Students using AI for deep conceptual understanding and problem-solving.
- Power users maintaining long-running, context-heavy conversations.
- Anyone who wants greater transparency, control, and ownership of their Gemini interactions.

## Philosophy

**The interface should adapt to the depth of the user's thinking—not limit it.**

Doomed prioritizes conversational freedom, model transparency, context continuity, and direct access to Gemini's native capabilities.

It is not intended to replace every feature of Google's consumer Gemini application or compete as a universal AI platform.

Its objective is more focused:

**Make sophisticated, long-form interaction with Gemini as controllable, transparent, and exploratory as possible.**

---
Doomed is a human-directed, AI-implemented Gemini workbench developed through iterative multi-model code generation, independent auditing, and defect-driven refinement.
*Doomed is an independent client built around the Google Gemini API and is not an official Google product.*
