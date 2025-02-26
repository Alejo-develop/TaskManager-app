import {useCallback, useState} from 'react';
import {Purpose} from '../../../../../core/domain/entities/purposes/purpose';
import {Challenge} from '../../../../../core/domain/entities/challenges/challenge';
import {PurposeController} from '../../../../../core/infrastructure/controllers/purpose.controller';
import {useSelector} from 'react-redux';
import {RootState} from '../../../../redux/store';
import {ChallengeController} from '../../../../../core/infrastructure/controllers/challenge.controller';
import {useFocusEffect} from '@react-navigation/native';

const UseHome = () => {
  const [purposes, setPurposes] = useState<Purpose[]>([]);
  const [challenges, setChallenges] = useState<Challenge[]>([]);
  const id = useSelector((state: RootState) => state.user.id);

  const findPurposes = async () => {
    try {
      const purposes = await PurposeController.FindPurposesByAnyCategory(id);

      setPurposes(purposes.slice(-3));
      return;
    } catch (error) {
      console.log(error);
    }
  };

  const findChallenges = async () => {
    try {
      const challenges = await ChallengeController.FindChallengesByAnyCategory(
        id,
      );

      setChallenges(challenges.slice(-3));
    } catch (error) {
      console.log(error);
    }
  };

  useFocusEffect(
    useCallback(() => {
      findPurposes();
      findChallenges();
    }, []),
  );

  return {purposes, challenges};
};

export default UseHome;
