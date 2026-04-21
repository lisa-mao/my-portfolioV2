import LayoutWrapper from "./components/Layout.jsx";
import "./index.css";

export const metadata = {
    title: 'Mijn Portfolio',
    description: 'Gemaakt met Next.js',
}

export default function RootLayout({ children }) {
    return (
        <html lang="nl">
        <body>
        <LayoutWrapper>
            {children}
        </LayoutWrapper>
        </body>
        </html>
    );
}