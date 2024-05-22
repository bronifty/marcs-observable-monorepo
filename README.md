#PNPM monorepo for marcs-observable

### Setup

- web-app is to test the functionality of the package
- web-app has a dependency on marcs-observable package
- install everything from the root, then build marcs-observable, update everything from the root to push the changes to the web-app and finally run it and also test (q to quit because test watches)
- cleanup

```sh
pnpm i
pnpm build
pnpm update
pnpm dev
pnpm test
pnpm clean
```
