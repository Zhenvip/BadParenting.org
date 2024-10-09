import { Button } from "@/components/ui/button";
import { PlayIcon } from "lucide-react";
import Link from "next/link";

const CTAButton = ({ locale }: { locale: any }) => {
  return (
    <Link href="#game-iframe" passHref>
      <Button
        variant="default"
        className="flex items-center gap-2 bg-red-600 hover:bg-red-700 text-white"
        aria-label="Play Bad Parenting"
      >
        <PlayIcon />
        {locale.playNow}
      </Button>
    </Link>
  );
};

export default CTAButton;

// Game description component
export const GameDescription = () => {
  return (
    <div className="mt-8 text-center">
      <h2 className="text-2xl font-bold mb-4">Bad Parenting: A Chilling Tale</h2>
      <p className="mb-4">
        Step into a twisted world where childhood stories take a sinister turn. &quot;Bad Parenting&quot; 
        challenges you to unravel the mystery of the Red-Faced Man, a once-benign figure now 
        cloaked in terror.
      </p>
      <p className="mb-4">
        As young Ron, you&apos;ll navigate a harrowing night filled with family secrets and 
        supernatural dread. Your choices will shape the story&apos;s outcome in this compact yet 
        intense 20-minute horror experience.
      </p>
      <p>
        With intuitive controls and support for over 20 languages, &quot;Bad Parenting&quot; offers 
        an accessible yet deeply unsettling journey into the heart of childhood fears.
      </p>
      <div id="game-iframe" className="mt-8">
        <iframe 
          src="https://fnf-online.io/bad-parenting-1" 
          width="800" 
          height="600" 
          frameBorder="0" 
          allowFullScreen
          title="Bad Parenting Game"
        ></iframe>
      </div>
    </div>
  );
};
