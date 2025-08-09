import React, { useState, useEffect } from 'react';
import LetterGlitch from '../ui/LetterGlitch';
import DecryptedTextComponent from '../ui/DecryptedText'; // renamed import to avoid conflict
import MacButton from '../components/MacButton'; // import your MacButton component
import '../styles/Hero.css';

// LoopingDecryptedText cycles through phrases with DecryptedText animation
const LoopingDecryptedText = () => {
    const phrases = [
        'Ali__',
        'AI WEBSITE BUILDER',
        'RESPONSIVE UI SPECIALIST',
        'MODER WEBSITE ARCHITECT',
    ];

    const [currentIndex, setCurrentIndex] = useState(0);
    const speed = 50;
    const maxIterations = 10;

    useEffect(() => {
        const totalDuration = speed * maxIterations + 1500; // animation + pause buffer

        const timer = setTimeout(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % phrases.length);
        }, totalDuration);

        return () => clearTimeout(timer);
    }, [currentIndex]);

    return (
        <DecryptedTextComponent
            key={phrases[currentIndex]} // force re-mount for restarting animation
            text={phrases[currentIndex]}
            className="revealed"
            encryptedClassName="encrypted"
            parentClassName="all-letters"
            speed={speed}
            maxIterations={maxIterations}
            style={{ fontSize: '4rem', fontWeight: 'bold' }}
        />
    );
};

const Hero = () => {
    return (
        <section
            id="hero"
            style={{
                position: 'relative',
                width: '100vw',
                height: '100vh',
                overflow: 'hidden',
                color: 'white',
            }}
        >
            {/* Fullscreen glitch background */}
            <LetterGlitch
                glitchSpeed={50}
                centerVignette={true}
                outerVignette={false}
                smooth={true}
                style={{
                    position: 'fixed',
                    top: 0,
                    left: 0,
                    width: '100vw',
                    height: '100vh',
                    zIndex: -1,
                }}
            />

            {/* Hero content on top */}
            <div
                style={{
                    position: 'relative',
                    zIndex: 1,
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'center',
                    textAlign: 'center',
                    padding: '0 20px',
                    gap: '2rem', // space between children
                }}
            >
                {/* Looping heading */}
                <LoopingDecryptedText />

                {/* Subheading with static decrypted text */}
                <DecryptedTextComponent
                    text="Designing the future of web — responsive, immersive, and powered by AI."
                    speed={40}
                    maxIterations={15}
                    style={{ fontSize: '1.5rem', marginTop: '1rem' }}
                />

                {/* Buttons container */}
                <div style={{ display: 'flex', gap: '1.5rem' }}>
                    <div style={{ display: 'flex', gap: '1.5rem' }}>
                        <MacButton href="/work">View Work</MacButton>
                        <MacButton href="/contact">Contact Me</MacButton>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default Hero;
