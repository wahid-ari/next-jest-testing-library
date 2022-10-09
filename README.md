This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

command :
```
yarn test-watch
yarn test-watch Code
yarn test-detail -u
yarn test-detail native
```

docs :
- https://testing-library.com/docs/queries/bytestid
- https://testing-library.com/docs/queries/bytext
- https://testing-library.com/docs/dom-testing-library/example-intro
- https://testing-library.com/docs/react-testing-library/example-intro

install this :
```
yarn add --dev @testing-library/react
yarn add --dev @testing-library/jest-dom
yarn add --dev @testing-library/user-event
yarn add --dev jest
yarn add --dev jest-environment-jsdom
```

add package.json script :
```
"test": "jest",
"test-watch": "jest --watchAll",
"test-detail": "jest --verbose"
```

add this file to root :
```
jest.setup.js
jest.config.js
```

add folder :
```
__tests__
```

First, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.js`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.js`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
