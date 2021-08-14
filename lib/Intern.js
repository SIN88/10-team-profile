const Employee = require("./Employee");

class Intern extends Employee {
  constructor(name, id, email, school) {
    super(name, id, email);
    this.school = school;
  }

  getRole() {
    return "Intern";
  }

  getSchool() {
    return this.school;
  }
  getCard(){
    return `
    <div class="card mt-2 ml-1 mr-1" style="width: 18rem;">
    <div class="card-body">
      <h5 class="card-title">${this.name}</h5>
      <p class="card-text">Title ${this.getRole()}</p>
      <p class="card-text">Email ${this.email}</p>
      <p class="card-text">School ${this.school}</p>

      </div>
      </div>
        `
      }
        
        
    
}

module.exports = Intern;
