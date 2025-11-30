
import "../styles/globals.css";
import Layout from "../components/Layout";

export default function App({Component,pageProps}){
  return (
    <div className="app-shell">
      <Layout>
        <Component {...pageProps}/>
      </Layout>
    </div>
  );
}
