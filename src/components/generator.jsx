import React, { useState } from 'react';
import s from './generator.module.css';
const Generator = () => {
  const [password, setPassword] = useState('********');
  const [length, setLength] = useState(8);
  const [includeNumbers, setIncludeNumbers] = useState(false);
  const [includeSymbols, setIncludeSymbols] = useState(false);
  const reset = () => {
    setPassword('********');
    setLength(8);
    setIncludeNumbers(false);
    setIncludeSymbols(false);
  };
  const genPass = () => {
    const uppercaseLetters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const lowercaseLetters = 'abcdefghijklmnopqrstuvwxyz';
    const numbers = '0123456789';
    const symbols = '!@#$%^&*()-=_+[]{}|;:,.<>?';
    let pattern = uppercaseLetters + lowercaseLetters;
    if (includeNumbers) {
      pattern += numbers;
    }
    if (includeSymbols) {
      pattern += symbols;
    }
    let genPassword = '';
    for (let i = 0; i < length; i++) {
      const randomIndex = Math.floor(Math.random() * pattern.length);
      genPassword += pattern[randomIndex];
    }
    setPassword(genPassword);
  };
  return (
    <div className={s.container}>
      <div className={s.generator}>
        <h2 className={s.header}>Password Generator</h2>
        <div className={s.length}>
          <label>Password length:</label>
          <input
            type="number"
            value={length}
            onChange={(e) => setLength(parseInt(e.target.value))}
          />
        </div>
        <div className={s.numbers}>
          <label>Include numbers?</label>
          <input
            type="checkbox"
            checked={includeNumbers}
            onChange={(e) => setIncludeNumbers(e.target.checked)}
          />
        </div>
        <div className={s.numbers}>
          <label>Include symbols?</label>
          <input
            type="checkbox"
            checked={includeSymbols}
            onChange={(e) => setIncludeSymbols(e.target.checked)}
          />
        </div>
        <div className={s.result}>
          <button onClick={genPass}>Сгенерировать</button>
          <button onClick={reset}>Сбросить</button>
          <h2>{password}</h2>
        </div>
      </div>
    </div>
  );
};
export default Generator;
