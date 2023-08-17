'use client';

import React, { type PropsWithChildren, useState } from 'react';
import { useServerInsertedHTML } from 'next/navigation';
import { ServerStyleSheet, StyleSheetManager } from 'styled-components';

/**
 * This component should be used if you use the AppRouter from NextJS v13
 *
 * Wrap the children of the root layout with the `StyledComponentsRegistry` in order to ensure that the sytlesheet is loaded correctly during SSR
 *
 * More information can be found in the official documentation: https://nextjs.org/docs/app/building-your-application/styling/css-in-js#styled-components
 */
export function StyledComponentsRegistry({ children }: PropsWithChildren) {
  // Only create stylesheet once with lazy initial state
  // x-ref: https://reactjs.org/docs/hooks-reference.html#lazy-initial-state
  const [styledComponentsStyleSheet] = useState(() => new ServerStyleSheet());

  useServerInsertedHTML(() => {
    const styles = styledComponentsStyleSheet.getStyleElement();
    styledComponentsStyleSheet.instance.clearTag();
    return <>{styles}</>;
  });

  if (typeof window !== 'undefined') return <>{children}</>;

  return (
    <StyleSheetManager sheet={styledComponentsStyleSheet.instance}>
      {children}
    </StyleSheetManager>
  );
}
