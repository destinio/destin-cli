const tsConfigNode = JSON.stringify({
  compilerOptions: {
    target: 'es6',
    module: 'commonjs',
    moduleResolution: 'node',
    outDir: './dist',
    rootDir: './src',

    // "removeComments": true,
    sourceMap: true,
    noImplicitAny: true,
    strictFunctionTypes: true,
    strictNullChecks: true,
    noImplicitThis: true,
    noUnusedParameters: true,
    noFallthroughCasesInSwitch: true,
    allowSyntheticDefaultImports: true,
    noImplicitReturns: true,

    resolveJsonModule: true,
    esModuleInterop: true,

    /* Experimental Options */
    experimentalDecorators: true /* Enables experimental support for ES7 decorators. */,
    emitDecoratorMetadata:
      true /* Enables experimental support for emitting type metadata for decorators. */,

    /* Advanced Options */
    // "skipLibCheck": true,                           /* Skip type checking of declaration files. */
  },
  exclude: ['node_modules', '**/*.spec.ts'],
  include: ['./src/**/*.ts', 'index.d.ts'],
})

export { tsConfigNode }
