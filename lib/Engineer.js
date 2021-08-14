const Employee = require("./Employee");

class Engineer extends Employee {
  constructor(name, id, email, github) {
    super(name, id, email);
    this.github = github;
  }

  getRole() {
    return "Engineer";
  }

  getGithub() {
    return this.github;
  }

  getCard(){
    return `
    <div class="card mt-2 ml-1 mr-1" style="width: 18rem;">
    <div class="card-body">
      <h5 class="card-title">${this.name}</h5>
      <p class="card-text">Title ${this.getRole()}</p>
      <p class="card-text">Email ${this.email}</p>
      <p class="card-text">Github ${this.github}</p>
    </div>
  </div>
    `
  }
    
}

module.exports = Engineer;
