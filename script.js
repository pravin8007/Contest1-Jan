let arr = [
    { id: 1, name: "john", age: "18", profession: "developer" },
    { id: 2, name: "jack", age: "20", profession: "developer" },
    { id: 3, name: "karen", age: "19", profession: "admin" },
  ];
  
  function PrintDeveloperbyMap() {
    const developers = arr.filter((person) => person.profession === "developer");
    const developerDetails = developers.map((developer) => {
        return {
          id: developer.id,
          name: developer.name,
          age: developer.age,
          profession: developer.profession,
        };
      });
      console.log(developerDetails);
  }
  
  function PrintDeveloperbyForEach() {
    const developerDetails = [];
  arr.forEach((person) => {
    if (person.profession === "developer") {
      developerDetails.push({
        id: person.id,
        name: person.name,
        age: person.age,
        profession: person.profession,
      });
    }
  });
    console.log(developerDetails);
  }
  
  function addData() {
    const newData = {id:4,name:"susan",age:"20",profession:"intern"};
    arr.push(newData);
    console.log("Data added:", newData);
  }
  
  function removeAdmin() {
    arr = arr.filter((person) => person.profession !== "admin");
    console.log("Array with admin removed:", arr);
  }
  
  function concatenateArray() {
    const newArray = [
      { id: 5, name: "alex", age: "22", profession: "developer" },
      { id: 6, name: "emma", age: "25", profession: "designer" },
    ];
    arr = arr.concat(newArray);
    console.log("Concatenated Array:", arr);
  }
  
