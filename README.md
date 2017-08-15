This is a (hopefully) working example of a project testable with ts-semantic-tests as it stands currently. I'll try to keep this updated as that project evolves.

## Installation
Grab this source, run `npm install` in it.

## Building
```
$ npm run build
```

## Testing
```
$ npm test
```

## Structure

This project uses Jest for tests. Most modern testing frameworks have inbuilt facilities for processing TypeScript tests, but ts-semantic-tests cannot (easily) be integrated with those. For now, tests operate in two phases. `tsst` transforms and compiles tests into the `js-tests` directory, where Jest then runs the tests.