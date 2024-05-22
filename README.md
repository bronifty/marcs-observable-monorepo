#PNPM monorepo for marcs-observable

# Description

Monorepo for building and testing the marcs-observable package, which pushes to jsr.io natively and then is brought down and re-published to npm based on whatever shows up in the node_modules folder when the jsr.io package is installed

- https://jsr.io/@bronifty/marcs-observable
- https://www.npmjs.com/package/marcs-observable?activeTab=code

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

### References

- https://dev.to/vinomanick/create-a-monorepo-using-pnpm-workspace-1ebn
- https://blog.nrwl.io/setup-a-monorepo-with-pnpm-workspaces-and-speed-it-up-with-nx-bc5d97258a7e
- https://jsr.io/@bronifty/marcs-observable/publish
- https://www.youtube.com/watch?v=MFCn4ce5dVc
