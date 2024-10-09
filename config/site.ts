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

export const GameDescription = () => {
  return (
    <div className="mt-8 text-center">
      <h2 className="text-2xl font-bold mb-4">Bad Parenting: A Chilling Tale of Mr. Red Face</h2>
      <p className="mb-4">
        Bad Parenting is a narrative-driven game that introduces players to the unsettling tale of Mr. Red Face, 
        a character embedded in local folklore, ostensibly created to reward well-behaved children with nocturnal 
        visits and gifts. However, the game begins to peel back layers of this seemingly benign myth as players 
        take on the role of Ron, a young boy whose family becomes entangled in the darker side of this legend.
      </p>
      <p className="mb-4">
        As Ron, players explore his family&apos;s home and interact with objects and memories that slowly reveal 
        a more sinister aspect of Mr. Red Face. This short, approximately 20-minute experience is filled with 
        suspense as each interaction deepens the mystery of what Mr. Red Face truly represents and why he has 
        appeared to Ron&apos;s family.
      </p>
      <h3 className="text-xl font-bold mb-2">A Dark Encounter in a Family Home</h3>
      <p className="mb-4">
        As the night unfolds, players must navigate Ron through his dimly lit house using standard movement controls, 
        with options to interact and sprint when necessary. The gameplay mechanics are straightforward but effective, 
        allowing players to focus on the evolving story and the eerie atmosphere. The game challenges players to piece 
        together clues and confront uncomfortable truths about the origins of Mr. Red Face and the nature of the tales 
        told by parents.
      </p>
      <p>
        With settings available in English, Vietnamese, and French, Bad Parenting offers a brief but impactful gaming 
        experience that questions the implications of folklore and the consequences it may hold for those who believe 
        too deeply in its tales.
      </p>
      <div id="game-iframe" className="mt-8">
        <h3 className="text-xl font-bold mb-4">Play Bad Parenting: HONOR Version</h3>
        <iframe 
          src="https://play.unity.com/api/v1/struckd/app?game=bad-parings-struckd-version&unity=unity" 
          width="800" 
          height="600" 
          frameBorder="0" 
          allowFullScreen
          title="Bad Parenting Game - HONOR Version"
        ></iframe>
      </div>
      <div id="game-iframe-2" className="mt-8">
        <h3 className="text-xl font-bold mb-4">Play Bad Parenting: Original Version</h3>
        <iframe 
          src="https://fnf-online.io/bad-parenting-1" 
          width="800" 
          height="600" 
          frameBorder="0" 
          allowFullScreen
          title="Bad Parenting Game - Original Version"
        ></iframe>
      </div>
    </div>
  );
};
