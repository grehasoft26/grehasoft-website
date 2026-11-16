'use client';

import { createContext, useContext } from 'react';
import { CTAData } from '@/types/wordpress';

// CTA content loaded once by the root layout, so CTABottomSection works the
// same on server and client pages without fetching /home in the browser.
const CtaDataContext = createContext<CTAData | null>(null);

export function CtaDataProvider({
  value,
  children,
}: {
  value: CTAData | null;
  children: React.ReactNode;
}) {
  return <CtaDataContext.Provider value={value}>{children}</CtaDataContext.Provider>;
}

export const useCtaData = () => useContext(CtaDataContext);
