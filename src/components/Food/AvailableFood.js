import Card from '../UI/Card';
import classes from './AvailableFood.module.css';
import FoodItem from './FoodItem/FoodItem';

const DUMMY_FOOD = [
    {
      id: 'f1',
      name: 'Potato',
      description: 'Fries or Baked?',
      price: 1.90,
    },
    {
      id: 'f2',
      name: 'Tomato',
      description: 'Great for salads and sauces',
      price: 2.60,
    },
    {
      id: 'f3',
      name: 'Carrot',
      description: 'Sweet, full of vitamin A',
      price: 3.05,
    },
    {
      id: 'f4',
      name: 'Beans',
      description: 'Healthy...and green...',
      price: 13.99,
    },
  ];


const AvailableFood = () =>{    
    const foodList = DUMMY_FOOD.map(food => <FoodItem key={food.id} name={food.name} description={food.description} price={food.price}/>);


    return (
        <section className={classes.food}>
            <Card>
                <ul>{foodList}</ul>
            </Card>
        </section>
    )
};

export default AvailableFood;