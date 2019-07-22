module.exports = {
  "rules": {
    "header-max-length": [2, "always", 72],
    "scope-case": [2, "always", "pascal-case"],
    "subject-empty": [2, "never"],
    "subject-full-stop": [2, "never", "."],
    "type-empty": [2, "never"],
    "type-case": [2, "always", "lower-case"],
    "type-enum": [2, "always",
      [
        "typescript",
        "deprecated",
        "build",
        "chore",
        "ci",
        "docs",
        "feat",
        "fix",
        "perf",
        "refactor",
        "revert",
        "style",
        "test",
        "temp"
      ]
    ]
  }
}
