import AppRouter from "./router/useRouter";
import AuthProvider from "./context/AuthProvider";
import Layout from "./components/Layout";

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <Layout>
          <AppRouter />
        </Layout>
      </AuthProvider>
    </div>
  );
}

export default App;
