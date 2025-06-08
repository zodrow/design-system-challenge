import React from 'react';
import { BrowserRouter, Routes, Route, useParams, useNavigate } from 'react-router-dom';
import Sidebar from '../components/Sidebar';
import MarkdownViewer from '../components/MarkdownViewer';
import Welcome from '../components/Welcome';

// @ts-ignore
const context = require.context(
  '../../../packages/design-system/src/components/',
  true,
  /\.md$/
);

// Extract available component names
const componentNames = Array.from(
  new Set(context.keys().map((path: string) => path.split('/')[1]))
) as string[];

// This component handles reading URL param and showing the right markdown
function Viewer() {
  const { componentName } = useParams<{ componentName: string }>();
  const [markdown, setMarkdown] = React.useState<string | null>(null);

  React.useEffect(() => {
    if (!componentName) {
      setMarkdown(null);
      return;
    }

    const fileKey = context
      .keys()
      .find((path:string) => path.split('/')[1].toLowerCase() === componentName.toLowerCase());

    if (fileKey) {
      const rawMd = context(fileKey).default || context(fileKey);
      setMarkdown(rawMd);
    } else {
      setMarkdown(`# Not Found\n\nNo markdown found for "${componentName}"`);
    }
  }, [componentName]);

  return componentName ? (
    <MarkdownViewer markdown={markdown} componentName={componentName} />
  ) : (
    <Welcome />
  );
}

function Layout() {
  const navigate = useNavigate();
  const { componentName } = useParams<{ componentName: string }>();

  return (
    <div style={{ display: 'flex', height: '100vh' }}>
      <Sidebar
        componentNames={componentNames}
        selected={componentName || null}
        onSelect={(name) => navigate(name ? `/${name.toLowerCase()}` : '/')}
      />
      <Viewer />
    </div>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/:componentName?" element={<Layout />} />
      </Routes>
    </BrowserRouter>
  );
}
