type PersonListProps ={
    names: {
        first: string
        last: string
    }[]
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