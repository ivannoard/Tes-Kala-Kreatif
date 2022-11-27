import { QueryClient, QueryClientProvider } from "react-query";
import Context from "./context";
import Router from "./routes/Router";

function App() {
  const queryClient = new QueryClient();

  return (
    <>
      <QueryClientProvider client={queryClient}>
        <Context>
          <Router />
        </Context>
      </QueryClientProvider>
    </>
  );
}

export default App;
