import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import habitApi from "../api/habitApi";

export default function HabitCard() {
    const { id } = useParams();
    const [habit, setHabit] = useState(null);

    useEffect(() => {
        async function fetchHabit() {
            try {
                const data = await habitApi.getHabit(id);
                setHabit(data);
            } catch (error) {
                console.error("Error loading habit:", error);
            }
        }
        fetchHabit();
    }, [id]);

    if (!habit) {
        return <div>Loading...</div>
    }

    return (
        <div>
            <h1>{habit.name}</h1>
            <p>{habit.description}</p>
            <p>Activ: {habit.active ? "Yes" : "No"}</p>
            <button onClick={async () => {
                await habitApi.deleteHabit(id);
                window.location.href = "/";
            }}>Remove the habit</button>
        </div>
    );
}