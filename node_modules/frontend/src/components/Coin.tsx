
type Props = {};

function Coin({}: Props) {
  return (
    <div>
      <style>{`
        .coin {
          display: inline-block;
          position: relative;
          min-width: 5em;
          min-height: 5em;
          animation: spin 3s cubic-bezier(.3,2,.4,.8) infinite both;
          transform-style: preserve-3d;
          vertical-align: middle;
        }
        
        @keyframes spin {
          0%, 10% {
            transform: rotate(-10deg) perspective(400px);
          }
          90%, 100% {
            transform: rotate(-10deg) perspective(400px) rotateY(180deg);
          }
        }

        .coin-face {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          border-radius: 50%;
        }

        .coin-face:nth-child(1) {
          transform: translateZ(-.2em) rotateY(-180deg);
        }
        .coin-face:nth-child(2) {
          transform: translateZ(-.1em);
        }
        .coin-face:nth-child(4) {
          transform: translateZ(.1em);
        }
        .coin-face:nth-child(5) {
          transform: translateZ(.2em);
        }

        svg {
          width: 100%;
          height: 100%;
        }
      `}</style>
      
      <div className="coin py-5">
        <div className="coin-face bg-lime-500">
          {/* SVG Face 1 */}
          <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 32 32">
            <path fill="#FFF" d="M10.13 17.76c-.1-.15-.06-.2.09-.12l5.49 3.09c.15.08.4.08.56 0l5.58-3.08c.16-.08.2-.03.1.11L16.2 25.9c-.1.15-.28.15-.38 0l-5.7-8.13zm.04-2.03a.3.3 0 0 1-.13-.42l5.74-9.2c.1-.15.25-.15.34 0l5.77 9.19c.1.14.05.33-.12.41l-5.5 2.78a.73.73 0 0 1-.6 0l-5.5-2.76z"/>
          </svg>
        </div>
        <div className="coin-face  bg-lime-500">
          {/* SVG Face 2 */}
          <svg xmlns="http://www.w3.org/2000/svg" width="8" height="8" viewBox="0 0 32 32">
            <path fill="#FFF" d="M10.13 17.76c-.1-.15-.06-.2.09-.12l5.49 3.09c.15.08.4.08.56 0l5.58-3.08c.16-.08.2-.03.1.11L16.2 25.9c-.1.15-.28.15-.38 0l-5.7-8.13zm.04-2.03a.3.3 0 0 1-.13-.42l5.74-9.2c.1-.15.25-.15.34 0l5.77 9.19c.1.14.05.33-.12.41l-5.5 2.78a.73.73 0 0 1-.6 0l-5.5-2.76z"/>
          </svg>
        </div>
      </div>
    </div>
  );
}

export default Coin;
