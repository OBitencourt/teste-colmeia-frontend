"use client"

import { store } from "@/store";
import { Provider as ReduxProvider } from "react-redux";

interface ReduxProviderProps {
    children: React.ReactNode
}

export default function ReduxProviderWrapper ({children}: ReduxProviderProps) {
    return (
        <ReduxProvider store={store}>
            {children}
        </ReduxProvider>
    )
}