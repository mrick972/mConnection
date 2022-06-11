import { Availability } from "./availability";
import { City } from "./city";
import { Department } from "./department";
import { Evaluation } from "./evaluation";
import { Gender } from "./gender";
import { Region } from "./region";
import { Service } from "./service";

export interface Person {
  id: number;
  pseudo: string;
  firstname: string;
  lastname: string;
  services: Service[];
  gender: Gender;
  Availabilities: Availability[];
  cities: City[];
  departments: Department[];
  regions: Region[];
  phone: number;
  mail: string;
  evaluations: Evaluation[];
}
