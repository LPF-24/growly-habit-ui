import React, { useState } from "react";
import { createHabit } from "../services/habitService"; // а не habitApi! 

// Компонент CreateHabitPage
const CreateHabitPage = () => {
    const [name, setName] = useState("");
    const [description, setDescription] = useState("");
    const [active, setActive] = useState(true); // Добавим состояние для активного поля
    const [personId, setPersonId] = useState(1); // По умолчанию передаем id пользователя 1

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
          const habit = {
            name,           // Используем значения из состояния
            description,
            active,
            personId       // Передаем правильное значение personId
          };

          const response = await createHabit(habit);          // Отправляем запрос
          console.log(response);
        } catch (error) {
          console.error("Failed to create habit:", error);
        }
    };

    return (
        <div>
            <h1>Create New Habit</h1>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder="Habit name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                />
                <br />
                <input
                    type="text"
                    placeholder="Habit description"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    required
                />
                <br />
                <button type="submit">Create new habit!</button>
            </form>
        </div>
    );
};

export default CreateHabitPage;