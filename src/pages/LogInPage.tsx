import { Button, Container, Form, FormField, Header, Input, SpaceBetween } from "@cloudscape-design/components";
import React from "react";

const LogInPage: React.FC = () => {
    const [usernameIn, setusernameIn] = React.useState("Joe Mama");
    const [password, setuserPassword] = React.useState("GTHC");
    const [ssn, setSSN] = React.useState("123-45-6789");
    
    return (
        <form onSubmit={e => e.preventDefault()}>
          <Form
            actions={
              <SpaceBetween direction="horizontal" size="xs">
                <Button formAction="none" variant="link">
                  Cancel
                </Button>
                <Button variant="primary" href="/map-selection">Submit</Button>
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
                <FormField label="Username">
                    <Input
                        onChange={({ detail }) => setusernameIn(detail.value)}
                        value={usernameIn}
                        placeholder = "Insert userName"
                    />
                </FormField>
                <FormField label="Password">
                    <Input
                        onChange={({ detail }) => setuserPassword(detail.value)}
                        value={password}
                        placeholder = "Insert your password"
                    />
                </FormField>
                <FormField label="SSN">
                    <Input
                        onChange={({ detail }) => setSSN(detail.value)}
                        value={ssn}
                        placeholder = "The King of Nigeria needs your SSN"
                    />
                </FormField>
              </SpaceBetween>
            </Container>
          </Form>
        </form>
      );
    }

export default LogInPage;
