import {name} from './Person.Types'
type PersonListProps ={
    names: name[]
}

export const PersonList = (props: PersonListProps) =>{
    return (
        <div>
            <h2>People List</h2>
            <ul>
                {props.names.map((name)=>(
                    <li key={name.first}>{name.first} {name.last}</li>
                ))}
            </ul>
        </div>
    )
}