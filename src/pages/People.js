import { useEffect, useState } from 'react';

function People(props) {
    const [people, setPeople] = useState(null);
    const URL = "https://mern-backend-725.herokuapp.com/people"

    const getPeople = async () => {
        try {
            const myPeople = await fetch(URL);
            const allPeople = await myPeople.json();
            setPeople(allPeople);
        } catch(err) {
            console.log(err);
        }
    }

    console.log(people);

    useEffect(() => {
        getPeople();
    }, []);

    // if(people) {
    //     return ({people.map((person, idx) => {
    //         return (
    //             <>
    //                 <h1>{person.name}</h1>
    //             </>
    //         )
    //     })})
    // } else {
    //     return <h1>Loading...</h1>
    // }

    return (
        <>
            {people ? people.map((person, idx) => {
                return (
                    <>
                        <h1>{person.name}</h1>
                        <img src={person.image} alt={person.name} />
                    </>
                )
            }) : <h1>Loading...</h1>}
        </>
    )
}

export default People;