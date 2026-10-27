import type { Locale } from "~/composables/usePortfolioCopy";

export type ProjectEditorial = {
  shortDescription: string;
  description: string;
  role?: string;
  status?: string;
  highlights?: string[];
};

// Content shared by all visual themes. Descriptions are grounded in the
// project sources documented in docs/project-sources.md.
export const projectEditorial: Record<string, Record<Locale, ProjectEditorial>> = {
  "simulapucv": {
    "es": {
      "shortDescription": "Simulación Monte Carlo para explorar trayectorias universitarias",
      "description": "SimulaPUCV modela la progresión académica de cohortes de Ingeniería Civil Eléctrica en la PUCV. Permite explorar titulación, retención y tiempo de egreso, editar mallas con prerrequisitos y observar trayectorias individuales. Combina una interfaz React con un motor de simulación en Go y dispone de almacenamiento SQLite portable o PostgreSQL para servidor.",
      "role": "Desarrollo y simulación académica",
      "status": "Proyecto académico",
      "highlights": [
        "Simulación Monte Carlo de cohortes y trayectorias",
        "Edición de mallas y prerrequisitos",
        "Modo portable con SQLite y servidor con PostgreSQL"
      ]
    },
    "en": {
      "shortDescription": "Monte Carlo simulation for exploring university trajectories",
      "description": "SimulaPUCV models academic progression for Electrical Civil Engineering cohorts at PUCV. It explores graduation, retention and completion time, with curriculum and prerequisite editing and individual student trajectories. A React interface connects to a Go simulation engine, with SQLite for portable use or PostgreSQL for server deployments.",
      "role": "Academic simulation and development",
      "status": "Academic project",
      "highlights": [
        "Monte Carlo cohort and trajectory simulation",
        "Curriculum and prerequisite editing",
        "Portable SQLite and PostgreSQL server modes"
      ]
    },
    "de": {
      "shortDescription": "Monte-Carlo-Simulation akademischer Studienverläufe",
      "description": "SimulaPUCV modelliert Studienverläufe im Studiengang Elektrotechnik an der PUCV. Untersucht werden Abschluss, Verbleib und Studiendauer. Studienpläne mit Voraussetzungen sind editierbar; individuelle Verläufe lassen sich betrachten. React und Go bilden die Anwendung, SQLite die portable und PostgreSQL die Servervariante.",
      "role": "Akademische Simulation und Entwicklung",
      "status": "Akademisches Projekt",
      "highlights": [
        "Monte-Carlo-Simulation von Kohorten und Studienverläufen",
        "Bearbeitung von Studienplänen und Voraussetzungen",
        "Portable SQLite- und PostgreSQL-Servervarianten"
      ]
    },
    "ru": {
      "shortDescription": "Моделирование учебных траекторий методом Монте-Карло",
      "description": "SimulaPUCV моделирует обучение студентов электротехнической инженерии в PUCV: выпуск, удержание и длительность обучения. Включает редактирование учебных планов и требований, а также индивидуальные траектории. Интерфейс React работает с движком Go; SQLite используется в переносимой версии, PostgreSQL — на сервере.",
      "role": "Разработка и учебное моделирование",
      "status": "Академический проект",
      "highlights": [
        "Моделирование траекторий и потоков методом Монте-Карло",
        "Редактирование учебных планов и требований",
        "Переносимая SQLite и серверная PostgreSQL"
      ]
    }
  },
  "omnidesk": {
    "es": {
      "shortDescription": "Calendarios, notas, tareas, colecciones y finanzas en un mismo espacio",
      "description": "OmniDesk reúne la organización cotidiana en una aplicación Angular con API NestJS y PostgreSQL. Incluye calendario y recordatorios, notas con autoguardado, tableros Kanban, colecciones con campos personalizados y finanzas con presupuestos y gráficos. Suma una paleta de comandos, temas y un proyecto Android con Capacitor.",
      "role": "Desarrollo de aplicación y API",
      "status": "Proyecto personal",
      "highlights": [
        "Calendario, notas, Kanban y colecciones personalizables",
        "Finanzas con presupuestos y gráficos",
        "Paleta de comandos, temas y proyecto Android"
      ]
    },
    "en": {
      "shortDescription": "Calendars, notes, tasks, collections and finances in one workspace",
      "description": "OmniDesk brings everyday organization into an Angular application backed by a NestJS API and PostgreSQL. It includes calendars and reminders, notes with autosave, Kanban boards, custom collections and finances with budgets and charts. A command palette, themes and an Android project using Capacitor complete the workspace.",
      "role": "Application and API development",
      "status": "Personal project",
      "highlights": [
        "Calendar, notes, Kanban and custom collections",
        "Finances with budgets and charts",
        "Command palette, themes and Android project"
      ]
    },
    "de": {
      "shortDescription": "Kalender, Notizen, Aufgaben, Sammlungen und Finanzen an einem Ort",
      "description": "OmniDesk bündelt die tägliche Organisation in einer Angular-Anwendung mit NestJS-API und PostgreSQL: Kalender, Erinnerungen, automatisch gespeicherte Notizen, Kanban-Boards, anpassbare Sammlungen und Finanzen mit Budgets und Diagrammen. Hinzu kommen eine Befehlspalette, Themes und ein Android-Projekt mit Capacitor.",
      "role": "Anwendungs- und API-Entwicklung",
      "status": "Persönliches Projekt",
      "highlights": [
        "Kalender, Notizen, Kanban und anpassbare Sammlungen",
        "Finanzen mit Budgets und Diagrammen",
        "Befehlspalette, Themes und Android-Projekt"
      ]
    },
    "ru": {
      "shortDescription": "Календарь, заметки, задачи, коллекции и финансы в одном месте",
      "description": "OmniDesk объединяет повседневные дела в приложении Angular с API NestJS и PostgreSQL: календарь, напоминания, заметки с автосохранением, Kanban, настраиваемые коллекции и финансы с бюджетами и графиками. Есть палитра команд, темы и Android-проект на Capacitor.",
      "role": "Разработка приложения и API",
      "status": "Личный проект",
      "highlights": [
        "Календарь, заметки, Kanban и настраиваемые коллекции",
        "Финансы с бюджетами и графиками",
        "Палитра команд, темы и Android-проект"
      ]
    }
  },
  "jamspace": {
    "es": {
      "shortDescription": "Un archivo creativo para el trabajo de una banda",
      "description": "JamSpace nace de una necesidad musical: reunir audios, ideas y letras de una banda en un espacio compartido. El proyecto conserva su enfoque en organizar material creativo y sesiones para facilitar el trabajo entre integrantes.",
      "role": "Desarrollo de herramienta musical",
      "status": "Proyecto personal",
      "highlights": [
        "Organización de audios, ideas y letras",
        "Material creativo y sesiones de una banda"
      ]
    },
    "en": {
      "shortDescription": "A creative archive for a band's work",
      "description": "JamSpace grows from a musical need: keeping a band's audio, ideas and lyrics in a shared space. The project focuses on organizing creative materials and sessions to support collaboration between band members.",
      "role": "Music-tool development",
      "status": "Personal project",
      "highlights": [
        "Organizing audio, ideas and lyrics",
        "Band creative materials and sessions"
      ]
    },
    "de": {
      "shortDescription": "Ein kreatives Archiv für die Arbeit einer Band",
      "description": "JamSpace entstand aus einem musikalischen Bedarf: Audios, Ideen und Texte einer Band an einem gemeinsamen Ort aufzubewahren. Im Mittelpunkt stehen die Organisation kreativer Materialien und Sessions sowie die Zusammenarbeit der Mitglieder.",
      "role": "Entwicklung eines Musikwerkzeugs",
      "status": "Persönliches Projekt",
      "highlights": [
        "Organisation von Audios, Ideen und Texten",
        "Kreatives Bandmaterial und Sessions"
      ]
    },
    "ru": {
      "shortDescription": "Творческий архив для работы музыкальной группы",
      "description": "JamSpace вырос из музыкальной потребности: хранить аудиозаписи, идеи и тексты группы в общем пространстве. Проект посвящён организации творческих материалов и сессий для совместной работы участников.",
      "role": "Разработка музыкального инструмента",
      "status": "Личный проект",
      "highlights": [
        "Организация аудио, идей и текстов",
        "Материалы и творческие сессии группы"
      ]
    }
  },
  "interiortwin": {
    "es": {
      "shortDescription": "Exploración de interiores 3D con objetos del mundo real",
      "description": "InteriorTwin explora cómo incorporar objetos escaneados de la realidad a una escena interior en Unity. El proyecto incluye selección y manipulación de objetos, interacción táctil y arrastre con detección de colisiones. Se desarrolló en equipo durante la carrera universitaria.",
      "role": "Desarrollo en equipo · Unity",
      "status": "Proyecto universitario",
      "highlights": [
        "Objetos escaneados integrados en un interior 3D",
        "Selección y arrastre táctil con comprobación de colisiones",
        "Escenas y recursos inspeccionables en Unity"
      ]
    },
    "en": {
      "shortDescription": "Exploring 3D interiors with real-world objects",
      "description": "InteriorTwin explores bringing scanned real-world objects into a Unity interior scene. The project includes object selection and manipulation, touch interaction and dragging with collision checks. It was developed as a university team project.",
      "role": "Team development · Unity",
      "status": "University project",
      "highlights": [
        "Scanned objects integrated into a 3D interior",
        "Touch selection and dragging with collision checks",
        "Scenes and assets available in Unity"
      ]
    },
    "de": {
      "shortDescription": "3D-Innenräume mit Objekten aus der realen Welt",
      "description": "InteriorTwin untersucht die Einbindung gescannter realer Objekte in eine Unity-Innenraumszene. Das Projekt umfasst Objektauswahl und -manipulation, Touch-Interaktion und Verschieben mit Kollisionsprüfung. Es entstand als Teamprojekt im Studium.",
      "role": "Teamentwicklung · Unity",
      "status": "Universitätsprojekt",
      "highlights": [
        "Gescannte Objekte in einem 3D-Innenraum",
        "Touch-Auswahl und Verschieben mit Kollisionsprüfung",
        "Szenen und Ressourcen im Unity-Editor"
      ]
    },
    "ru": {
      "shortDescription": "Трёхмерные интерьеры с объектами из реального мира",
      "description": "InteriorTwin исследует перенос отсканированных реальных объектов в интерьерную сцену Unity. В проекте есть выбор и перемещение объектов, сенсорное управление и проверка столкновений. Создан в команде во время обучения в университете.",
      "role": "Командная разработка · Unity",
      "status": "Университетский проект",
      "highlights": [
        "Отсканированные объекты в трёхмерном интерьере",
        "Сенсорный выбор и перемещение с проверкой столкновений",
        "Сцены и ресурсы для редактора Unity"
      ]
    }
  },
  "loopmania": {
    "es": {
      "shortDescription": "Aprender a programar construyendo secuencias de hechizos",
      "description": "LoopMania convierte secuencias, bucles y condicionales en piezas de un videojuego de puzles. El jugador arrastra comandos a un grimorio, los ejecuta y observa cómo su personaje recorre el nivel. El código incluye bloques anidados, tutoriales progresivos y evaluación de movimientos. Desarrollado con un compañero de universidad en Unity y C#.",
      "role": "Desarrollo colaborativo · Unity",
      "status": "Proyecto universitario",
      "highlights": [
        "Comandos arrastrables con bucles y condicionales anidados",
        "Tutoriales que introducen conceptos de forma progresiva",
        "Puzles con evaluación de movimientos"
      ]
    },
    "en": {
      "shortDescription": "Learn programming by building sequences of spells",
      "description": "LoopMania turns sequences, loops and conditionals into puzzle-game building blocks. Players drag commands into a spellbook, execute them and watch their character navigate each level. The code includes nested blocks, progressive tutorials and movement evaluation. Developed with a university teammate in Unity and C#.",
      "role": "Collaborative development · Unity",
      "status": "University project",
      "highlights": [
        "Draggable commands with nested loops and conditionals",
        "Tutorials introducing concepts progressively",
        "Puzzles with movement evaluation"
      ]
    },
    "de": {
      "shortDescription": "Programmieren lernen mit Sequenzen aus Zaubersprüchen",
      "description": "LoopMania macht Sequenzen, Schleifen und Bedingungen zu Bausteinen eines Rätselspiels. Befehle werden in ein Zauberbuch gezogen und ausgeführt, um die Figur durch das Level zu führen. Der Code enthält verschachtelte Blöcke, schrittweise Tutorials und Bewegungsbewertung. Mit einem Studienkollegen in Unity und C# entwickelt.",
      "role": "Gemeinsame Entwicklung · Unity",
      "status": "Universitätsprojekt",
      "highlights": [
        "Verschiebbare Befehle mit verschachtelten Schleifen und Bedingungen",
        "Tutorials mit schrittweiser Einführung",
        "Rätsel mit Bewegungsbewertung"
      ]
    },
    "ru": {
      "shortDescription": "Изучение программирования через последовательности заклинаний",
      "description": "LoopMania превращает последовательности, циклы и условия в элементы игры-головоломки. Игрок перетаскивает команды в книгу заклинаний, запускает их и наблюдает за движением персонажа. В коде есть вложенные блоки, пошаговые уроки и оценка количества ходов. Создан вместе с товарищем по университету на Unity и C#.",
      "role": "Совместная разработка · Unity",
      "status": "Университетский проект",
      "highlights": [
        "Перетаскиваемые команды с вложенными циклами и условиями",
        "Постепенное изучение понятий через уроки",
        "Головоломки с оценкой ходов"
      ]
    }
  },
  "judge-bot": {
    "es": {
      "shortDescription": "Elecciones de administradores con votos ponderados en Discord",
      "description": "Judge Bot organiza elecciones públicas mediante comandos slash de Discord. Los votos a favor suman dos puntos, los votos en contra restan uno y una votación adicional resuelve empates. La persistencia activa utiliza PostgreSQL; comandos, eventos y tareas programadas están separados en módulos.",
      "role": "Desarrollo de bot y automatización",
      "status": "Proyecto personal",
      "highlights": [
        "Votos ponderados y desempates mediante comandos slash",
        "Resultados persistentes en PostgreSQL",
        "Comandos, eventos y programación de tareas modulares"
      ]
    },
    "en": {
      "shortDescription": "Weighted voting for administrator elections on Discord",
      "description": "Judge Bot runs public elections through Discord slash commands. Votes in favor add two points, votes against subtract one and a further vote resolves ties. Active persistence uses PostgreSQL; commands, events and scheduled tasks are organized into separate modules.",
      "role": "Bot development and automation",
      "status": "Personal project",
      "highlights": [
        "Weighted votes and tie-breaking through slash commands",
        "Persistent results in PostgreSQL",
        "Modular commands, events and scheduling"
      ]
    },
    "de": {
      "shortDescription": "Gewichtete Administratorwahlen auf Discord",
      "description": "Judge Bot organisiert öffentliche Wahlen über Discord-Slash-Befehle. Pro-Stimmen zählen zwei Punkte, Contra-Stimmen ziehen einen ab; eine weitere Abstimmung entscheidet bei Gleichstand. Die aktive Speicherung nutzt PostgreSQL. Befehle, Ereignisse und geplante Aufgaben sind in Module getrennt.",
      "role": "Bot-Entwicklung und Automatisierung",
      "status": "Persönliches Projekt",
      "highlights": [
        "Gewichtete Stimmen und Stichwahlen per Slash-Befehl",
        "Dauerhafte Ergebnisse in PostgreSQL",
        "Modulare Befehle, Ereignisse und Aufgabenplanung"
      ]
    },
    "ru": {
      "shortDescription": "Выборы администраторов Discord с взвешенным голосованием",
      "description": "Judge Bot проводит публичные выборы через slash-команды Discord. Голос за добавляет два балла, против — вычитает один; отдельное голосование разрешает ничью. Для хранения используется PostgreSQL. Команды, события и запланированные задачи разделены на модули.",
      "role": "Разработка бота и автоматизация",
      "status": "Личный проект",
      "highlights": [
        "Взвешенные голоса и разрешение ничьих через slash-команды",
        "Хранение результатов в PostgreSQL",
        "Модульные команды, события и планировщик"
      ]
    }
  },
  "university-timetabling": {
    "es": {
      "shortDescription": "Horarios universitarios entre restricciones y algoritmos",
      "description": "Prototipo académico que explora la asignación de asignaturas, docentes y salas a bloques horarios. Combina una heurística greedy para distribuir clases con backtracking para construir horarios de estudiantes sin choques y reducir ventanas. Incluye generación de instancias sintéticas y reportes CSV, Excel y gráficos. Se conserva como una exploración incompleta del problema, no como un producto terminado.",
      "role": "Experimentación algorítmica",
      "status": "Prototipo académico incompleto",
      "highlights": [
        "Asignación greedy de bloques y backtracking por estudiante",
        "Evaluación de choques, ventanas y balance",
        "Instancias sintéticas, reportes CSV/Excel y gráficos"
      ]
    },
    "en": {
      "shortDescription": "University schedules shaped by constraints and algorithms",
      "description": "An academic prototype exploring the allocation of courses, teachers and rooms to timetable slots. It combines a greedy heuristic for class allocation with backtracking to build student schedules without conflicts and reduce gaps. Includes synthetic instance generation and CSV, Excel and chart reports. Preserved as an incomplete exploration rather than a finished product.",
      "role": "Algorithm experimentation",
      "status": "Incomplete academic prototype",
      "highlights": [
        "Greedy slot allocation and per-student backtracking",
        "Conflict, gap and balance evaluation",
        "Synthetic instances, CSV/Excel reports and charts"
      ]
    },
    "de": {
      "shortDescription": "Universitätsstundenpläne zwischen Bedingungen und Algorithmen",
      "description": "Akademischer Prototyp zur Zuordnung von Kursen, Lehrkräften und Räumen zu Zeitfenstern. Eine Greedy-Heuristik verteilt Veranstaltungen; Backtracking erstellt studentische Stundenpläne ohne Überschneidungen und mit weniger Lücken. Enthält synthetische Instanzen sowie CSV-, Excel- und Diagrammberichte. Als unvollständige Untersuchung des Problems erhalten.",
      "role": "Algorithmische Experimente",
      "status": "Unvollständiger akademischer Prototyp",
      "highlights": [
        "Greedy-Zeitfensterzuordnung und Backtracking pro Studierendem",
        "Bewertung von Konflikten, Lücken und Verteilung",
        "Synthetische Instanzen, CSV-/Excel-Berichte und Diagramme"
      ]
    },
    "ru": {
      "shortDescription": "Университетские расписания: ограничения и алгоритмы",
      "description": "Учебный прототип распределения курсов, преподавателей и аудиторий по временным блокам. Жадная эвристика распределяет занятия, а поиск с возвратом строит расписания студентов без конфликтов и сокращает окна. Есть генерация синтетических данных, отчёты CSV и Excel и графики. Сохранён как незавершённое исследование задачи.",
      "role": "Алгоритмические эксперименты",
      "status": "Незавершённый учебный прототип",
      "highlights": [
        "Жадное распределение и поиск с возвратом для студентов",
        "Оценка конфликтов, окон и баланса",
        "Синтетические данные, CSV/Excel и графики"
      ]
    }
  },
  "block-breaker": {
    "es": {
      "shortDescription": "Un arcade para poner en juego los patrones de diseño",
      "description": "Juego académico de romper bloques, inspirado en Breakout y Arkanoid, desarrollado en Java con LibGDX. Incluye tres dificultades, bloques con distinta resistencia, potenciadores de velocidad, puntuación, vidas y pausa. Usa Strategy para los comportamientos de la pelota, Template Method y Builder para los niveles, y Singleton para recursos y sonido.",
      "role": "Desarrollo de videojuego · Java",
      "status": "Proyecto académico",
      "highlights": [
        "Tres dificultades, potenciadores, vidas y puntuación",
        "Strategy, Builder, Template Method y Singleton",
        "Lógica reutilizable con Java y LibGDX"
      ]
    },
    "en": {
      "shortDescription": "An arcade game that puts design patterns into play",
      "description": "An academic brick-breaking game inspired by Breakout and Arkanoid, built in Java with LibGDX. It includes three difficulty levels, bricks with different durability, speed power-ups, score, lives and pause controls. Strategy handles ball behaviors, Template Method and Builder structure levels, and Singleton manages resources and sound.",
      "role": "Game development · Java",
      "status": "Academic project",
      "highlights": [
        "Three difficulties, power-ups, lives and scoring",
        "Strategy, Builder, Template Method and Singleton",
        "Reusable game logic with Java and LibGDX"
      ]
    },
    "de": {
      "shortDescription": "Ein Arcade-Spiel als praktische Anwendung von Entwurfsmustern",
      "description": "Akademisches Blockzerstörer-Spiel, inspiriert von Breakout und Arkanoid, mit Java und LibGDX. Drei Schwierigkeitsgrade, unterschiedlich robuste Blöcke, Geschwindigkeitsboni, Punkte, Leben und Pause. Strategy steuert Ballverhalten, Template Method und Builder strukturieren Level; Singleton verwaltet Ressourcen und Ton.",
      "role": "Spieleentwicklung · Java",
      "status": "Akademisches Projekt",
      "highlights": [
        "Drei Schwierigkeitsgrade, Boni, Leben und Punkte",
        "Strategy, Builder, Template Method und Singleton",
        "Wiederverwendbare Spiellogik mit Java und LibGDX"
      ]
    },
    "ru": {
      "shortDescription": "Аркада для практического применения паттернов проектирования",
      "description": "Учебная игра в духе Breakout и Arkanoid на Java и LibGDX. Три уровня сложности, блоки разной прочности, бонусы скорости, очки, жизни и пауза. Strategy управляет поведением мяча, Template Method и Builder — уровнями, Singleton — ресурсами и звуком.",
      "role": "Разработка игры · Java",
      "status": "Учебный проект",
      "highlights": [
        "Три сложности, бонусы, жизни и очки",
        "Strategy, Builder, Template Method и Singleton",
        "Переиспользуемая игровая логика на Java и LibGDX"
      ]
    }
  }
};
