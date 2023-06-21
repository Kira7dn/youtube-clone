import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";

import { api } from "@/state/api.tsx";
import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/dist/query/index";
import { Provider } from "react-redux";
import { CacheProvider } from "@emotion/react";
import createCache from "@emotion/cache";

export const muiCache = createCache({
  key: "mui",
  prepend: true,
});
export const store = configureStore({
  reducer: { [api.reducerPath]: api.reducer },
  middleware: (getDefault) => getDefault().concat(api.middleware),
});
setupListeners(store.dispatch);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <Provider store={store}>
    <CacheProvider value={muiCache}>
      <App />
    </CacheProvider>
    ,
  </Provider>
);
