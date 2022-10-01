import { useState } from "react";
// import useClass from "@/hooks/useClass";
import Navbar from "@/components/Navbar";
import Container from "@/components/Container";
// import styles from "./scss/home.module.scss";
import CoverAnimation from "./components/CoverAnimation";
import AboutMe from "./components/AboutMe";
import Skill from "./components/Skill";
import Resume from "./components/Resume";
import Portfolio from "./components/Portfolio";

function Home() {
    const [showCover, setShowCover] = useState(true);
    return (
        <>
            <CoverAnimation showCover={showCover} setShowCover={setShowCover} />
            <Navbar />
            <Container>
                <AboutMe />
                <Skill />
                <Resume />
                <Portfolio />
            </Container>
        </>
    );
}

export default Home;
