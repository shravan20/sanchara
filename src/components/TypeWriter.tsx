import { useState, useEffect } from 'react';

interface TypeWriterProps {
    className?: string;
    typingSpeed?: number;
    deletingSpeed?: number;
    pauseDuration?: number;
}

const TypeWriter = ({
    className = "",
    typingSpeed = 150,
    deletingSpeed = 100,
    pauseDuration = 2000
}: TypeWriterProps) => {
    const texts = [
        { text: "ಸಂಚಾರ", language: "Kannada" },
        { text: "സഞ്ചാര", language: "Malayalam" },
        { text: "சஞ்சார", language: "Tamil" },
        { text: "సంచార", language: "Telugu" },
        { text: "संचरा", language: "Hindi" },
        { text: "Sanchara", language: "English" }
    ];

    const [currentTextIndex, setCurrentTextIndex] = useState(0);
    const [currentText, setCurrentText] = useState('');
    const [isDeleting, setIsDeleting] = useState(false);
    const [isPaused, setIsPaused] = useState(false);

    useEffect(() => {
        const currentFullText = texts[currentTextIndex].text;

        if (isPaused) {
            const timer = setTimeout(() => {
                setIsPaused(false);
                setIsDeleting(true);
            }, pauseDuration);
            return () => clearTimeout(timer);
        }

        const timer = setTimeout(() => {
            if (isDeleting) {
                // Deleting characters
                if (currentText.length > 0) {
                    setCurrentText(currentText.slice(0, -1));
                } else {
                    // Move to next text
                    setIsDeleting(false);
                    setCurrentTextIndex((prev) => (prev + 1) % texts.length);
                }
            } else {
                // Typing characters
                if (currentText.length < currentFullText.length) {
                    setCurrentText(currentFullText.slice(0, currentText.length + 1));
                } else {
                    // Finished typing, pause before deleting
                    setIsPaused(true);
                }
            }
        }, isDeleting ? deletingSpeed : typingSpeed);

        return () => clearTimeout(timer);
    }, [currentText, currentTextIndex, isDeleting, isPaused, texts, typingSpeed, deletingSpeed, pauseDuration]);

    return (
        <span className={className}>
            {currentText}
            <span className="animate-pulse text-primary">|</span>
        </span>
    );
};

export default TypeWriter;
