import BreakPointProvider from "./BreakPointProvider";
import ScrollbarProvider from "./ScrollbarProvider";
import StateProvider from "./StateProvider";

function AllProvider(props) {
    const { children } = props;
    return (
        <StateProvider>
            <ScrollbarProvider>
                <BreakPointProvider>{children}</BreakPointProvider>
            </ScrollbarProvider>
        </StateProvider>
    );
}

export default AllProvider;
