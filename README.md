Live Preview: https://jtomaszewski.github.io/frontend-test

## Running

```sh
yarn
yarn start
# Go to http://localhost:3000
```

## Testing

```sh
yarn test
```

## Info for task reviewers

1.  I decided to transform the app to TS right in the beginning, because I prefer to write type definitions while/before the actual code, instead of adding them after the code is already written and working. (It makes coding easier!)

    [P.S. I'm a big fan of TypeScript.](https://medium.com/@jtomaszewski/why-typescript-is-the-best-way-to-write-front-end-in-2019-feb855f9b164) I had been coding in it for over two years now.

2.  I went with `@apollo/react-hooks` as a library for GQL API because:

    - I had been already using it (or [a similar package](https://github.com/trojanowski/react-apollo-hooks)) for the past year and loved it a lot
    - I didn't want to reinvent the wheel by reimplementing a GQL client.

3.  I extracted logic part from `CountryInfo` to `CountryInfoCard` so that `CountryInfo` only has the logic for the API request. I like to do it very often - to extract "impure" code from components to a hook or a higher-level component.

    This makes testing UI/business logic in isolation easier; and also makes reusing or previewing the UI components to the designers easier. [I gave a presentation about it a few times on a few front-end meetups.](https://jtom.me/talks/make-your-components-pure-and-dumb-and-composable.pdf)

4.  For mocking out the GQL request I used `@apollo/react-testing`. I think it solves the goal quite well. If I hadn't been using Apollo, but i.e. `fetch` directly, then I'd use `fetch-mock` instead.

5.  I didn't put any extra effort to styling, design or CSS. If you'd give me better designs, I'd code it ;) If you want to see how good I'm at css or design polish, I can send you some links via priv to the recent projects I was working on (or just see [my portfolio](https://jtom.me/portfolio/)). Usually I'm very attentive when it comes to design details! Pixel-perfect to the pain ;p

6.  I chose to add `enzyme` as a component testing library because it lets you see if the component A renders component B (with some given set of props). Without it, unit tests become a bit more like e2e tests (I even argued about it [with some guy on Twitter](https://twitter.com/jtompl/status/1149205485192654848)). But it's just my taste. If you guys prefer `react-testing-library`, I'd be totally okay with it as well.

## Stuff that I'd consider doing in a larger project

- In my previous project, we've been extracting any GQL-related code to separate hooks in separate files. Then, we were able to test it in isolation using [react-hooks-testing-library](https://github.com/testing-library/react-hooks-testing-library). Depending on the project, maybe it would be a good solution there as well.

- Using css-in-js. I've been using `styled-components` for the last year and liked it quite a lot. In the projects which don't use css-in-js however, I usually use [css-modules](https://github.com/css-modules/css-modules) together with BEM naming, so that the CSS is unique per component AND readable to all the devs.
