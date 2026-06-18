import type { Metadata, Viewport } from "next";
import { Space_Grotesk, Newsreader, IBM_Plex_Mono } from "next/font/google";
import { Shell } from "@/components/Shell";
import "./globals.css";

const sans = Space_Grotesk({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--ff-sans",
  display: "swap",
});

const serif = Newsreader({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  style: ["normal", "italic"],
  variable: "--ff-serif",
  display: "swap",
});

const mono = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--ff-mono",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://mrbese.com"),
  title: {
    default: "Omer Bese · energy systems engineer",
    template: "%s · Omer Bese",
  },
  description:
    "Omer Bese. Energy systems engineer, founder turned operator. I ask why for a living.",
  openGraph: {
    title: "Omer Bese · energy systems engineer",
    description:
      "Energy systems engineer, founder turned operator. I ask why for a living.",
    url: "https://mrbese.com",
    siteName: "Omer Bese",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Omer Bese · energy systems engineer",
    description:
      "Energy systems engineer, founder turned operator. I ask why for a living.",
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#FCFBF7" },
    { media: "(prefers-color-scheme: dark)", color: "#15120C" },
  ],
};

// Set theme + motion flags before first paint to avoid a flash.
const bootScript = `(function(){try{var d=document.documentElement;d.classList.add('js','first-load');var t=null;try{t=localStorage.getItem('theme');}catch(e){}if(t!=='light'&&t!=='dark'){t=window.matchMedia('(prefers-color-scheme: dark)').matches?'dark':'light';}d.dataset.theme=t;}catch(e){}})();`;

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${sans.variable} ${serif.variable} ${mono.variable}`}
      suppressHydrationWarning
    >
      <head>
        <script dangerouslySetInnerHTML={{ __html: bootScript }} />
      </head>
      <body>
        <Shell>{children}</Shell>
      </body>
    </html>
  );
}
