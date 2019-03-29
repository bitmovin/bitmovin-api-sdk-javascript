module.exports = {
  "transform": {
    "^.+\\.ts$": "ts-jest"
  },
  "testRegex": "/test/.*.test.ts$",
  "moduleFileExtensions": [
    "ts",
    "js",
    "json"
  ],
  "globals": {
    "ts-jest": {
      "tsConfig": "tsconfig.json"
    },
    "__VERSION__": "test"
  }
};
