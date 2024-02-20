const skills = [
    {id: 178453, coding: 'JavaScript', beginner: true},
    {id: 178453, coding: 'HTML', beginner: true},
    {id: 178453, coding: 'CSS', beginner: true},
    {id: 178453, coding: 'Python', beginner: false}
]

module.exports = {
    getAll,
    getOne
  };
	
  function getAll() {
    return skills;
  }
  function getOne(id) {
    id = parseInt(id);
    return skills.find(skill => skill.id === id);
  }