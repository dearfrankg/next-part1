import Header from "../components/Header";

const Layout = ({ children }) => (
  <div>
    <Header />
    {children}
    <style jsx>{`
      div {
        margin: 20px;
        padding: 20px;
        border: 1px solid #efefef;
      }
    `}</style>
  </div>
);

export default Layout;
