import './App.css';
import { Button } from './components/Button';
import { Container } from './components/Container';
import { Greet } from './components/Greet';
import { Heading } from './components/Heading';
import { Input } from './components/Input';
import { Oscar } from './components/Oscar';
import { Person } from './components/Person';
import { PersonList } from './components/PersonList';
import { Status } from './components/Status';
import { Counter } from './components/state/Counter';
import { LoggedIn } from './components/state/LoggedIn';
import { ThemeContextProvider } from './components/context/ThemeContext';
import { Box } from './components/context/Box';
import { UserContextProvider } from './components/context/UserContext';
import { User } from './components/context/User';
import { MutableRef } from './components/ref/MutableRef';
import { DomRef } from './components/ref/DomRef';

function App() {
  const personName ={
    first:'David',
    last:'Thịnh',
  }
  const nameList = [
    {
      first:'David',
      last: 'Thịnh'
    },
    {
      first:'Tiến',
      last: 'Thịnh'
    },
    {
      first:'Eric',
      last: 'Nguyễn'
    },
  ]
  return (
    <div className="App">
      <Greet name='Tiến Thịnh' isLoggedin={false}/>
      <Person name = { personName}/>
      <PersonList names ={nameList}/>
      <Status status='loading'/>
      <Heading> text</Heading>
      <Oscar>
        <Heading> adasd </Heading>
      </Oscar>
      
      <Button handleClick={(event, id)=>{
        console.log('Button clicked', event,id)
      }}/>
      <Input value='' handleChange={event =>console.log(event)}/>
      <Container style={{border:'1px solit black', padding:'1rem'}}/>
      <Counter/>
      <ThemeContextProvider>
        <Box/>
      </ThemeContextProvider>
      <UserContextProvider>
        <User/>
      </UserContextProvider>
    </div>
  );
}

export default App;


