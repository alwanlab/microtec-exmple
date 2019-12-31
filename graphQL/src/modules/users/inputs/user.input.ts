import { InputType,Field ,ID} from 'type-graphql';

@InputType()
export class UserInput {

    @Field()
    userName: string;

    @Field()
    email: string;

    @Field()
    password: string;
    
    @Field()
    fullName: string;

    @Field()
    phone: string;

    @Field()
    userNotes?: string;
}