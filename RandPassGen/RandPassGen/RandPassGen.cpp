#include <iostream>
#include <fstream>
#include <cstdlib>
#include <ctime>

using namespace std;

int main()
{
    // Инициализируем генератор случайных чисел
    srand(time(0));

    // Создаем строку, которую будем использовать для хранения пароля
    string password;

    // Генерируем случайный пароль из 16 символов
    for (int i = 0; i < 16; i++)
    {
        // Генерируем случайное число от 33 до 126
        int randomChar = rand() % 94 + 33;

        // Добавляем случайный символ в строку
        password += (char)randomChar;
    }

    // Открываем файл "password.txt" для записи
    ofstream file("D:\\password.txt");

    // Записываем пароль в файл
    file << password;

    // Закрываем файл
    file.close();

    // Вывод информации пользователю
    cout << "The password has been generated and saved to disk.";

    system("pause>>void");
    return 0;
}