"use client";

import { useEffect, useRef } from "react";
import Reveal from "reveal.js";
import RevealMarkdown from "reveal.js/plugin/markdown/markdown";
import "reveal.js/dist/reveal.css";
import "reveal.js/dist/theme/black.css";
import RevealHighlight from "reveal.js/plugin/highlight/highlight";
import "./style.css";
import Link from "next/link";

export function Slides() {
  const deckDivRef = useRef<HTMLDivElement>(null);
  const deckRef = useRef<Reveal.Api | null>(null);
  useEffect(() => {
    // Prevents double initialization in strict mode
    if (deckRef.current) return;

    deckRef.current = new Reveal(deckDivRef.current!, {
      transition: "slide",
      width: 960,
      height: 700,

      // Factor of the display size that should remain empty around
      // the content
      margin: 0.1,

      // Bounds for smallest/largest possible scale to apply to content
      minScale: 0.2,
      maxScale: 2.0,
      // Activate the scroll view
      view: "scroll", // other config options
      plugins: [RevealMarkdown, RevealHighlight],
    });

    deckRef.current.initialize().then(() => {
      // good place for event handlers and plugin setups
    });

    return () => {
      try {
        if (deckRef.current) {
          deckRef.current.destroy();
          deckRef.current = null;
        }
      } catch (e) {
        console.warn("Reveal.js destroy call failed.");
      }
    };
  }, []);

  return (
    // Your presentation is sized based on the width and height of
    // our parent element. Make sure the parent is not 0-height.
    <div className="reveal" ref={deckDivRef}>
      <div className="slides">
        <section>
          <section>
            <h2>NextJs</h2>
            <p>Performance Optimization Techniques in Server-Side Rendering (SSR) with React</p>
          </section>
          <section
            data-background-image="https://nextjs.org/_next/image?url=%2Fdocs%2Fdark%2Fclient-and-server-environments.png&w=1920&q=75"
            data-background-opacity="0.3">
            <h3>Introduction to SSR</h3>
            <ul className="text-2xl space-y-6">
              <li>
                <strong>What is SSR?</strong>
                <ul>
                  <li>
                    <strong>Definition:</strong> SSR is the process of rendering web pages on the server rather than in the browser. The
                    server sends a fully rendered HTML page to the client.
                  </li>
                  <li>
                    <strong>Benefits:</strong>
                    <ul>
                      <li>Improved SEO: Since search engines can easily index fully rendered pages.</li>
                      <li>Faster Time to First Byte (TTFB): Users see content quicker as the server provides a complete page.</li>
                      <li>Enhanced User Experience: Especially on slow connections, users can see content while JavaScript loads.</li>
                    </ul>
                  </li>
                </ul>
              </li>
              <li>
                <strong>SSR vs. CSR (Client-Side Rendering):</strong>
                <ul>
                  <li>
                    <strong>SSR:</strong> HTML is rendered on the server, sent to the client, and hydrated by React.
                  </li>
                  <li>
                    <strong>CSR:</strong> HTML is rendered in the client’s browser using JavaScript, which means slower initial load but
                    smoother subsequent interactions.
                  </li>
                </ul>
              </li>
            </ul>
          </section>

          <section>
            <p>There are a couple of benefits to doing the rendering work on the server, including:</p>
            <ul className="text-lg space-y-3">
              <li>
                <span>
                  <strong>Data Fetching</strong>: Server Components allow you to move data fetching to the server, closer to your data
                  source. This can improve performance by reducing time it takes to fetch data needed for rendering, and the number of
                  requests the client needs to make.
                </span>
              </li>
              <li>
                <span>
                  <strong>Security</strong>: Server Components allow you to keep sensitive data and logic on the server, such as tokens and
                  API keys, without the risk of exposing them to the client.
                </span>
              </li>
              <li>
                <span>
                  <strong>Caching</strong>: By rendering on the server, the result can be cached and reused on subsequent requests and
                  across users. This can improve performance and reduce cost by reducing the amount of rendering and data fetching done on
                  each request.
                </span>
              </li>
              <li>
                <span>
                  <strong>Performance</strong>: Server Components give you additional tools to optimize performance from the baseline. For
                  example, if you start with an app composed of entirely Client Components, moving non-interactive pieces of your UI to
                  Server Components can reduce the amount of client-side JavaScript needed. This is beneficial for users with slower
                  internet or less powerful devices, as the browser has less client-side JavaScript to download, parse, and execute.
                </span>
              </li>
              <li>
                <span>
                  <strong>Initial Page Load and&nbsp;</strong>
                </span>
                <a target="_blank" rel="noopener noreferrer" href="https://web.dev/fcp/">
                  <span>
                    <strong>First Contentful Paint (FCP)</strong>
                  </span>
                </a>
                <span>
                  : On the server, we can generate HTML to allow users to view the page immediately, without waiting for the client to
                  download, parse and execute the JavaScript needed to render the page.
                </span>
              </li>
              <li>
                <span>
                  <strong>Search Engine Optimization and Social Network Shareability</strong>: The rendered HTML can be used by search
                  engine bots to index your pages and social network bots to generate social card previews for your pages.
                </span>
              </li>
              <li>
                <span>
                  <strong>Streaming</strong>: Server Components allow you to split the rendering work into chunks and stream them to the
                  client as they become ready. This allows the user to see parts of the page earlier without having to wait for the entire
                  page to be rendered on the server.
                </span>
              </li>
            </ul>
          </section>

          <section>
            <h3>Performance Optimization in SSR</h3>
            <p className="text-lg">
              Next.js comes with a variety of built-in optimizations designed to improve your application's speed and Core Web Vitals.
            </p>
          </section>

          <section>
            <h3>Code Splitting and Lazy Loading</h3>
            <p className="text-xl">How does it improve performance?</p>
          </section>

          <section>
            <p> How Code Splitting Works:</p>
            <p className="text-2xl">
              <strong>
                <Link href="/code-splitting" target="__blank">
                  Code splitting{" "}
                </Link>
              </strong>
              is a technique used in <strong>Next.js</strong> (and modern JavaScript applications in general) to improve performance by
              breaking down a JavaScript bundle into smaller chunks. This process allows for more efficient loading of JavaScript code,
              especially for large applications with multiple pages or complex dependencies.
            </p>

            <p className="text-2xl" data-markdown="">
              {`**Dynamic Imports:** **Next.js** leverages dynamic imports using **\`import()\`** to split code into smaller
              bundles. Instead of loading all JavaScript files upfront, dynamic imports allow components or modules to be loaded
              asynchronously when they are needed.`}
            </p>

            <pre>
              <code data-trim data-noescape>
                {`import dynamic from 'next/dynamic';

const DynamicComponent = dynamic(() => import('./Component'), {
  loading: () => <p>Loading...</p>,
});

function HomePage() {
  return <DynamicComponent />
}`}
              </code>
            </pre>
          </section>

          <section
            data-background-image="https://nextjs.org/_next/image?url=%2Fdocs%2Fdark%2Fcaching-overview.png&w=1920&q=75"
            data-background-opacity="0.3">
            <h3>Caching in Next.js</h3>
            <p className="text-xl">
              By default, Next.js will cache as much as possible to improve performance and reduce cost. This means routes are statically
              rendered and data requests are cached unless you opt out
            </p>
          </section>
          <section
            data-background-image="https://nextjs.org/_next/image?url=%2Fdocs%2Fdark%2Fdeduplicated-fetch-requests.png&w=1920&q=75"
            data-background-opacity="0.1">
            <h3>Request Memoization</h3>
            <p className="text-xl">
              Next.js extends the fetch API to automatically memoize requests that have the same URL and options. This means you can call a
              fetch function for the same data in multiple places in a React component tree while only executing it once.
            </p>
            <img src="https://nextjs.org/_next/image?url=%2Fdocs%2Fdark%2Frequest-memoization.png&w=1920&q=75" />
          </section>
          <section>
            <p className="text-xl">
              For example, if you need to use the same data across a route (e.g. in a Layout, Page, and multiple components), you do not
              have to fetch data at the top of the tree, and forward props between components. Instead, you can fetch data in the components
              that need it without worrying about the performance implications of making multiple requests across the network for the same
              data.
            </p>
            <pre>
              <code data-trim data-noescape>
                {`async function getItem() {
  // The \`fetch\` function is automatically memoized and the result
  // is cached
  const res = await fetch('https://.../item/1')
  return res.json()
}
 
// This function is called twice, but only executed the first time
const item = await getItem() // cache MISS
 
// The second call could be anywhere in your route
const item = await getItem() // cache HIT`}
              </code>
            </pre>
          </section>

          <section>
            <h3>Data Cache</h3>
            <p className="text-xl">
              Next.js has a built-in Data Cache that persists the result of data fetches across incoming server requests and deployments
            </p>
            <img src="https://nextjs.org/_next/image?url=%2Fdocs%2Fdark%2Fdata-cache.png&w=1920&q=75" />
          </section>

          <section>
            <h3>
              Full Route{" "}
              <Link href="/caching" target="__blank">
                {" "}
                Cache{" "}
              </Link>
            </h3>
            <p className="text-xl">AKA Static Site Generation </p>
            <p className="text-xl">
              The default behavior of Next.js is to cache the rendered result (React Server Component Payload and HTML) of a route on the
              server. This applies to statically rendered routes at build time, only static routes.
            </p>
            <img src="https://nextjs.org/_next/image?url=%2Fdocs%2Fdark%2Ffull-route-cache.png&w=1920&q=75" />
          </section>
          <section>
            <h3>Conclusion</h3>
            <p className="text-xl">
              <ul>
                <li>SSR is crucial for SEO and user experience.</li>
                <li>Next.js offers powerful features to optimize SSR performance.</li>
                <li>
                  Implementing techniques like code splitting, caching, image optimization, and monitoring can drastically improve your
                  app's performance.
                </li>
              </ul>
            </p>
          </section>
          <section>
            <h1>Thank You</h1>
          </section>
        </section>
      </div>
    </div>
  );
}
