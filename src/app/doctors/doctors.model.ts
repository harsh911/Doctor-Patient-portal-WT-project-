export class Doctor {
  private id: string;
  public fname: string;
  public lname: string;
  public age: number;
  public specialization: string[];
  public office: string[];
  public address: string;
  public phone: number;
  public email: string;
  public imagePath: string;

  constructor(id: string, fname: string, lname: string, age: number, specialization: string[], office: string[], address: string, phone: number,  imagePath: string) {
    this.id = id;
    this.fname = fname;
    this.lname = lname;
    this.age = age;
    this.specialization = specialization ;
    this.office = office;
    this.address = address;
    this.phone = phone;
    this.imagePath = imagePath;
  }
}
