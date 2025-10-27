import React from 'react';

export default function Header() {
  return (
    <header
      className={[
        'app-header',
        'flex items-center gap-3 bg-white px-4 py-3 border-b-4',
        'max-[520px]:flex-col max-[520px]:items-start max-[520px]:gap-2',
      ].join(' ')}
      style={{ borderBottomColor: 'var(--main-color)' }}
    >
      <h1
        className="m-0 font-bold text-2xl md:text-3xl max-[520px]:text-xl"
        style={{ color: 'var(--main-color)' }}
      >
        School dashboard
      </h1>
    </header>
  );
}
