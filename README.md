# NodeJS Starter Template

The initial structure and workflows essential for any NodeJS project.

**Remember to change the git config details in the workflows and fill in the placeholders for `<owner>`, `<owner_name>`, `<repo_name>`, etc. in the respective files.** 

**The linter for Markdown has been disabled in this template. To enable it go to the `super-linter.yml` in the workflows directory and remove the line `VALIDATE_MARKDOWN: false`. To run the linter only on the changed files instead of the entire repository change `VALIDATE_ALL_CODEBASE` to either `true` or `false` depending on your requirement.**

# Remember: Semantic Commit Messages

See how a minor change to your commit message style can make you a better programmer.

Format: `<type>(<scope>): <subject>`

`<scope>` is optional

## Example

```
feat: add hat wobble
^--^  ^------------^
|     |
|     +-> Summary in present tense.
|
+-------> Type: chore, docs, feat, fix, refactor, style, or test.
```

More Examples:

- `feat`: (new feature for the user, not a new feature for build script)
- `fix`: (bug fix for the user, not a fix to a build script)
- `docs`: (changes to the documentation)
- `style`: (formatting, missing semi colons, etc; no production code change)
- `refactor`: (refactoring production code, eg. renaming a variable)
- `test`: (adding missing tests, refactoring tests; no production code change)
- `chore`: (updating grunt tasks etc; no production code change)
