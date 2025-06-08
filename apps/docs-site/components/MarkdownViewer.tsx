import React from 'react';
import ReactMarkdown from 'react-markdown';

type MarkdownViewerProps = {
  markdown: string | null;
  componentName: string | null;
};

const MarkdownViewer: React.FC<MarkdownViewerProps> = ({ markdown, componentName }) => {
  return (
    <main style={{ padding: '2rem', flex: 1 }}>
      {markdown ? (
        <ReactMarkdown>{markdown}</ReactMarkdown>
      ) : (
        <p>Select a component to view documentation</p>
      )}
    </main>
  );
};

export default MarkdownViewer;
