export class Doctor {
  private id: string;
  public name: string;
  public age: number;
  public specialisation: string[];
  public office: string[];
  public address: string;
  public phone: number;
  public imagePath: string;

  constructor(id: string, name: string, age: number, specialisation: string[], office: string[], address: string, phone: number,  imagePath: string) {
    this.id = id;
    this.name = name;
    this.age = age;
    this.specialisation = specialisation ;
    this.office = office;
    this.address = address;
    this.phone = phone;
    this.imagePath = imagePath;
  }
}
