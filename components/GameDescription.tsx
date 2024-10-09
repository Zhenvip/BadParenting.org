import React from 'react';

export const GameDescription: React.FC = () => {
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
          src="https://fnf-online.io/bad-parenting-1.embed" 
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
