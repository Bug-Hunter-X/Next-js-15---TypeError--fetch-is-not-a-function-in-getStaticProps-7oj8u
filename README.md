# Next.js 15 - Fetch Error in getStaticProps

This repository demonstrates a common runtime error encountered in Next.js 15 applications when using `fetch` within `getStaticProps` outside the `pages` directory.  The error, "TypeError: fetch is not a function," arises because the `node-fetch` library isn't automatically available in the `getStaticProps` environment.

## Problem

The provided example showcases a Next.js application with a page at `/about`. This page attempts to fetch data using `node-fetch` within `getStaticProps`. This will fail in a standard Next.js 15 environment because `fetch` is not globally available in that context.

## Solution

The solution is to explicitly import `node-fetch` into the component.

## How to reproduce the bug

1. Clone this repository.
2. Run `npm install`.
3. Run `npm run dev`.
4. Navigate to `/about`.
5. Observe the runtime error.

## How to fix the bug

1. Uncomment the import statement in the `pages/about.js` file. 
2. Restart the development server.
3. Navigate to `/about` again to verify the successful data fetching and rendering.
