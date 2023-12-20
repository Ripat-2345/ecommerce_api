<h1>Hello ini adalah project backend membangun REST API ecommerce.</h1>

<h4>Auth Request</h4>
<table border=1>
    <tr>
        <th>Method</th>
        <th>Routes</th>
        <th>Body</th>
        <th>Result</th>
    </tr>
    <tr>
        <td><b>POST</td>
        <td><b>localhost:3000/auth/login</td>
        <td>
            <pre>
                <code>
{
    "email": "erin@students.com",
    "password": "Erin1234"
}
                </code>
            </pre>
        </td>
        <td>
            <pre>
                <code>
{
    "status": 200,
    "message": "User Login",
    "data": {
        "id": 13,
        "name": "Erin",
        "username": "Erin Chan",
        "email": "erin@students.com",
        "avatar": "afeojiajefio.jpg",
    },
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9"
}
                </code>
            </pre>
        </td>
    </tr>
    <tr>
        <td><b>POST</td>
        <td><b>localhost:3000/auth/register</td>
        <td>
            <pre>
                <code>
{
    "name": "Iqbal",
    "username": "Iqbal Syah",
    "password": "iqbalmakanmieayam",
    "email": "iqbal123@students.com",
    "avatar": "kocakkluuu.jpg"
} 
                </code>
            </pre>
        </td>
        <td>
            <pre>
                <code>
{
    "status": 200,
    "message": "POST create new user",
    "data": {
        "id": 18,
        "name": "Iqbal",
        "username": "Iqbal Syah",
        "password": "$2b$10$N/xWUCNiAjzSFtw/OFGJAOKZ44nsTCAPWCWDp6SmVqJsiuu5826vS",
        "email": "iqbal123@students.com",
        "avatar": "kocakkluuu.jpg",
        "updatedAt": "2023-12-20T07:38:20.397Z",
        "createdAt": "2023-12-20T07:38:20.397Z"
    }
}
                </code>
            </pre>
        </td>
    </tr>
</table>

<br>

<h4>User Request</h4>
<table border=1>
    <tr>
        <th>Method</th>
        <th>Routes</th>
        <th>Body</th>
        <th>Result</th>
    </tr>
    <tr>
        <td><b>GET</td>
        <td><b>localhost:3000/users</td>
        <td>
            <pre>
                <code>
                </code>
            </pre>
        </td>
        <td>
            <pre>
                <code>
{
    "status": 200,
    "message": "GET all users",
    "data": [
        {
            "id": 12,
            "name": "Ucok Kali Kau nih",
            "username": "Ucok Kontrollor",
            "password": "$2b$10$AJwbHhKhcjCtVLjasDgifO1.yyde3m9VlkL2wAE6fkhohhxUFR9Um",
            "email": "Ucok@makan.com",
            "avatar": "Ucoknih.jpg",
            "createdAt": "2023-12-13T04:40:45.000Z",
            "updatedAt": "2023-12-13T04:45:09.000Z"
        },
        {
            "id": 14,
            "name": "Iqbal",
            "username": "Iqbal Syah",
            "password": "$2b$10$SxVTo2YLbqtuZAZu75hyyeMIiN07vL2KsjB5n3CTEjOzao1w9MNLW",
            "email": "iqbal@students.com",
            "avatar": "kocakkluuu.jpg",
            "createdAt": "2023-12-13T05:18:45.000Z",
            "updatedAt": "2023-12-13T05:18:45.000Z"
        },
    ]
}
                </code>
            </pre>
        </td>
    </tr>
    <tr>
        <td><b>POST</td>
        <td><b>localhost:3000/users</td>
        <td>
            <pre>
                <code>
{
    "name": "Erin",
    "username": "Erin Chan",
    "password": "Erin1234",
    "email": "erin@students.com",
    "avatar": "afeojiajefio.jpg"
}
                </code>
            </pre>
        </td>
        <td>
            <pre>
                <code>
{
    "status": 200,
    "message": "POST create new user",
    "data": {
        "id": 19,
        "name": "Erin",
        "username": "Erin Chan",
        "password": "$2b$10$TBePF1ns.oELv/VgBEuX9.lQAn1kFf1/ZQ8bhE5egOXSV8KKVhFfe",
        "email": "erin@students.com",
        "avatar": "afeojiajefio.jpg",
        "updatedAt": "2023-12-20T07:45:39.076Z",
        "createdAt": "2023-12-20T07:45:39.076Z"
    }
}
                </code>
            </pre>
        </td>
    </tr>
    <tr>
        <td><b>PATCH</td>
        <td><b>localhost:3000/users/:id_user</td>
        <td>
            <pre>
                <code>
{
    "name": "Ucok Kali Kau nih",
    "username": "Ucok Kontrollor",
    "password": "Ucok aj",
    "email": "Ucok@makan.com",
    "avatar": "Ucoknih.jpg"
}
                </code>
            </pre>
        </td>
        <td>
            <pre>
                <code>
{
    "status": 200,
    "message": "PATCH update user id:12",
    "data": {
        "id": 12,
        "name": "Ucok Kali Kau nih",
        "username": "Ucok Kontrollor",
        "password": "$2b$10$f5XQwK0kMJpMMHD4d7/OqeVZZMKaVm22QQQzAF0vpjnXXVOChzSEi",
        "email": "Ucok@makan.com",
        "avatar": "Ucoknih.jpg"
    }
}
                </code>
            </pre>
        </td>
    </tr>
    <tr>
        <td><b>DELETE</td>
        <td><b>localhost:3000/users/:id_user</td>
        <td>
            <pre>
                <code>
                </code>
            </pre>
        </td>
        <td>
            <pre>
                <code>
{
    "status": 200,
    "message": "DELETE delete user id:12"
}
                </code>
            </pre>
        </td>
    </tr>
</table>