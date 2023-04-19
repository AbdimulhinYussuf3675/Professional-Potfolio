import './index.scss';

const AnimatedLetters = ({ letterClass, strArray, idx }) => (
  <span>
    {strArray.map((char, i) => (
      <span key={char.id} className={`${letterClass} _${i + idx}`}>
        {char}
      </span>
    ))}
  </span>
);

export default AnimatedLetters;
