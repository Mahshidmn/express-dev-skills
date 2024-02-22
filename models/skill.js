const skills = [
    {id: 178453, coding: 'JavaScript', beginner: true},
    {id: 178453, coding: 'HTML', beginner: true},
    {id: 178453, coding: 'CSS', beginner: true},
    {id: 178453, coding: 'Python', beginner: false}
]

module.exports = {
    getAll,
    getOne,
    create, 
    deleteOne
  };

  function deleteOne(id){
    id = parseInt(id);
   // find the index for todo
    const idx = skills.findIndex(skill=> skill.id === id);
    skills.splice(idx, 1);
  }

  function create(skill) {
    skill.id = Date.now() %1000000;
    skill.beginner = true;
    skills.push(skill);
  }
	
  function getAll() {
    return skills;
  }
  function getOne(id) {
    id = parseInt(id);
    return skills.find(skill => skill.id === id);
  }