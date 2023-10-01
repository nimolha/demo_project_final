import { randEmail, randFirstName, randLastName, randNumber, randWord } from "@ngneat/falso";

export class employee {
    firstName=randFirstName();
    middleName='pema';
    lastName=randLastName();
    email=randEmail(); 
    number=randNumber(); 
    keywords=randWord(); 
    notes=randWord();
}