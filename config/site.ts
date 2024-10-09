import { SiteConfig } from "@/types/siteConfig";
import { BsGithub, BsTwitterX, BsWechat } from "react-icons/bs";
import { MdEmail } from "react-icons/md";
import { SiBuymeacoffee, SiJuejin } from "react-icons/si";

const OPEN_SOURCE_URL = 'https://github.com/Zhenvip/BadParenting.org'

const baseSiteConfig = {
  name: "Bad Parenting",
  description:
    "A chilling narrative-driven game that explores the dark side of childhood folklore and family secrets.",
  url: "https://badparenting.org",
  ogImage: "https://badparenting.org/og.png",
  metadataBase: '/',
  keywords: ["bad parenting", "horror game", "narrative game", "Mr. Red Face", "psychological horror"],
  authors: [
    {
      name: "2OO2 Games",
      url: "https://2002games.com",
      twitter: 'https://twitter.com/2002games',
    }
  ],
  creator: '@2002games',
  openSourceURL: 'https://github.com/Zhenvip/BadParenting.org',
  themeColors: [
    { media: '(prefers-color-scheme: light)', color: 'white' },
    { media: '(prefers-color-scheme: dark)', color: 'black' },
  ],
  nextThemeColor: 'dark',
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-16x16.png",
    apple: "/logo.png",
  },
  headerLinks: [
    { name: 'repo', href: OPEN_SOURCE_URL, icon: BsGithub },
    { name: 'twitter', href: "https://twitter.com/2002games", icon: BsTwitterX },
    { name: 'buyMeCoffee', href: "https://www.buymeacoffee.com/2002games", icon: SiBuymeacoffee }
  ],
  footerLinks: [
    { name: 'email', href: "mailto:contact@2002games.com", icon: MdEmail },
    { name: 'twitter', href: "https://twitter.com/2002games", icon: BsTwitterX },
    { name: 'github', href: "https://github.com/2002games/", icon: BsGithub },
    { name: 'buyMeCoffee', href: "https://www.buymeacoffee.com/2002games", icon: SiBuymeacoffee },
    { name: 'juejin', href: "https://juejin.cn/user/2002games", icon: SiJuejin },
    { name: 'weChat', href: "https://2002games.com/contact", icon: BsWechat }
  ],
  footerProducts: [
    { url: 'https://badparenting.org/', name: 'Bad Parenting' },
    { url: 'https://2002games.com/games', name: 'Other Games' },
  ]
}

export const siteConfig: SiteConfig = {
  ...baseSiteConfig,
  openGraph: {
    type: "website",
    locale: "en_US",
    url: baseSiteConfig.url,
    title: baseSiteConfig.name,
    description: baseSiteConfig.description,
    siteName: baseSiteConfig.name,
  },
  twitter: {
    card: "summary_large_image",
    title: baseSiteConfig.name,
    description: baseSiteConfig.description,
    images: [`${baseSiteConfig.url}/og.png`],
    creator: baseSiteConfig.creator,
  },
}
