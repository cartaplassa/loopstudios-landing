import "./App.scss";
import Header from "@blocks/Header";
import Description from "@blocks/Description";
import Creations from "@blocks/Creations";
import Footer from "@blocks/Footer";
import useMinWidth from "@hooks/useMinWidth";

function App() {
    const isDesktop = useMinWidth(1000);
    return (
        <main className={"main" + (isDesktop ? " main--desktop" : "")}>
            <Header />
            <Description />
            <Creations isDesktop={isDesktop} />
            <Footer />
        </main>
    );
}

export default App;
