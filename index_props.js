import projectConfig from '/blog/pagic.config.js';
export default {
    config: { "srcDir": "src", "publicDir": "public", "base": "/", ...projectConfig },
    'pagePath': "index.md",
    'layoutPath': "_layout.tsx",
    'outputPath': "index.html",
    'title': "Pagic",
    'content': React.createElement("article", { dangerouslySetInnerHTML: {
            __html: '<h1>Pagic</h1>\n<p>The easiest way to generate static html page from markdown, built with Deno! 🦕</p>\n'
        } }),
    'script': React.createElement(React.Fragment, null,
        React.createElement("script", { crossOrigin: "anonymous", src: "https://unpkg.com/react@16.13.1/umd/react.production.min.js" }),
        React.createElement("script", { crossOrigin: "anonymous", src: "https://unpkg.com/react-dom@16.13.1/umd/react-dom.production.min.js" }),
        React.createElement("script", { src: "/blog/main.js", type: "module" })),
    'toc': React.createElement("aside", { dangerouslySetInnerHTML: {
            __html: '<nav class="toc"><ol></ol></nav>'
        } })
};
