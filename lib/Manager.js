const Employee = require("./Employee");

class Manager extends Employee {

  constructor(name, id, email, officeNumber) {
    super(name, id, email);
    this.officeNumber = officeNumber;
  }

  getRole() {
    return "Manager";
  }

  getOfficeNumber() {
    return this.officeNumber;
  }
  getCard(){
    return `
    <div class="card mt-2 ml-1 mr-1" style="width: 18rem;">
    <div class="card-body">
      <h5 class="card-title">${this.name}</h5>
      <p class="card-text">Title ${this.getRole()}</p>
      <p class="card-text">Email ${this.email}</p>
      <p class="card-text">Office Number ${this.officeNumber}</p>

      </div>
      </div>
        `
      }
        
        

}

module.exports = Manager;
