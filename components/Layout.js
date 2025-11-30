
import Header from "./Header";
import Footer from "./Footer";

export default function Layout({children}){
  return (
    <>
      <Header/>
      <main className="app-main">
        <div className="banner">
          This is DevSecOps / OWASP mature CI/CD and Web App Training demo website by jdsecAcademy
        </div>
        {children}
      </main>
      <Footer/>
    </>
  );
}
