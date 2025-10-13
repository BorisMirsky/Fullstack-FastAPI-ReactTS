'use client';

import * as React from 'react';
import { useServerInsertedHTML } from 'next/navigation';
import { ServerStyleSheet, StyleSheetManager } from 'styled-components'; // Or use Emotion's cache if preferred
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import theme from '../theme'; // Assuming you have a theme.ts file

export default function ThemeRegistry({ children }: { children: React.ReactNode }) {
    const sheet = new ServerStyleSheet();
    useServerInsertedHTML(() => {
        return sheet.getStyleElement();
    });

    return (
        <StyleSheetManager sheet={sheet}>
            <ThemeProvider theme={theme}>
                {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
                <CssBaseline />
                {children}
            </ThemeProvider>
        </StylehetManager>
    );
}