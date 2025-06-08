import React from 'react';

type SidebarProps = {
  componentNames: string[];
  onSelect: (name: string | null) => void;
  selected: string | null;
};

const Sidebar: React.FC<SidebarProps> = ({ componentNames, onSelect, selected }) => {
  return (
    <aside
      style={{
        width: '250px',
        borderRight: '1px solid #eee',
        padding: '1rem',
        background: '#f9f9f9',
        height: '100%',
        overflowY: 'auto',
      }}
    >
      <h2
        onClick={() => onSelect(null)}
        style={{
          fontSize: '1.3rem',
          fontWeight: 'bold',
          cursor: 'pointer',
          marginBottom: '1.5rem',
        }}
      >
        Design System
      </h2>

      <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
        {componentNames.map((name) => (
          <li
            key={name}
            onClick={() => onSelect(name)}
            style={{
              padding: '0.5rem 0',
              cursor: 'pointer',
              fontWeight: selected?.toLowerCase() === name.toLowerCase() ? 'bold' : 'normal',
              color: selected?.toLowerCase() === name.toLowerCase() ? '#000' : '#333',
            }}
          >
            {name}
          </li>
        ))}
      </ul>
    </aside>
  );
};

export default Sidebar;
