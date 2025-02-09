import { Button, Container, Form, FormField, Header, Input, SpaceBetween, Flashbar } from "@cloudscape-design/components";
import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const LogInPage: React.FC = () => {
    const navigate = useNavigate();
    const [usernameIn, setusernameIn] = React.useState("");
    const [password, setuserPassword] = React.useState("");
    const [data, setData] = React.useState<{ users: { net_id: string, password: string, gender_preference: string, bed_time: string, noise_level: number, tidiness: number}[] }>({ users: [] });
    const [validatedState, updateValidation] = React.useState('');
    const [isLoading, setIsLoading] = React.useState(false);
 
    
    const handleChangeUsername = ({ detail }: { detail: { value: string } }) => {
      setusernameIn(detail.value);
    };

    const handleChangePassword = ({ detail }: { detail: { value: string } }) => {
      setuserPassword(detail.value);
    };

    const connect = async () => {
      setIsLoading(true);
      await fetch("http://localhost:8000/users")
      .then((res) => res.json())
      .then((data) => {
        setData(data);
        
      })
      .catch((error) => {
        console.log("Error", error);
        
      })


    }  
  
    useEffect(() => {
      if (data.users.length > 0) {
          console.log("data is not empty")
          console.log(data.users)
          const usernames = data.users.map(user => user.net_id);
          const passwords = data.users.map(user => user.password);
          const gender_preferences = data.users.map(user => user.gender_preference);
          const bed_times = data.users.map(user => user.bed_time);
          const noise_levels = data.users.map(user => user.noise_level);
          const tidiness = data.users.map(user => user.tidiness);

          console.log(gender_preferences)
          console.log(bed_times)
          console.log(noise_levels)
          console.log(tidiness)
          if (usernames.includes(usernameIn) && passwords.includes(password)) {
            console.log("correct");
            updateValidation(' ');
            localStorage.setItem('currentNetId', usernameIn);
            navigate('/user_preferences');
          } else {
            updateValidation('Incorrect login information!');
          }
          setIsLoading(false);

      } else {
        console.log("data is empty")
      }
    }, [data.users, password, usernameIn, navigate]);


    const handleSubmit = async () => {
      // Call connect first to fetch the data
      await connect();
    };


    return (
        <form onSubmit= {e => e.preventDefault()}>
          <Flashbar
            items={
              isLoading
                ? [
                    {
                      type: 'info',
                      loading: true,
                      content: 'Loading user data...',
                    },
                  ]
                : []
            }
          />
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