export class Patient {
  public id: string;
  public name: string;
  public age: number;
  public address: string;
  public phone: number;
  public imagePath: string;

  public height: number;
  public weight: number;
  public allergies: string[];
  public illness: string[];
  public operations: string[];
  public medication: string[];
  public exercise: string;
  public diet: string;
  public alcohol: string;
  public smoke: string;
  public comments: string;

  constructor(id: string, name: string, age: number, address: string, phone: number, imagePath: string,
              height: number, weight: number, allergies: string[], illness: string[], operations: string[],
              medications: string[], exercise: string, diet: string, alcohol: string, smoke: string, comments: string) {

      this.id = id;
      this.name = name;
      this.age = age;
      this.address = address;
      this.phone = phone;
      this.imagePath = imagePath;
      this.height = height;
      this.weight = weight;
      this.allergies = allergies;
      this.illness = illness;
      this.operations = operations;
      this.medication = medications;
      this.exercise = exercise;
      this.diet = diet;
      this.alcohol = alcohol;
      this.smoke = smoke;
      this.comments = comments;
  }
}

