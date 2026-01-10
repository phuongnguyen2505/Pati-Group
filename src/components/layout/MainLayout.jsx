import Header from "./Header";

export default function MainLayout({ children }) {
    return (
        <div className="min-h-screen flex flex-col w-full overflow-x-hidden">
            <Header />
            <main className="flex-grow">
                {children}
            </main>
        </div>
    );
}
