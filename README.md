This settings are comfortable for you when use `git commit`.

- [commitizen](https://www.npmjs.com/package/commitizen)
- [okonet/lint-staged](https://github.com/okonet/lint-staged)(prettier,eslint,stylelint)
- [generate-changelog](https://www.npmjs.com/package/generate-changelog)
- [husky](https://github.com/typicode/husky)
- [commitlint](https://github.com/marionebl/commitlint)

# Usage

## lint-staged, commitzen

After run `git add`

### If you are using yarn

```
yarn cmt
```

### If you are using npm

```
npm run cmt
```

## generate-changelog

Choose any one from among these when on master branch.

```
"release:major"

"release:minor"

"release:patch"
```

> NOTE:  
> About option `-u`
>
> Supports these service
>
> - github
> - gitlab
> - bitbucket
