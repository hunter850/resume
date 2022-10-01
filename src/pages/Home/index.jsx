import useClass from "@/hooks/useClass";
import Navbar from "@/components/Navbar";
import Container from "@/components/Container";
import styles from "./scss/home.module.scss";

function Home() {
    const { warning } = styles;
    const c = useClass();
    return (
        <>
            <Navbar />
            <Container>
                <h1 className={c(warning)}>Home Home Home Home Home</h1>
            </Container>
        </>
    );
}

export default Home;
