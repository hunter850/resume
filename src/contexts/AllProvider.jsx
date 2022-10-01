import BreakPointProvider from "./BreakPointProvider";
import ScrollbarProvider from "./ScrollbarProvider";
import MoveToSectionProvider from "./MoveToSectionProvider";
import StateProvider from "./StateProvider";

function AllProvider(props) {
    const { children } = props;
    return (
        <StateProvider>
            <MoveToSectionProvider>
                <ScrollbarProvider>
                    <BreakPointProvider>{children}</BreakPointProvider>
                </ScrollbarProvider>
            </MoveToSectionProvider>
        </StateProvider>
    );
}

export default AllProvider;
