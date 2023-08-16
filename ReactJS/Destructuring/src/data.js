const animals = [
  {
    name: "cat",
    sound: "meow",
    feedingRequirements: {
        food: 2,
        water: 3
    }
  },

  { name: "dog", sound: "woof" }
];

// we are creating a custom function
// we are not passing above animals here
// animal is just a variable name different from above object
function useAnimals(animal) {
  return [
    animal.name,
    function() {
      console.log(animal.sound);
    }
  ];
}

export default animals;
export { useAnimals };  // we are exporting javascript code so kept in brackets
