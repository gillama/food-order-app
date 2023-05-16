import classes from './FoodSummary.module.css';

const FoodSummary = () => {
    return (
        <section className={classes.summary}> 
            <h2>Healthy, organic and delicous food! </h2>
            <p>Take a look what is fresh in our market and pick the best products for your healthy and tasty meals.</p>
            <p> All our vegetables and fruits are high-quality products. </p>
            <p> Try and enjoy!</p>
        </section>
    )
};


export default FoodSummary;