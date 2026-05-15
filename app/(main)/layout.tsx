import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Loading from "@/components/Loading";

function MainLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <div className="flex min-h-screen flex-col">
            <Header />
            <main className="flex-1">
                {children}
            </main>
            <Footer />
            
        </div>
    )
}

export default MainLayout