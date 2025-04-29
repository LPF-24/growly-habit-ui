import axios from "axios";

// Создаём настроенный экземпляр axios, чтобы каждый раз не указывать базовый URL и заголовки
const habitApi = axios.create({
    baseURL: 'http://localhost:8080/habits', // Базовый URL — все запросы будут начинаться с него
    headers: {
        'Content-Type': 'application/json',  // Устанавливаем тип содержимого как JSON
    },
    withCredentials: false, // <--- добавь сюда!
});

// Экспортируем этот экземпляр, чтобы использовать его в сервисах
export default habitApi;