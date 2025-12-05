'use client';

import { useEffect } from 'react';

export default function EasterEgg() {
  useEffect(() => {
    const styles = {
      title: 'color: #dc2626; font-size: 16px; font-weight: bold; font-family: monospace;',
      text: 'color: #ef4444; font-size: 14px; font-family: monospace;',
      emoji: 'font-size: 16px;',
    };

    console.log(
      '%c' +
        `
██████╗ ██╗ ██████╗     ██████╗  █████╗ ██╗    ██╗ ██████╗ ███████╗
██╔══██╗██║██╔════╝     ██╔══██╗██╔══██╗██║    ██║██╔════╝ ██╔════╝
██████╔╝██║██║  ███╗    ██║  ██║███████║██║ █╗ ██║██║  ███╗███████╗
██╔══██╗██║██║   ██║    ██║  ██║██╔══██║██║███╗██║██║   ██║╚════██║
██████╔╝██║╚██████╔╝    ██████╔╝██║  ██║╚███╔███╔╝╚██████╔╝███████║
╚═════╝ ╚═╝ ╚═════╝     ╚═════╝ ╚═╝  ╚═╝ ╚══╝╚══╝  ╚═════╝ ╚══════╝
`,
      styles.title
    );

    console.log(
      '%c🎰 Only the big dawgs know how to move furniture without breaking a sweat 🎰',
      styles.text
    );
    console.log('%c💪 If you can read this, you\'re one of the big dawgs 💪', styles.text);
    console.log('%c🐕 Welcome to the pack, big dawg 🐕', styles.text);
    console.log(
      '%c\n👀 Looking for a job? We hire big dawgs only. Hit us up! 📞',
      styles.emoji
    );
  }, []);

  return null;
}
