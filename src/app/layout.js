import { Poppins } from "next/font/google";
import "./globals.css";
import { cx } from "@/src/Utils";
import { Toaster } from "react-hot-toast";
import { Providers } from "@/src/Redux/Provider";
import { LayoutProvider } from "@/src/Context/DataContext";
import Header from "@/src/Components/LayOut/Header";

const poppins = Poppins({
	subsets: ["latin"],
	display: "swap",
	weight: ["300", "400", "600", "700"],
	variable: "--font-poppins",
});

export default function RootLayout({ children }) {
	return (
		<html lang="en">
			<head>
				<title>Weather Application</title>
			</head>
			<body className={cx(poppins.variable, "antialiased" )} >
				<Toaster
					position="top-center"
					toastOptions={{
						duration: 3500,
					}}
				/>
				<LayoutProvider>
					<Header />
					<Providers>{children}</Providers>
				</LayoutProvider>
			</body>
		</html>
	);
}
