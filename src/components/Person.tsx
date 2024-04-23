import { PersonProps } from "./Person.Types" 

export const Person = (props : PersonProps) =>{
    return (
        <div> 
            {props.name.first} {props.name.last}
        </div>
    )
}