import FoodSummary from './FoodSummary';
import AvailableFood from './AvailableFood';
import { Fragment } from 'react';

const Food = () => {
    return (
        <Fragment>
            <FoodSummary />
            <AvailableFood />
        </Fragment>
    )
};

export default Food;