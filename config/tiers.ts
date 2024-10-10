import { siteConfig } from "@/config/site";
import { Tier, TiersEnum } from "@/types/Download";

export const TIERS_EN: Array<Tier> = [
  {
    key: TiersEnum.Free,
    title: "Download / Free",
    price: "Free",
    href: siteConfig.openSourceURL || "#",
    description:
      "Freely download the Bad Parenting file. Donations are welcome to support our work.",
    features: [
      "Free download",
      "Optional donation",
      "Support our project",
      "Access to full content",
    ],
    buttonText: "Download Now",
    buttonColor: "primary",
    buttonVariant: "solid",
  },
  {
    key: TiersEnum.Customize,
    title: "Support",
    href: siteConfig.authors[0].twitter || "#",
    description: "Pay to customize an exclusive landing page.",
    price: "$1.88",
    features: [
      "Access to full code",
      "Secondary development",
      "Exclusive style",
      "One-on-one service",
      "More exquisite pages",
    ],
    buttonText: "Patron Me",
    buttonColor: "default",
    buttonVariant: "flat",
  },
];

export const TIERS_ZH: Array<Tier> = [
  {
    key: TiersEnum.Free,
    title: "下载 / 免费",
    price: "免费",
    href: siteConfig.openSourceURL || "#",
    description: "免费下载Bad Parenting文件。欢迎捐赠支持我们的工作。",
    features: [
      "免费下载",
      "自愿捐赠",
      "支持我们的项目",
      "访问全部内容",
    ],
    buttonText: "立即下载",
    buttonColor: "primary",
    buttonVariant: "solid",
  },
  {
    key: TiersEnum.Customize,
    title: "定制",
    href: siteConfig.authors[0].twitter || "#",
    description: "支付定制专属落地页。",
    price: "$1.88",
    features: [
      "访问全部代码",
      "二次开发",
      "独家风格",
      "一对一服务",
      "更精致的页面",
    ],
    buttonText: "联系我们",
    buttonColor: "default",
    buttonVariant: "flat",
  },
];

export const TIERS_JA: Array<Tier> = [
  {
    key: TiersEnum.Free,
    title: "ダウンロード / 無料",
    price: "無料",
    href: siteConfig.openSourceURL || "#",
    description: "Bad Parentingファイルを無料でダウンロードできます。私たちの活動を支援するための寄付も歓迎します。",
    features: [
      "無料ダウンロード",
      "任意の寄付",
      "プロジェクト支援",
      "全コンテンツへのアクセス",
    ],
    buttonText: "今すぐダウンロード",
    buttonColor: "primary",
    buttonVariant: "solid",
  },
  {
    key: TiersEnum.Customize,
    title: "カスタマイズ",
    href: siteConfig.authors[0].twitter || "#",
    description: "専用のランディングページをカスタマイズするために支払います。",
    price: "$1.88",
    features: [
      "全コードへのアクセス",
      "二次開発",
      "独占スタイル",
      "1対1のサービス",
      "より精巧なページ",
    ],
    buttonText: "お問い合わせ",
    buttonColor: "default",
    buttonVariant: "flat",
  },
];

export const TIERS_AR: Array<Tier> = [
  {
    key: TiersEnum.Free,
    title: "تحميل / مجاني",
    price: "مجاناً",
    href: siteConfig.openSourceURL || "#",
    description: "قم بتحميل ملف Bad Parenting مجانًا. نرحب بالتبرعات لدعم عملنا.",
    features: [
      "تحميل مجاني",
      "تبرع اختياري",
      "دعم مشروعنا",
      "الوصول إلى المحتوى الكامل",
    ],
    buttonText: "تحميل الآن",
    buttonColor: "primary",
    buttonVariant: "solid",
  },
  {
    key: TiersEnum.Customize,
    title: "تخصيص",
    href: siteConfig.authors[0].twitter || "#",
    description: "ادفع لتخصيص صفحة هبوط حصرية.",
    price: "$1.88",
    features: [
      "الوصول إلى كامل الكود",
      "التطوير الثانوي",
      "أسلوب حصري",
      "خدمة فردية",
      "صفحات أكثر دقة",
    ],
    buttonText: "اتصل بنا",
    buttonColor: "default",
    buttonVariant: "flat",
  },
];

export const TIERS_ES: Array<Tier> = [
  {
    key: TiersEnum.Free,
    title: "Descargar / Gratis",
    price: "Gratis",
    href: siteConfig.openSourceURL || "#",
    description:
      "Descarga gratuitamente el archivo Bad Parenting. Se agradecen donaciones para apoyar nuestro trabajo.",
    features: [
      "Descarga gratuita",
      "Donación opcional",
      "Apoya nuestro proyecto",
      "Acceso al contenido completo",
    ],
    buttonText: "Descargar ahora",
    buttonColor: "primary",
    buttonVariant: "solid",
  },
  {
    key: TiersEnum.Customize,
    title: "Personalizar",
    href: siteConfig.authors[0].twitter || "#",
    description: "Paga para personalizar una página de aterrizaje exclusiva.",
    price: "$1.88",
    features: [
      "Acceso a todo el código",
      "Desarrollo secundario",
      "Estilo exclusivo",
      "Servicio personalizado",
      "Páginas más exquisitas",
    ],
    buttonText: "Contáctanos",
    buttonColor: "default",
    buttonVariant: "flat",
  },
];

export const TIERS_RU: Array<Tier> = [
  {
    key: TiersEnum.Free,
    title: "Скачать / Бесплатно",
    price: "Бесплатно",
    href: siteConfig.openSourceURL || "#",
    description:
      "Скачайте файл Bad Parenting бесплатно. Пожертвования для поддержки нашей работы приветствуются.",
    features: [
      "Бесплатное скачивание",
      "Добровольное пожертвование",
      "Поддержка нашего проекта",
      "Доступ ко всему содержимому",
    ],
    buttonText: "Скачать сейчас",
    buttonColor: "primary",
    buttonVariant: "solid",
  },
  {
    key: TiersEnum.Customize,
    title: "Настройка",
    href: siteConfig.authors[0].twitter || "#",
    description: "Оплатите персонализацию эксклюзивной лендинг страницы.",
    price: "$1.88",
    features: [
      "Доступ ко всему коду",
      "Вторичная разработка",
      "Эксклюзивный стиль",
      "Индивидуальное обслуживание",
      "Более изысканные страницы",
    ],
    buttonText: "Связаться с нами",
    buttonColor: "default",
    buttonVariant: "flat",
  },
];

interface TiersCollection {
  [key: `TIERS_${string}`]: Array<Tier>;
}

export const ALL_TIERS: TiersCollection = {
  TIERS_EN,
  TIERS_ZH,
  TIERS_JA,
  TIERS_AR,
  TIERS_ES,
  TIERS_RU
}
