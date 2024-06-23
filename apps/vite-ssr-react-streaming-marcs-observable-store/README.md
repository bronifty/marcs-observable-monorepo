# Vite SSR React Streaming Marcs Observable Shared State

```sh
pnpm i && pnpm dev
```

Note:

- the start script is precompiling which takes as long as the suspense to render then loads immediately. The implication is that the server is not streaming the html to the client in prod, only in dev, so just use the dev script above for now. But you can use prod too.

```sh
pnpm start
```
