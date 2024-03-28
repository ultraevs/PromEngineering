# Сайт под ключ для компании ПромИнжиниринг.

# [Ссылка на готовое решение](https://prom.shmyaks.ru/)

### Задача: Разработка с сайта строительной компании с нуля, включая дизайн и развертывания решения.

## Используемый стек технологий:
- [GO-Backend](https://github.com/ultraevs/KDS-3/tree/main/go-backend) - Реализован с использванием [GO](https://go.dev/) и фреймворка [Gin](https://github.com/gin-gonic/gin). Задачей модуля является реализация API для взаимодействия с frontend модулем.
- [Frontend](https://github.com/ultraevs/KDS-3/tree/main/frontend) - Реализован с использованием [React](https://ru.legacy.reactjs.org/). Задачай является предоставление красивого и функционалоного интерфейса для пользователя.
- [Deployment](https://github.com/ultraevs/KDS-3/tree/main/deployment) - Реализован с использованием [Docker-Compose](https://www.docker.com/). Задачей модуля является возможность быстрого и безошибочного развертывания приложения на любом сервере.

## Запуск решения
```sh
    cd deployment
    docker-compose build
    docker-compose up -d
```
