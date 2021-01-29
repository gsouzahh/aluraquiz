import React from 'react';

export default function Icon() {
  return (
    <link rel="icon" href={({ theme }) => theme.favicon} sizes="16x16" type="image/png" />
  );
}
