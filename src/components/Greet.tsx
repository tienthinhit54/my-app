type GreetProps ={
    name: String
    messageCount?: number
    isLoggedin: boolean
}

export const Greet =(props: GreetProps) =>{
    const { messageCount= 0} =props
    return (
        <div>
            <h2>
                {
                    props.isLoggedin ? 
                    'Xin chào ${props.name}! bạn có ${props.messageCount}tin nhắn chưa đọc': 
                    'Xin chào bạn'
                }
            </h2>
        </div>
    )
}