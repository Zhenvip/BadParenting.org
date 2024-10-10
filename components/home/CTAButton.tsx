import { Button } from "@/components/ui/button";
import { DownloadIcon } from "lucide-react"; // Changed from RocketIcon to DownloadIcon
import Link from "next/link";

const CTAButton = ({ locale }: { locale: any }) => {
  return (
    <Link
      href="https://github.com/Zhenvip/BadParenting.org/raw/master/Bad%20Parenting.rar"
      target="_blank"
      rel="noopener noreferrer nofollow"
      download="Bad_Parenting.rar" // Added download attribute
    >
      <Button
        variant="default"
        className="flex items-center gap-2 bg-blue-500 hover:bg-blue-600 text-white"
        aria-label="Download Bad Parenting Now"
      >
        <DownloadIcon /> {/* Changed to DownloadIcon */}
        {locale.title}
      </Button>
    </Link>
  );
};

export default CTAButton;
