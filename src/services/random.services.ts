import {sentences} from '../utils/sentences.constanst';

export const getRandomSentence = (): string => {
  const randomIndex = Math.floor(Math.random() * sentences.length);
  return sentences[randomIndex];
};
