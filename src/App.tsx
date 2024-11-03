import "./App.scss";
import Header from "@blocks/Header";
import Description from "@blocks/Description";
import Creations from "@blocks/Creations";
import Footer from "@blocks/Footer";
import useMinWidth from "@hooks/useMinWidth";
import clsx from "clsx";

function App() {
    const isDesktop = useMinWidth(1000);
    const rootClassName = clsx("main", isDesktop && "main--desktop");
    return (
        <main className={rootClassName}>
            <h1 style={{display: "none"}}>Loopstudios</h1>
            <Header />
            <Description />
            <Creations isDesktop={isDesktop} />
            <Footer />
        </main>
    );
}

export default App;
