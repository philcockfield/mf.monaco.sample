# Module Federation: Monaco Editor (Sample)

A stripped back demonstration repo of exporting the [Monaco](https://github.com/Microsoft/monaco-editor) code editor via [Module Federation](https://webpack.js.org/concepts/module-federation/).

<p>&nbsp;<p>

## Getting Started
From the root run `yarn` to get the "workspace" installed.
```
yarn install
```

<p>&nbsp;<p>


## Structure

```
pkg/
  - host     Consumes the exposed monoaco <Editor> (port 3000)
  - monaco   Exposes an <Editor> (port 3001)
```

### Monaco
The `pkg/monaco/` module is based on the sample webpack configuration found in [browser-esm-webpack-typescript](https://github.com/microsoft/monaco-editor-samples/tree/master/browser-esm-webpack-typescript) example in the [monaco-editor-samples](https://github.com/microsoft/monaco-editor-samples/tree/master/browser-esm-webpack-typescript) repo.

When run standalone (no module-federation) is works fine as per the sample, notably loading it's workers locally:

```
cd pkg/monaco/
yarn start
```

http://localhost:3001/

![working](https://user-images.githubusercontent.com/185555/96317687-6fe8b980-106b-11eb-9c56-3fd84ce6e85f.png)

Note the `/src/MonacoEnvironment.ts` file which provides the editor with a global function used to generate URLs to the web-workers to load.

### Host

To run both the `host` and `monaco` modules together, from the project root:

```
yarn start
```

Then open http://localhost:3000

The `MonacoEnvironment.ts` contains a hack that when running as a federated import it returns the URL to the worker pointing back to it's origin url, eg:

<p>&nbsp;<p>



```
MonacoEnvironment.getWorkerUrl => http://localhost:3001/ts.worker.js
```
<p>&nbsp;<p>

## Problem

![problem](https://user-images.githubusercontent.com/185555/96318022-9c9cd100-106b-11eb-8c74-4743eef66506.png)

When the `http://localhost:3001/ts.worker.js` file is loaded remotely it causes an error 

```
Unexpected usage
    at EditorSimpleWorker.loadForeignModule
```

This appears to be an error internal to Monaco thrown within it's web-worker load sequence.  So something is different when the editor loads locally on it's own dev-server/entry-point vs when that code is imported via Module Federation.

<p>&nbsp;<p>

## Fix Ideas

- Package the workers differently (targetted as `webworker`)? `*`
- Some other MF trick(??)


<p>&nbsp;<p>
<p>&nbsp;<p>
