import { Button, Container, Form, FormField, Header, Input, SpaceBetween, Flashbar } from "@cloudscape-design/components";
import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const UserPreferences: React.FC = () => {
    const navigate = useNavigate();
    const [gender_preference, setGenderPreference] = React.useState("");    
    const [bed_time, setBedTime] = React.useState("");
    const [noise_level, setNoiseLevel] = React.useState(0);
    const [tidiness, setTidiness] = React.useState(0);
    const currentNetId = localStorage.getItem('currentNetId');

    const handleChangeGenderPreference = ({ detail }: { detail: { value: string } }) => {
        setGenderPreference(detail.value);
    };

    const handleChangeBedTime = ({ detail }: { detail: { value: string } }) => {
        setBedTime(detail.value);
    };

    const handleChangeNoiseLevel = ({ detail }: { detail: { value: string } }) => {
        setNoiseLevel(Number(detail.value));
    };

    const handleChangeTidiness = ({ detail }: { detail: { value: string } }) => {
        setTidiness(Number(detail.value));
    };

    const handleSubmit = async () => {
        try {
            const response = await fetch(`http://localhost:8000/users/${currentNetId}`, {
                method: 'PATCH',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    bed_time: bed_time,
                    noise_level: noise_level,
                    tidiness: tidiness,
                    gender_preference: gender_preference
                })
            });
            const data = await response.json();
            console.log("data", data);
            navigate('/map-selection'); // Navigate after successful update
    
        } catch (error) {
            console.log("Error", error);
        }
    };

    return (
        <Container
            header={
                <Header variant="h2">
                    User Preferences
                </Header>
            }
        >
            <form onSubmit={e => e.preventDefault()}>
                <SpaceBetween direction="vertical" size="l">
                    <FormField label="Gender Preference For Roommate">
                    <Input
                      type="text"
                      onChange={handleChangeGenderPreference}
                      value={gender_preference}
                      placeholder="Gender preference"
                    />
                    </FormField>
                </SpaceBetween>

                <SpaceBetween direction="vertical" size="l">
                    <FormField label="Bed Time">
                    <Input
                      type="text"
                      onChange={handleChangeBedTime}
                      value={bed_time}
                      placeholder="Bed time"
                    />
                    </FormField>
                </SpaceBetween>

                <SpaceBetween direction="vertical" size="l">
                    <FormField label="Noise Level">
                    <Input
                      type="text"
                      onChange={handleChangeNoiseLevel}
                      value={noise_level.toString()}
                      placeholder="Noise level"
                    />
                    </FormField>
                </SpaceBetween>

                <SpaceBetween direction="vertical" size="l">
                    <FormField label="Tidiness of Room">
                    <Input
                      type="text"
                      onChange={handleChangeTidiness}
                      value={tidiness.toString()}
                      placeholder="Tidiness"
                    />
                    </FormField>
                </SpaceBetween>

                <Form
                actions={
                  <SpaceBetween direction="horizontal" size="xs">
                    <Button formAction="none" variant="link">
                      Cancel
                    </Button>
                    <Button variant="primary" href="/map-selection" onClick={handleSubmit}>Submit</Button>
                  </SpaceBetween>
                }
                
            />
            </form>
        </Container>
    );
}

export default UserPreferences;