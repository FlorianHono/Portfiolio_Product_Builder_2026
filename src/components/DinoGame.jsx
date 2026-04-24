import { useState, useEffect, useCallback, useRef } from 'react';

const OBSTACLE_TYPES = [
  { width: 25, height: 45, y: 0, label: 'small' },
  { width: 45, height: 35, y: 0, label: 'wide' },
  { width: 30, height: 65, y: 0, label: 'tall' },
  { width: 35, height: 35, y: 55, label: 'air_low' }, // Jumpable or stay under
  { width: 30, height: 30, y: 85, label: 'air_high' }, // Must stay under
];

const DinoGame = () => {
  const [gameState, setGameState] = useState('PAUSED');
  const [score, setScore] = useState(0);
  const [highScore, setHighScore] = useState(0);
  
  const containerRef = useRef(null);
  const requestRef = useRef();
  const lastTimeRef = useRef();
  
  const dinoPosRef = useRef({ y: 0, v: 0, rotation: 0 });
  const obstaclePosRef = useRef({ x: 100, type: OBSTACLE_TYPES[0] });
  const scoreRef = useRef(0);

  // Rendering state
  const [dinoY, setDinoY] = useState(0);
  const [dinoRotation, setDinoRotation] = useState(0);
  const [obsX, setObsX] = useState(100);
  const [currentObs, setCurrentObs] = useState(OBSTACLE_TYPES[0]);

  const GRAVITY = 0.7;
  const JUMP_FORCE = 14;

  const startGame = () => {
    dinoPosRef.current = { y: 0, v: 0, rotation: 0 };
    obstaclePosRef.current = { x: 100, type: OBSTACLE_TYPES[Math.floor(Math.random() * 3)] }; // Start with ground ones
    scoreRef.current = 0;
    setScore(0);
    setDinoY(0);
    setDinoRotation(0);
    setObsX(100);
    setCurrentObs(obstaclePosRef.current.type);
    setGameState('PLAYING');
  };

  const jump = useCallback(() => {
    if (dinoPosRef.current.y === 0 && gameState === 'PLAYING') {
      dinoPosRef.current.v = JUMP_FORCE;
    }
  }, [gameState]);

  const animate = useCallback((time) => {
    if (lastTimeRef.current !== undefined) {
      if (gameState === 'PLAYING') {
        // Physics
        dinoPosRef.current.y += dinoPosRef.current.v;
        dinoPosRef.current.v -= GRAVITY;
        
        if (dinoPosRef.current.y > 0) {
          // Rotate while in air (90 deg per jump)
          dinoPosRef.current.rotation += 5;
        } else {
          dinoPosRef.current.y = 0;
          dinoPosRef.current.v = 0;
          // Snap rotation to nearest 90deg when landing
          dinoPosRef.current.rotation = Math.round(dinoPosRef.current.rotation / 90) * 90;
        }

        // Speed scaling (More aggressive)
        const currentSpeed = 1.0 + (scoreRef.current * 0.05); 
        obstaclePosRef.current.x -= currentSpeed;

        if (obstaclePosRef.current.x < -15) {
          obstaclePosRef.current.x = 100;
          // After score 5, introduce aerial obstacles
          const pool = scoreRef.current > 5 ? OBSTACLE_TYPES : OBSTACLE_TYPES.slice(0, 3);
          obstaclePosRef.current.type = pool[Math.floor(Math.random() * pool.length)];
          scoreRef.current += 1;
          setScore(scoreRef.current);
          setCurrentObs(obstaclePosRef.current.type);
        }

        // Advanced Collision Detection
        const containerWidth = containerRef.current?.clientWidth || 300;
        const dinoSize = 35;
        const dinoLeft = containerWidth * 0.1;
        const dinoRight = dinoLeft + dinoSize;
        const dinoTop = dinoPosRef.current.y + dinoSize;
        const dinoBottom = dinoPosRef.current.y;

        const obsWidth = obstaclePosRef.current.type.width;
        const obsHeight = obstaclePosRef.current.type.height;
        const obsLeft = (obstaclePosRef.current.x / 100) * containerWidth;
        const obsRight = obsLeft + obsWidth;
        const obsBottom = obstaclePosRef.current.type.y;
        const obsTop = obsBottom + obsHeight;
        
        const isHorizontalOverlap = obsLeft < dinoRight - 5 && obsRight > dinoLeft + 5;
        const isVerticalOverlap = dinoBottom < obsTop - 5 && dinoTop > obsBottom + 5;

        if (isHorizontalOverlap && isVerticalOverlap) {
          setGameState('GAME_OVER');
          if (scoreRef.current > highScore) setHighScore(scoreRef.current);
        }

        // Update visual state
        setDinoY(dinoPosRef.current.y);
        setDinoRotation(dinoPosRef.current.rotation);
        setObsX(obstaclePosRef.current.x);
      }
    }
    lastTimeRef.current = time;
    requestRef.current = requestAnimationFrame(animate);
  }, [gameState, highScore]);

  useEffect(() => {
    requestRef.current = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(requestRef.current);
  }, [animate]);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.code === 'Space') {
        e.preventDefault();
        if (gameState !== 'PLAYING') {
          startGame();
        } else {
          jump();
        }
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [gameState, jump]);

  return (
    <div className="w-full mt-12 reveal delay-4">
      <div className="flex justify-between items-end mb-6 border-b border-outline-variant/30 pb-4">
        <div>
          <span className="font-space text-[10px] tracking-[0.2em] uppercase text-primary font-bold block mb-1">03. DÉTENTE</span>
          <h3 className="font-inter font-black text-xl uppercase tracking-tighter">Space Runner</h3>
        </div>
        <div className="flex gap-6 font-space text-[10px] tracking-widest uppercase text-secondary">
          <span>HI: {highScore}</span>
          <span className="text-on-surface">SCORE: {score}</span>
        </div>
      </div>

      <div 
        ref={containerRef}
        className="relative bg-surface-container border border-outline-variant/30 w-full h-[250px] overflow-hidden cursor-pointer group"
        onClick={() => gameState !== 'PLAYING' ? startGame() : jump()}
      >
        {/* Track */}
        <div className="absolute bottom-[20%] left-0 w-full h-[1px] bg-outline-variant/50" />
        
        {/* BG elements */}
        <div className="absolute top-[20%] left-[15%] w-16 h-[1px] bg-outline-variant/10 animate-pulse" />
        <div className="absolute top-[35%] left-[55%] w-24 h-[1px] bg-outline-variant/10 animate-pulse delay-700" />
        <div className="absolute top-[15%] left-[85%] w-10 h-[1px] bg-outline-variant/10 animate-pulse delay-300" />

        {/* Dino (Cube) */}
        <div 
          className="absolute left-[10%] w-[35px] h-[35px] border-2 border-primary bg-primary/10 flex items-center justify-center transition-none"
          style={{ 
            bottom: `calc(20% + ${dinoY}px)`,
            transform: `rotate(${dinoRotation}deg)`
          }}
        >
          <div className="w-2 h-2 bg-primary rounded-full animate-ping" />
        </div>
        
        {/* Obstacle (Ground or Air) */}
        <div 
          className={`absolute bg-on-surface border border-surface shadow-xl transition-none ${currentObs.y > 0 ? 'rounded-full opacity-80' : ''}`}
          style={{ 
            bottom: `calc(20% + ${currentObs.y}px)`, 
            left: `${obsX}%`,
            width: `${currentObs.width}px`,
            height: `${currentObs.height}px`
          }}
        >
          {currentObs.y > 0 && (
             <div className="absolute inset-0 border border-primary/20 rounded-full animate-ping" />
          )}
        </div>

        {/* Overlays */}
        {gameState !== 'PLAYING' && (
          <div className="absolute inset-0 bg-surface/80 backdrop-blur-[2px] flex flex-col items-center justify-center text-center p-4 z-10">
            <span className="font-inter font-black text-4xl mb-6 uppercase tracking-tighter text-on-surface">
              {gameState === 'GAME_OVER' ? 'GAME OVER' : 'READY?'}
            </span>
            <div className="flex flex-col items-center gap-6">
               <button className="bg-primary text-white px-10 py-4 font-space text-sm font-bold uppercase tracking-widest hover:scale-105 transition-transform shadow-2xl">
                {gameState === 'GAME_OVER' ? 'RETRY' : 'START'}
              </button>
              <p className="font-space text-xs text-secondary uppercase tracking-[0.3em] animate-bounce">
                Barre ESPACE ou Clic pour Sauter
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default DinoGame;
