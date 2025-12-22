import React, { useState, useEffect, useRef } from 'react';
import { QUESTIONS } from './constants';
import { Question } from './types';
import SwampBackground from './components/SwampBackground';
import AudioPlayer from './components/AudioPlayer';
import { audioService } from './services/audioService';

const App: React.FC = () => {
  const [currentQuestion, setCurrentQuestion] = useState<Question | null>(null);
  const [timeLeft, setTimeLeft] = useState(90);
  const [isActive, setIsActive] = useState(false);
  const [gameOver, setGameOver] = useState(false);
  const [feedback, setFeedback] = useState<{ msg: string; type: 'success' | 'error' | 'neutral' } | null>(null);
  const [userInput, setUserInput] = useState('');
  const [stats, setStats] = useState({ used: 0, total: QUESTIONS.length });
  
  // Timer Ref
  const timerRef = useRef<number | null>(null);

  // Initialize Game
  useEffect(() => {
    loadNewQuestion();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // Timer Logic
  useEffect(() => {
    if (isActive && timeLeft > 0) {
      timerRef.current = window.setInterval(() => {
        setTimeLeft((prev) => prev - 1);
      }, 1000);
    } else if (timeLeft === 0) {
      if (timerRef.current) clearInterval(timerRef.current);
      setIsActive(false);
      setGameOver(true);
      // Play specific Time's Up sound (Gong) instead of generic error
      audioService.playTimesUpSound();
      setFeedback({ msg: "Time's up! The swamp claims you.", type: 'error' });
    }
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [isActive, timeLeft]);

  const getUsedIndexes = (): number[] => {
    try {
      const raw = localStorage.getItem("time_swamp_used_indexes_v2");
      return raw ? JSON.parse(raw) : [];
    } catch {
      return [];
    }
  };

  const loadNewQuestion = () => {
    let used = getUsedIndexes();
    if (used.length >= QUESTIONS.length) {
      used = []; // Reset if all questions seen
    }

    const available = QUESTIONS.map((_, i) => i).filter(i => !used.includes(i));
    if (available.length === 0) {
        // Fallback safety
        const random = Math.floor(Math.random() * QUESTIONS.length);
        setCurrentQuestion(QUESTIONS[random]);
        return;
    }

    const randomIndex = available[Math.floor(Math.random() * available.length)];
    used.push(randomIndex);
    localStorage.setItem("time_swamp_used_indexes_v2", JSON.stringify(used));
    
    setStats({ used: used.length, total: QUESTIONS.length });
    setCurrentQuestion(QUESTIONS[randomIndex]);
    
    // Reset State
    setTimeLeft(90);
    setIsActive(true);
    setGameOver(false);
    setFeedback(null);
    setUserInput('');
    if (timerRef.current) clearInterval(timerRef.current);
  };

  const handleCheck = () => {
    if (!currentQuestion || gameOver) return;

    let isCorrect = false;

    if (currentQuestion.type === 'mcq') {
       // Handled in selection
       return; 
    } else {
        // Input type
        if (!userInput.trim()) return;
        
        const normalize = (s: string) => s.trim().toLowerCase().replace(/\s+/g, " ");
        if (normalize(userInput) === normalize(currentQuestion.answer)) {
            isCorrect = true;
        }
    }

    finalizeAnswer(isCorrect);
  };

  const handleMCQSelect = (index: number) => {
    if (!currentQuestion || gameOver || currentQuestion.type !== 'mcq') return;
    const isCorrect = index === currentQuestion.correctIndex;
    finalizeAnswer(isCorrect);
  };

  const finalizeAnswer = (isCorrect: boolean) => {
    setIsActive(false);
    setGameOver(true);
    if (timerRef.current) clearInterval(timerRef.current);

    if (isCorrect) {
        audioService.playCorrectSound();
        setFeedback({ msg: "Correct! The spirits are appeased.", type: 'success' });
    } else {
        audioService.playIncorrectSound();
        setFeedback({ msg: "Incorrect.", type: 'error' });
    }
  };

  return (
    <div className="relative min-h-screen text-slate-200 font-montserrat selection:bg-emerald-500 selection:text-white">
      <SwampBackground />
      <AudioPlayer />

      <main className="relative z-10 flex flex-col items-center justify-center min-h-screen p-4">
        
        <header className="mb-8 text-center animate-fade-in-down">
          <h1 className="text-5xl md:text-6xl font-cinzel font-bold text-transparent bg-clip-text bg-gradient-to-r from-emerald-300 via-teal-200 to-emerald-400 drop-shadow-[0_0_15px_rgba(52,211,153,0.4)]">
            Time Swamp
          </h1>
          <p className="mt-2 text-emerald-200/80 tracking-[0.2em] text-sm uppercase font-montserrat font-bold">Tense Quiz</p>
        </header>

        <div className="w-full max-w-2xl backdrop-blur-md bg-slate-900/70 border border-emerald-500/20 rounded-2xl shadow-2xl overflow-hidden animate-fade-in-up ring-1 ring-white/5">
          
          {/* Status Bar */}
          <div className="flex justify-between items-center px-6 py-4 bg-black/40 border-b border-emerald-500/20 text-xs font-montserrat font-bold tracking-wider text-emerald-400/80">
            <span>PROGRESS: {stats.used} / {stats.total}</span>
            <span className={`${timeLeft <= 10 ? 'text-red-400 animate-pulse' : ''}`}>
               TIME: {timeLeft}s
            </span>
          </div>

          <div className="p-8">
            {currentQuestion ? (
              <>
                <div className="mb-8">
                   <p className="text-2xl md:text-3xl font-crimson font-medium leading-relaxed text-slate-100 whitespace-pre-line text-center drop-shadow-sm">
                     {currentQuestion.text}
                   </p>
                </div>

                {/* Input Area */}
                <div className="space-y-4">
                  {currentQuestion.type === 'mcq' ? (
                    <div className="grid gap-3">
                      {currentQuestion.options.map((opt, idx) => (
                        <button
                          key={idx}
                          disabled={gameOver}
                          onClick={() => handleMCQSelect(idx)}
                          className={`
                            w-full text-left px-6 py-5 rounded-xl border transition-all duration-200 font-montserrat font-medium text-lg
                            ${gameOver && idx === currentQuestion.correctIndex 
                                ? 'bg-emerald-900/80 border-emerald-500 text-emerald-100 shadow-[0_0_15px_rgba(16,185,129,0.3)]' 
                                : gameOver && idx !== currentQuestion.correctIndex 
                                    ? 'bg-red-900/20 border-red-900/30 text-slate-500 opacity-50'
                                    : 'bg-slate-800/40 border-slate-700 hover:bg-emerald-900/30 hover:border-emerald-500/50 hover:shadow-lg hover:text-white'
                            }
                          `}
                        >
                          <span className="inline-block w-8 font-bold opacity-50 mr-2 text-emerald-500">{String.fromCharCode(65 + idx)}.</span>
                          {opt}
                        </button>
                      ))}
                    </div>
                  ) : (
                    <div className="flex gap-2">
                        <input
                            type="text"
                            value={userInput}
                            onChange={(e) => setUserInput(e.target.value)}
                            disabled={gameOver}
                            placeholder="Type your answer..."
                            className="flex-1 bg-slate-800/50 border border-slate-600 rounded-xl px-5 py-4 focus:outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 transition-all placeholder:text-slate-600 disabled:opacity-50 font-crimson text-xl"
                            onKeyDown={(e) => e.key === 'Enter' && handleCheck()}
                        />
                        <button 
                            onClick={handleCheck}
                            disabled={gameOver}
                            className="bg-emerald-600 hover:bg-emerald-500 text-white font-montserrat font-bold py-3 px-8 rounded-xl transition-all disabled:opacity-50 disabled:cursor-not-allowed shadow-lg hover:shadow-emerald-500/20"
                        >
                            Check
                        </button>
                    </div>
                  )}
                </div>
              </>
            ) : (
              <div className="text-center py-10 text-slate-400 font-crimson text-xl">Summoning question...</div>
            )}

            {/* Feedback & Explanation Section */}
            {gameOver && currentQuestion && (
                <div className="mt-8 pt-6 border-t border-slate-700/50 animate-fade-in">
                    <div className={`text-xl font-bold mb-3 flex items-center justify-center gap-2 font-montserrat
                        ${feedback?.type === 'success' ? 'text-emerald-400' : 'text-red-400'}
                    `}>
                        {feedback?.type === 'success' ? (
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                        ) : (
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path></svg>
                        )}
                        {feedback?.msg}
                    </div>
                    
                    <div className="bg-black/30 rounded-lg p-6 text-slate-300 border border-slate-700/50 text-center">
                        <p className="font-bold text-emerald-200/70 mb-2 uppercase tracking-wide text-xs font-montserrat">Wisdom of the Swamp</p>
                        {currentQuestion.type === 'input' && (
                             <p className="mb-3 text-emerald-300 font-crimson text-xl font-semibold">Answer: {currentQuestion.answer}</p>
                        )}
                        <p className="font-crimson text-lg leading-relaxed text-slate-200">{currentQuestion.explanation}</p>
                    </div>

                    <button 
                        onClick={loadNewQuestion}
                        className="mt-6 w-full py-4 bg-gradient-to-r from-slate-800 to-slate-700 hover:from-emerald-900 hover:to-slate-800 border border-slate-600 hover:border-emerald-500/50 text-white rounded-xl font-montserrat font-bold tracking-widest uppercase text-sm shadow-lg hover:shadow-emerald-900/20 transition-all transform active:scale-[0.99]"
                    >
                        Next Challenge
                    </button>
                </div>
            )}
          </div>
        </div>
      </main>
    </div>
  );
};

export default App;