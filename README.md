# Signal Brief — Competitive Intelligence Digest

An automated weekly competitive intelligence pipeline monitoring the fast-casual restaurant space, written from the perspective of an in-house analyst at Cava.

## What It Does

Pulls public competitive signals across Cava, Sweetgreen, Chipotle, and Shake Shack — press releases, job postings, and news — and synthesizes them into a structured weekly brief stored in Notion.

## Stack

- **n8n** — workflow automation
- **Anthropic API** — AI synthesis and brief generation
- **Notion** — brief storage and display
- **GitHub** — version control

## Data Sources

- Press release RSS feeds
- Google News RSS feeds
- Job postings (Greenhouse / Lever)

## Folder Structure

- `/workflows` — n8n workflow exports
- `/briefs` — archived brief outputs
- `/docs` — architecture notes and documentation
- `/config` — configuration files (API endpoints, brand list)

## Status

Phase 0 — Setup in progress
