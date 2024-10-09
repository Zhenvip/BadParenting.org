import { Button } from "@/components/ui/button";
import { RocketIcon } from "lucide-react";
import Link from "next/link";

const CTAButton = ({ locale }: { locale: any }) => {
  return (
    <Link
      href="https://github.com/Zhenvip/BadParenting.org/"
      target="_blank"
      rel="noopener noreferrer nofollow"
    >
      <Button
        variant="default"
        className="flex items-center gap-2 bg-blue-500 hover:bg-blue-600 text-white"
        aria-label="Download Now  "
      >
        <RocketIcon />
        {locale.title}
      </Button>
    </Link>
  );
};

export default CTAButton;
