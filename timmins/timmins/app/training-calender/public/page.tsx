import Header from "../../Components/Header";
import Footer from "../../Components/Footer";

export default function PublicClassesPage() {
    return (
        <>
            <Header />

            <div className="container py-5">
                <h1>Public Classes</h1>
                <p>This is the public classes listing page.</p>
            </div>

            <Footer />
        </>
    );
}