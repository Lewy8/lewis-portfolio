'use client';

import { ThemeProvider } from './ThemeProvider';

export default function ClientProviders({ children }) {
    return <ThemeProvider>{children}</ThemeProvider>;
}
