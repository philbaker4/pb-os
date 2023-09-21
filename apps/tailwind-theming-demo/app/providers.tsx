'use client';

import { useEffect, useState } from "react";
import type { ThemeKey } from "../themes";
import { THEME_KEYS } from "../themes";

export function Providers({
    children,
}:
    {
        children: React.ReactNode;
    }) {
    const [theme, setTheme] = useState<ThemeKey>('base');

    function handlePrefersSchemeChange(event: MediaQueryListEvent) {
        if (event.matches) {
            setTheme('dark')
        }
        else {
            setTheme('base')
        }
    }

    useEffect(() => {
        if (typeof window !== "undefined" && window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
            setTheme('dark')
        }
        window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', handlePrefersSchemeChange);

        // cleanup this component
        return () => {
            window.matchMedia('(prefers-color-scheme: dark)').removeEventListener('change', handlePrefersSchemeChange);
        };
    }, []);

    return (
        <body
            className="bg-default min-h-screen text-default pb-24"
            data-theme={theme}
        >
            <div className=" flex flex-col gap-1 w-20 mx-auto mt-12">
                <label htmlFor="theme-select" className="text-default">Theme</label>
                <select className="text-gray-900" name="theme-select" id="theme-select" onChange={(evt) => setTheme(evt.target.value as ThemeKey)} value={theme}>
                    {THEME_KEYS.map(k =>
                        <option key={k} value={k} >{k == 'base' ? 'light' : k}</option>
                    )}
                </select>
            </div>
            {children}
        </body>
    );
}
