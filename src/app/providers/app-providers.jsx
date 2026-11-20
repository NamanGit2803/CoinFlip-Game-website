import { useState } from "react";
import {
    QueryClient,
    QueryClientProvider,
} from "@tanstack/react-query";
import { Toaster } from "sonner";
import GlobalDialogHost from "@/components/dialogs/global-dialog-host";

function AppProviders({ children }) {
    const [queryClient] = useState(
        () =>
            new QueryClient({
                defaultOptions: {
                    queries: {
                        staleTime: 30 * 1000,
                        retry: 1,
                        refetchOnWindowFocus: false,
                    },

                    mutations: {
                        retry: 0,
                    },
                },
            })
    );

    return (
        <QueryClientProvider client={queryClient}>
            {children}

            <GlobalDialogHost />

            <Toaster
                position="top-right"
                theme="dark"
                richColors
                closeButton
            />
        </QueryClientProvider>
    );
}

export default AppProviders;
