import React from 'react';
import unionClassNames from 'union-class-names';
import { toShort, emojioneList } from 'emojione';

const Emoji = ({ theme = {}, cacheBustParam, imagePath, imageType, className, decoratedText, ...props }) => {
  const shortName = toShort(decoratedText);
  // short name to image url code steal from emojione source code
  const shortNameForImage = emojioneList[shortName].unicode[emojioneList[shortName].unicode.length - 1];
  const backgroundImage = `url(${imagePath}${shortNameForImage}.${imageType}${cacheBustParam})`;
  const combinedClassName = unionClassNames(theme.emoji, className);
  const characterClassName = unionClassNames(theme.emojiCharacter);
  return (
    <span
      className={combinedClassName}
      title={toShort(decoratedText)}
      style={{ backgroundImage }}
    >
      <span className={characterClassName}>{props.children}</span>
    </span>
  );
};

export default Emoji;
