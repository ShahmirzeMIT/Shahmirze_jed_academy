import Header from "./componoments/header";
import Main from "./componoments/main";
import Footer from "./componoments/footer";
function App() {
  return (
    <>
   <Header color="red" bold="bold" background="lime"/>
   <Main color="lime" center="center"  bgColor="Aqua"/>
   <Footer color="white"  bgColor="Black" center="center" />
    </>
  );
}

export default App;
