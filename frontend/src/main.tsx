import {
  MutationCache,
  QueryCache,
  QueryClient,
  QueryClientProvider,
} from "@tanstack/react-query"
import React, { StrictMode } from "react"
import ReactDOM from "react-dom/client"
import { BrowserRouter, Routes, Route } from "react-router";
import { ApiError, OpenAPI } from "./client"
import { CustomProvider } from "./components/ui/provider"
import App from "./App"

OpenAPI.BASE = import.meta.env.VITE_API_URL
OpenAPI.TOKEN = async () => {
  return localStorage.getItem("access_token") || ""
}

const handleApiError = (error: Error) => {
  // if (error instanceof ApiError && [401, 403].includes(error.status)) {
  //   localStorage.removeItem("access_token")
  //   window.location.href = "/login"
  // }
}
const queryClient = new QueryClient({
  queryCache: new QueryCache({
    onError: handleApiError,
  }),
  mutationCache: new MutationCache({
    onError: handleApiError,
  }),
})



ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    {/* <BrowserRouter> */}
      <CustomProvider>
        <QueryClientProvider client={queryClient}>
            <App />          
        </QueryClientProvider>
      </CustomProvider>
    {/* </BrowserRouter> */}
  </React.StrictMode>,
)
