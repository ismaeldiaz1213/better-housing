import { Button, Container, Form, FormField, Header, Input, SpaceBetween } from "@cloudscape-design/components";
import React from "react";

const LogInPage: React.FC = () => {
    const [usernameIn, setusernameIn] = React.useState("Joe Mama");
    const [password, setuserPassword] = React.useState("GTHC");
    const [data, setData] = React.useState<{ users: { net_id: string, password: string, gender_preference: string, bed_time: string, noise_level: number, tidiness: number}[] }>({ users: [] });
    const [validatedState, updateValidation] = React.useState('');
 
    
    const handleChangeUsername = ({ detail }: { detail: { value: string } }) => {
      setusernameIn(detail.value);
    };

    const handleChangePassword = ({ detail }: { detail: { value: string } }) => {
      setuserPassword(detail.value);
    };

    const connect = async () => {
      await fetch("http://localhost:8000/users")
      .then((res) => res.json())
      .then((data) => {
        
        setData(data)})
      .catch((error) => console.log("Error", error)).finally(() => {
        
      })
    }  
  
    const handleSubmit = async () => {
      // Call connect first to fetch the data
      await connect();
      
      if (!data.users) {
        console.error("No user data available");
        return;
      }

      const usernames = data.users.map(user => user.net_id);
      const passwords = data.users.map(user => user.password);
        
      console.log(usernameIn);
      console.log(usernames);
      console.log(password);
      console.log(passwords);
        // Now check if the inputValue is in the data array
      if (usernames.includes(usernameIn) && passwords.includes(password)) {
        console.log("correct");
        updateValidation(' ');
      } else {
        updateValidation('Incorrect login information!');
        }
    };


    return (
        <form onSubmit= {e => e.preventDefault()}>
          <Form
            actions={
              <SpaceBetween direction="horizontal" size="xs">
                <Button formAction="none" variant="link">
                  Cancel
                </Button>
                <Button variant="primary" onClick={handleSubmit}>Submit</Button>
                {/*href="/map-selection"*/}
              </SpaceBetween>
            }
            header={<Header variant="h1">Duke Log In</Header>}
          >
            <Container
              header={
                <Header variant="h2">
                    Log In
                </Header>
              }
            >
              <SpaceBetween direction="vertical" size="l">
                <FormField label="Net ID">
                <Input
                  type="text"
                  onChange={handleChangeUsername}
                  value={usernameIn}
                  placeholder="Insert net id"
                />
                </FormField>
                <FormField label="Password">
                    <Input
                        onChange={handleChangePassword}
                        value={password}
                        placeholder = "Insert your password"
                    />
                </FormField>
                <br />
                <p>
                {validatedState}
                </p>
              </SpaceBetween>
            </Container>
          </Form>
        </form>
      );
    }

export default LogInPage;