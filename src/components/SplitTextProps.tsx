import React from 'react';

interface SplitTextProps {
  text: string;
  /** Class put on every letter span so GSAP can select and stagger them */
  letterClass: string;
}

// Letter-by-letter helper: letters are grouped per word (nowrap) so text still wraps at spaces.
// The real text stays in an sr-only span for screen readers; the animated letters are hidden from them.
// Letters start hidden (opacity-0); the caller's animation reveals them.
export const SplitText: React.FC<SplitTextProps> = ({ text, letterClass }) => (
  <>
    <span className="sr-only">{text}</span>
    <span aria-hidden="true">
      {text.split(' ').map((word, w, words) => (
        <React.Fragment key={w}>
          <span className="inline-block whitespace-nowrap">
            {word.split('').map((char, i) => (
              <span key={i} className={`${letterClass} inline-block opacity-0`}>
                {char}
              </span>
            ))}
          </span>
          {w < words.length - 1 ? ' ' : null}
        </React.Fragment>
      ))}
    </span>
  </>
);
