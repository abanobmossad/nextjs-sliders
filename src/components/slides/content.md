## NextJs

Performance Optimization Techniques in Server-Side Rendering (SSR) with React

### Introduction to SSR

- **What is SSR?**
  - **Definition:** SSR is the process of rendering web pages on the server rather than in the browser. The server sends a fully rendered HTML page to the client.
  - **Benefits:**
    - Improved SEO: Since search engines can easily index fully rendered pages.
    - Faster Time to First Byte (TTFB): Users see content quicker as the server provides a complete page.
    - Enhanced User Experience: Especially on slow connections, users can see content while JavaScript loads.
- **SSR vs. CSR (Client-Side Rendering):**
  - **SSR:** HTML is rendered on the server, sent to the client, and hydrated by React.
  - **CSR:** HTML is rendered in the client’s browser using JavaScript, which means slower initial load but smoother subsequent interactions.

---

There are a couple of benefits to doing the rendering work on the server, including:

- **Data Fetching**: Server Components allow you to move data fetching to the server, closer to your data source. This can improve performance by reducing time it takes to fetch data needed for rendering, and the number of requests the client needs to make.
- **Security**: Server Components allow you to keep sensitive data and logic on the server, such as tokens and API keys, without the risk of exposing them to the client.
- **Caching**: By rendering on the server, the result can be cached and reused on subsequent requests and across users. This can improve performance and reduce cost by reducing the amount of rendering and data fetching done on each request.
- **Performance**: Server Components give you additional tools to optimize performance from the baseline. For example, if you start with an app composed of entirely Client Components, moving non-interactive pieces of your UI to Server Components can reduce the amount of client-side JavaScript needed. This is beneficial for users with slower internet or less powerful devices, as the browser has less client-side JavaScript to download, parse, and execute.
- **Initial Page Load and**  [**First Contentful Paint (FCP)**](https://web.dev/fcp/) : On the server, we can generate HTML to allow users to view the page immediately, without waiting for the client to download, parse and execute the JavaScript needed to render the page.
- **Search Engine Optimization and Social Network Shareability**: The rendered HTML can be used by search engine bots to index your pages and social network bots to generate social card previews for your pages.
- **Streaming**: Server Components allow you to split the rendering work into chunks and stream them to the client as they become ready. This allows the user to see parts of the page earlier without having to wait for the entire page to be rendered on the server.

---

### Performance Optimization in SSR

Next.js comes with a variety of built-in optimizations designed to improve your application's speed and Core Web Vitals.

---

### Code Splitting and Lazy Loading

## How does it improve performance?
---
How Code Splitting Works:

**Code splitting** is a technique used in **Next.js** (and modern JavaScript applications in general) to improve performance by breaking down a JavaScript bundle into smaller chunks. This process allows for more efficient loading of JavaScript code, especially for large applications with multiple pages or complex dependencies.

Dynamic Imports (import()): Next.js leverages dynamic imports using import() to split code into smaller bundles. Instead of loading all JavaScript files upfront, dynamic imports allow components or modules to be loaded asynchronously when they are needed.
