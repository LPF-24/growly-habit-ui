import React, { useEffect, useState } from "react";
import { getAllHabits } from "../services/habitService";

//Компонент HabitListPage
const HabitListPage = () => {
    const [habits, setHabits] = useState([]); // Локальное состояние для хранения привычек

    useEffect(() => {
        const fetchHabits = async () => {
            try {
                const personId = 1;
                const habitsData = await getAllHabits(personId); // Получаем привычки с сервера
                setHabits(habitsData); // Сохраняем привычки в локальное состояние
            } catch (error) {
                console.error("Failed to fetch habits:", error); //Логируем ошибку
            }
        };
        fetchHabits(); // Запускаем загрузку привычек при монтировании компонента
    }, []);

    return (
        <div>
            <h1>My Habits</h1>
            <ul>
                {habits.map((habit) => (
                    <li key={habit.id}>
                        {habit.name} — {habit.description}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default HabitListPage;