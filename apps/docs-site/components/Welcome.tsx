import React from 'react';

const Welcome = () => (
  <main style={{ padding: '2rem', flex: 1 }}>
    <h1>Welcome to the Design System</h1>
    <p>
      This design system provides a set of reusable, accessible UI components built with React.
      Components are themeable, versioned, and documented using markdown alongside code.
    </p>
    <p>
      Use the sidebar to explore available components and view their documentation.
    </p>
    <ul>
      <li>🔧 Built with React + Webpack</li>
      <li>📚 Markdown-powered component docs</li>
      <li>🎨 Theme support</li>
      <li>🧪 Storybook component previews</li>
    </ul>
  </main>
);

export default Welcome;
