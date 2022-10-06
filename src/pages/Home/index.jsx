import { useState } from "react";
// import useClass from "@/hooks/useClass";
import Navbar from "@/components/Navbar";
import Container from "@/components/Container";
// import styles from "./scss/home.module.scss";
import CoverAnimation from "./components/CoverAnimation";
import AboutMe from "./components/AboutMe";
import Skill from "./components/Skill";
import Experience from "./components/Experience";
import Portfolio from "./components/Portfolio";

function Home() {
    const [showProfile, setShowProfile] = useState(false);
    return (
        <>
            <CoverAnimation setShowProfile={setShowProfile} />
            {showProfile && (
                <>
                    <Navbar />
                    <Container>
                        <AboutMe />
                        <Skill />
                        <Experience />
                        <Portfolio />
                    </Container>
                </>
            )}
        </>
    );
}

export default Home;
