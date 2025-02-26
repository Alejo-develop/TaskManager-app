import {useEffect, useState} from 'react';
import {Purpose} from '../../../../../core/domain/entities/purposes/purpose';
import {Challenge} from '../../../../../core/domain/entities/challenges/challenge';

const UseHome = () => {
  const [purposes, setPurposes] = useState<Purpose[]>([]);
  const [challenges, setChallenges] = useState<Challenge[]>([]);
  const [numPurposes, setNumPurposes] = useState<number>(0);
  const [numChallenges, setNumChallenges] = useState<number>(0);

  const findPurposes = () => {};

  const findChallenges = () => {};

  useEffect(() => {
    findChallenges();
    findPurposes();
  });

  return {purposes, challenges, numChallenges, numPurposes};
};

export default UseHome;
