import React, { useRef } from 'react';

export const GameDescription: React.FC = () => {
  const iframe1Ref = useRef<HTMLIFrameElement>(null);
  const iframe2Ref = useRef<HTMLIFrameElement>(null);

  const handleFullscreen = (iframeRef: React.RefObject<HTMLIFrameElement>) => {
    if (iframeRef.current) {
      if (iframeRef.current.requestFullscreen) {
        iframeRef.current.requestFullscreen();
      } else if (iframeRef.current.mozRequestFullScreen) {
        iframeRef.current.mozRequestFullScreen();
      } else if (iframeRef.current.webkitRequestFullscreen) {
        iframeRef.current.webkitRequestFullscreen();
      } else if (iframeRef.current.msRequestFullscreen) {
        iframeRef.current.msRequestFullscreen();
      }
    }
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h2 className="text-4xl font-bold mb-8 text-center">Bad Parenting: A Chilling Tale of Mr. Red Face</h2>
      
      <div className="space-y-12 text-center">
        <div>
          <h3 className="text-2xl font-semibold mb-4">Play Bad Parenting: Original Version</h3>
          <div className="aspect-w-16 aspect-h-9 h-[70vh] mb-8 relative">
            <iframe 
              ref={iframe1Ref}
              src="https://fnf-online.io/bad-parenting-1.embed" 
              className="w-full h-full"
              frameBorder="0" 
              allowFullScreen
              title="Bad Parenting Game - Original Version"
            ></iframe>
            <button
              onClick={() => handleFullscreen(iframe1Ref)}
              className="absolute top-2 right-2 bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            >
              Fullscreen
            </button>
          </div>
        </div>
        <div className="max-w-3xl mx-auto">
          <p className="mb-6">
            Bad Parenting is a narrative-driven game that introduces players to the unsettling tale of Mr. Red Face, 
            a character embedded in local folklore, ostensibly created to reward well-behaved children with nocturnal 
            visits and gifts. However, the game begins to peel back layers of this seemingly benign myth as players 
            take on the role of Ron, a young boy whose family becomes entangled in the darker side of this legend.
          </p>
          
          <p>
            As Ron, players explore his family&apos;s home and interact with objects and memories that slowly reveal 
            a more sinister aspect of Mr. Red Face. This short, approximately 20-minute experience is filled with 
            suspense as each interaction deepens the mystery of what Mr. Red Face truly represents and why he has 
            appeared to Ron&apos;s family.
          </p>
        </div>
        <div>
          <h3 className="text-2xl font-semibold mb-4">Play Bad Parenting: HONOR Version</h3>
          <div className="aspect-w-16 aspect-h-9 h-[70vh] mb-8 relative">
            <iframe 
              ref={iframe2Ref}
              src="https://play.unity.com/api/v1/struckd/app?game=bad-parings-struckd-version&unity=unity" 
              className="w-full h-full"
              frameBorder="0" 
              allowFullScreen
              title="Bad Parenting Game - HONOR Version"
            ></iframe>
            <button
              onClick={() => handleFullscreen(iframe2Ref)}
              className="absolute top-2 right-2 bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            >
              Fullscreen
            </button>
          </div>
        </div>
        <div className="max-w-3xl mx-auto">
          <h3 className="text-2xl font-semibold mb-4">A Dark Encounter in a Family Home</h3>
          <p className="mb-6">
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
        </div>
      </div>
    </div>
  );
};
