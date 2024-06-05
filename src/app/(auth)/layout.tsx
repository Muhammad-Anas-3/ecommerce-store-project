import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Authentication Ecommerce App",
    description:
        "Authentication pages having register and login page",
};

export default function RootLayout({
    children,
}: Readonly<{ children: React.ReactNode }>) {
    return (
        <>
            <div>{children}</div>
        </>
    );
}
