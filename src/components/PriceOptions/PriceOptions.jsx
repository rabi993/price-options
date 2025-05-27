import PriceOption from "../PriceOption/PriceOption";

const PriceOptions = () => {

    const priceOptions = [
        {
            "id": 1,
            "name": "Basic Plan",
            "price": 29.99,
            "features": [
                "Access to gym equipment",
                "Locker room access",
                "1 guest pass per month",
                "Open gym access during staffed hours",
                "Free Wi-Fi",
                "Water fountain access"
            ]
        },
        {
            "id": 2,
            "name": "Standard Plan",
            "price": 49.99,
            "features": [
                "All Basic Plan features",
                "Unlimited group fitness classes",
                "Free fitness assessment every 6 months",
                "Access to sauna and steam room",
                "Monthly wellness newsletter",
                "Discounts on fitness merchandise"
            ]
        },
        {
            "id": 3,
            "name": "Premium Plan",
            "price": 69.99,
            "features": [
                "All Standard Plan features",
                "Two personal training sessions per month",
                "Monthly nutrition consultation",
                "Towel and laundry service",
                "Priority class booking",
                "24/7 gym access",
                "Free participation in monthly challenges"
            ]
        },
        {
            "id": 4,
            "name": "Student Plan",
            "price": 24.99,
            "features": [
                "Access to gym equipment",
                "Locker room access",
                "Group classes (off-peak hours)",
                "Student ID required for signup",
                "Access to study lounge with Wi-Fi",
                "10% discount on healthy snacks"
            ]
        },
        {
            "id": 5,
            "name": "Family Plan",
            "price": 99.99,
            "features": [
                "Access for up to 4 family members",
                "All Premium Plan features",
                "Free kids' fitness programs",
                "Family yoga and Zumba sessions",
                "Childcare service during workouts",
                "Discounted rate for additional family members",
                "Access to family-friendly swimming pool"
            ]
        }
    ]



    return (
        <div>
            <h2 className="text-5xl">Best Prices in the Town</h2>
            {
                priceOptions.map(option => <PriceOption key={option.id} option={option}></PriceOption>)
            }
        </div>
    );
};

export default PriceOptions;