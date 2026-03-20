# The Merry Men

A minimal real-time multiplayer cursor demo using **Bun (WebSockets)** and **React (Bun)**.

## Overview

This project demonstrates how to build a simple real-time system where multiple users can see each other's cursors moving on the screen.

It is intentionally small and focused:

- No auth
- No persistence
- Just live cursor presence

## Structure

```
apps/
  client/     # React + Bun frontend
  server/     # Bun WebSocket server

packages/
  protocol/   # Shared TypeScript types (messages, events)
```

### apps/client

- React app (Bun)
- Connects to WebSocket server
- Sends mouse position
- Renders other users' cursors

### apps/server

- Bun-based WebSocket server
- Tracks connected users
- Broadcasts cursor updates

### packages/protocol

- Shared message types between client and server
- Ensures type safety across the system

Example:

```ts
export type Message =
  | { type: "join"; userId: string; name: string }
  | { type: "cursor_move"; userId: string; x: number; y: number }
  | { type: "leave"; userId: string };
```

## Getting Started

Install dependencies:

```
bun install
```

Run the server:

```
bun run --cwd apps/server dev
```

Run the client:

```
bun run --cwd apps/client dev
```

## Notes

- Cursor updates are throttled to reduce network load
- Rendering is optimized to avoid excessive React re-renders
- The protocol is shared to prevent client/server mismatch

## Future Improvements

- Presence (online users list)
- Names + colors
- Rooms / multiple sessions
- Binary protocol (performance experiment)
- WebRTC (peer-to-peer)

---

Built as a small exploration of real-time systems and multiplayer UX.
