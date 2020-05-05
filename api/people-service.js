const fs = require('fs');

module.exports = class PeopleService {
    constructor() {
        this.peoples = JSON.parse(fs.readFileSync(__dirname + '/people.json', 'utf8'));
    }

    updatePeople(id, people) {
        //implémentation de la fonction updatePeople

        const n = -1;
        const Index = this.peoples.findIndex(
            people => people.id === id
        );
        if(peopleIndex === n)
        return Promise.reject('l id est invalide');

        this.peoples[peopleIndex] = people;
        return {isModified: true};
    }

    
    
    getPeople(filters) {
        //implémentation de la fonction getPeople
        const n = 0;
        console.log(Object.keys(filters).length);
        if(Object.keys(filters).length === n)
        {
            return this.peoples;
        }
        else
        {
            const peopleIndex = this.peoples.filter(
                people => people[Object.keys(filters)[0]]===filters[Object.keys(filters)[0]]
            );
            return peopleIndex;
        }
    }
}
