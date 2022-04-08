
const listItem = [
    {
        id: 1,
        title: 'Tìm thấy mảnh vỡ máy bay rơi ở Iran làm 66 người chết',
        level: 0
    },
    {
        id: 2,
        title: 'Không còn tranh cướp lộc hoa tre ở lễ hội đền Gióng 2018',
        level: 3
    },
    {
        id: 3,
        title: 'Hơn 37.000 người nhập viện vì tai nạn giao thông, đốt pháo',
        level: 2
    },
    {
        id: 4,
        title: 'Tìm thấy mảnh vỡ máy bay rơi ở Iran làm 66 người chết',
        level: 2
    },
    {
        id: 5,
        title: 'Không còn tranh cướp lộc hoa tre ở lễ hội đền Gióng 2018',
        level: 3
    },
    {
        id: 6,
        title: 'Hơn 37.000 người nhập viện vì tai nạn giao thông, đốt pháo',
        level: 1
    }
]

export const getListTodo = () => new Promise((resolve) => resolve(listItem));
export const getItemById = (id) => new Promise((resolve) => resolve(listItem.find(x => x.id === id)))