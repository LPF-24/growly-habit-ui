import habitApi from "../api/habitApi";

// Асинхронная функция для получения всех привычек для конкретного пользователя по personId
export const getAllHabits = async (personId) => {
    const response = await habitApi.get(`/?personId=${personId}`); 
    return response.data;
};

export const createHabit = async (habitData) => {
    const response = await habitApi.post('/', habitData); // "/" обязательно, чтобы работало правильно
    return response.data;
};