export const GO_MAP = {
  data: [
    {
      name: "Ядро языка Go",
      children: [
        "Документирование программ и пакетов, именование типов и переменных",
        "Структура приложения, способы передачи конфигурации",
        "Параметрическая компиляция, теги go build",
        "Объявление и инициализация значений, сложные литералы",
        "Строковые литералы, руны и Unicode",
        'Объявление типов "на лету"',
        "Выделение памяти, операторы new, delete, make",
        "Связь указателей, массивов и срезов. Операторы len, cap, append, copy",
        "Работа с map",
        "Передача параметров по значению и указателю.",
        "Константы и глобальные переменные, функции init()",
        "Функции с переменным числом параметров",
        "Функции с множественными возвращаемыми значениями, именованные результаты",
        "Структуры и пользовательские типы, наследование поглощением",
        "Методы от указателей и значений",
        "Доступ к полям и методам базовых типов при поглощении",
        "Особенности областей видимости, затенение и замыкания",
        "Особенности сборщика мусора, применение объекта sync.Pool",
        "Формирование и передача объекта error, основные подходы к анализу ошибок",
        "Операторы defer, panic, recover",
        'Каналы, паттерны "потребитель(ли)-производител(и)"',
        "Направленные, буферизованные каналы",
        "Паттерны применения каналов для организации барьеров и семафоров"
      ]
    },
    {
      name: "Стандартная библиотека",
      children: [
        "Функции пакета strconv",
        "Форматированный вывод, реализация интерфейса Formatter",
        "Функции пакета strings",
        "Пакет regexp",
        "Стандартные интерфейсы io.Reader, io.Writer и их производные",
        "Функции пакета ioutil",
        "Работа с путями, создание и удаление файлов и папок",
        "Объект bytes.Buffer",
        "Сериализация данных в JSON, XML, CSV",
        "Работа с archive/zip",
        "Стандартный пакет sync и паттерны применения в многопоточных приложениях",
        "Построение TCP и UDP серверов с помощью пакета net",
        "Построение HTTP сервера средствами пакета net/http",
        "Работа с текстовыми и HTML-шаблонами",
        "Работа с сертификатами, хэшами, RSA-криптография",
        "Использование http.TLSConfig для клиента и сервера",
        "Разработка клиентских приложений для TCP, UDP",
        "Применение http.Client",
        "Паттерны применения context.Context в сетевых приложениях",
        "Пакет reflect, анализ структур, теги полей, глубокое сравнение объектов",
        "Пакет runtime/debug",
        "Управление процессами с помощью os/exec и os/signal"
      ]
    },
    {
      name: "Высокоуровневая организация приложений",
      children: [
        'Архитектура "main package layout"',
        "Выделение интерфейсов, хранилищ, служб, клиентов и сессий",
        "Интеграция компонентов, инжекция зависимостей",
        "Тестирование и вспомогательные инструменты",
        "Команда go test и ее флаги",
        "Стандартный пакет testing",
        "Подготовка и уничтожение контекста тестов",
        "Создание табличных тестов",
        "Создание функциональных тестов с помощью мок-объектов",
        "Создание интеграционных тестов",
        "Создание бенчмарков",
        "Создание документационных тестов",
        "Применение пакетов httptest и httputil",
        "Паттерны работы с тестовыми данными и артефактами",
        "Статический анализ кода, инструменты go vet, go lint",
        "Профилирование программ на Go",
        "Вендоринг зависимостей",
        "Документирование с помощью go doc",
        "Документирование REST API с помощью Swagger",
        "Генерация кода с помощью go generate"
      ]
    },
    {
      name: "Базы данных",
      children: [
        "Основные объекты и функции стандартной библиотеки database/sql",
        "Особенности встраиваемых SQL-БД: sqlite, ql",
        "Вспомогательные SQL-фреймворки: sqlx, dbr, xorm, gorm",
        "No-SQL БД: библиотека mgo (MongoDB)",
        "Встраиваемые No-SQL БД: boltDB и др.",
        "Высокоуровневые HTTP-фреймворки",
        "Понятие промежуточного слоя (Middleware)",
        "Особенности современных HTTP-фреймворков (Gin, Echo или др.)",
        "Получение параметров HTTP-запроса из URL и тела запроса"
      ]
    },
    {
      name: "Вспомогательные службы и библиотеки",
      children: [
        "Основные современные библиотеки для логирования (Logrus, glog и т.п.)",
        "Структурирование записей в логи, мета-информация",
        "Работа с внешними агрегаторами логов (Graylog, ELK)",
        "Ведение метрик приложения, в т.ч. с помощью специальных СУБД (Prometheus, InfluxDB)",
        "Распределенное хранение конфигурации, пакеты Etcd, Consul и т.п."
      ]
    },
    {
      name: "Развертывание серверного ПО",
      children: [
        "Технологии виртуализации: LLVM, Docker",
        "Технологии организации кластеров: Docker swarm, Kubernetes и др.",
        "Технологии развертывания и провизионирования: Ansible, Chef, Puppet"
      ]
    }
  ]
};