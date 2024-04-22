type ContainerProps = {
    style : React.CSSProperties
}

export const Container =(props : ContainerProps)=>{
    return (
        <div style={props.style}>
            Text content here
        </div>
    )
}