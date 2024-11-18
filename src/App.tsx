import "./App.scss";
import Header from "@blocks/Header";
import Description from "@blocks/Description";
import Creations from "@blocks/Creations";
import Footer from "@blocks/Footer";
import useMinWidth from "@hooks/useMinWidth";
import cn from "@utils/cn";

function App() {
    const isDesktop = useMinWidth(1024);
    const className = cn(
        "h-full [&>*]:p-6",
        isDesktop && "[&>*]:py-8 [&>*]:px-44 [&>*]:box-content",
    );
    return (
        <main className={className}>
            <h1 style={{display: "none"}}>Loopstudios</h1>
            <Header />
            <Description />
            <Creations isDesktop={isDesktop} />
            <Footer />
        </main>
    );
}

export default App;
