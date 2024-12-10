const numbers = [1, 2, 3, 4, 5];

const newNumbers = [...numbers, 6];

console.log(newNumbers);


const users = [
    {id: 1, name: 'Alice'},
    {id: 2, name: 'Bob'},
];

const newUsers = users.map(user => user.id === 2 ? {...user, name: 'Robert'} : user)


const settings = {
    theme: 'light',
    user: {
        name: 'Alice',
        preferences: {
            notifications: true,
            darkMode: false,
        },
    },
};

const newSettings = {
    ...settings, user:
        {
            ...settings.user, preferences:
                {...settings.user.preferences, darkMode: true}
        }
};


const projects = [
    {
        id: 1,
        name: 'Project A',
        tasks: [{id: 1, title: 'Task 1'}, {id: 2, title: 'Task 2'}],
    },
];

const newProjects = projects.map(project => ({
        ...project,
        tasks: project.tasks.map(t => t.id === 2 ? {...t, title: 'Updated Task'} : t
        )
    }),
)


const product = {
    id: 1,
    name: 'Phone',
    specifications: {
        color: 'Black',
        memory: '128GB',
    },
};

const newProduct = {
    ...product, specifications: {
        ...product.specifications,
        warranty: {period: '2years', provider: 'Manufacturer'},
    }
};

console.log(newProduct);

//Создайте новый массив, где у элемента с id: 2 в массиве items изменена цена на 25, не изменяя оригинальный массив.
const orders = [
    {id: 1, items: [{id: 1, price: 10}, {id: 2, price: 20}]},
    {id: 2, items: [{id: 3, price: 15}]},
];

const newOrders = orders.map(order => order.id === 2 ?
    {
        ...order, items: order.items.map(
            item => item.id === 3 ? {...item, price: 25} : item),
    } : order);

console.log(...newOrders);


const obj = {
    name: "Alice",
    age: 30,
    skills: ["JavaScript", "React"],
    address: {city: "New York", zip: 10001}
};

const copy = deepCopy(obj);
console.log(copy); // Глубокая копия obj
console.log(copy === obj); // false
console.log(copy.address === obj.address); // false

function deepCopy(obj) {
    return {...obj, skills: [...obj.skills], address: {...obj.address}};
}

const students = [
    {id: 1, name: 'Alice', grades: {math: 90, english: 85}},
];
//Создайте новый массив, добавив каждому студенту новый уровень вложенности: attendance: { present: true, absences: 0 }, не изменяя оригинальный массив.
const newStudents = students.map(student => ({
    ...student,
    attendance: {present: true, absences: 0}
}));




const appState = {
    user: {
        id: 1,
        profile: {
            name: 'Alice',
            preferences: {
                theme: 'light',
                notifications: true,
            },
        },
    },
    settings: {
        version: '1.0.0',
        languages: ['English', 'Spanish'],
    },
};

//Создайте новый объект, где:
//
// Поле theme изменено на 'dark'.
// Добавлен новый язык 'French' в массив languages.

const newAppState = {
    ...appState,
    user: {
        ...appState.user,
        profile: {
            ...appState.user.profile,
            preferences: {
                ...appState.user.profile.preferences,
                theme: 'dark',
            },
        },
    },
    settings: {
        ...appState.settings,
        languages: [...appState.settings.languages, 'French']
    },
};





const organization = {
    name: 'TechCorp',
    employees: [
        {id: 1, name: 'Alice', roles: ['developer', 'mentor']},
        {id: 2, name: 'Bob', roles: ['manager']},
    ],
    locations: {
        headquarters: {city: 'San Francisco', country: 'USA'},
        branches: [
            {city: 'Berlin', country: 'Germany'},
            {city: 'Tokyo', country: 'Japan'},
        ],
    },
};

//Создайте новый объект, где:
//
// У первого сотрудника добавлена роль 'lead'.
// В branches добавлен новый филиал { city: 'Sydney', country: 'Australia' }

const newOrganization = {
    ...organization,
    employees: organization.employees.map(employee =>
        employee.id === 1 ?
        {...employee, roles: [...employee.roles, 'lead']}
            : employee
    ),
    locations: {...organization.locations,
    branches: [
        ...organization.locations.branches,
        { city: 'Sydney', country: 'Australia'}
    ]
    }
};

const stores = [
    {
        id: 1,
        name: 'Store A',
        products: [
            { id: 1, name: 'Laptop', price: 1000 },
            { id: 2, name: 'Phone', price: 500 },
        ],
    },
    {
        id: 2,
        name: 'Store B',
        products: [
            { id: 3, name: 'Tablet', price: 300 },
        ],
    },
];
//Создать новый массив, где цена продукта с id: 2 в магазине Store A увеличена до 550.

const updatedStores = stores.map(store => store.name === 'Store A' ?
store.products.map(product => product.id === 2 ? {...product, price: 550 }: product ):store)

console.log(updatedStores);