import { addDays } from 'date-fns';

const newTOSIntroductionDate = new Date(2020, 0, 2);

const shouldApplyNewTOS = (signupDate: Date): boolean => {
    return signupDate >= addDays(newTOSIntroductionDate, 1);
};

export default shouldApplyNewTOS;
