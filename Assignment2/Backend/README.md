# Cometchat

### 1. login API

`http://localhost:3001/login`

#### login using axios

```
    axios({
            method: 'POST',
            url: "http://localhost:3001/login",
            withCredentials: true,
            data: {
                    email:"test@test.com",
                    password:"password"
                  }
            }
        )
            .then((r) => console.log(r))
            .catch((e) => console.log(e))
```

### 2. get all user using axios

```
    axios({
            method: 'GET',
            url: "http://localhost:3001/user",
            withCredentials: true,
          }
        )
            .then((r) => console.log(r))
            .catch((e) => console.log(e))
```

### 3. createUser using axios

```
    axios({
            method: 'POST',
            url: "http://localhost:3001/user",
            withCredentials: true,
            data:{
                firstname:"sample",
                lastname:"test",
                email:"test@test.com",
                password:"password"
            }
          }
        )
            .then((r) => console.log(r))
            .catch((e) => console.log(e))
```

### 4. delete user using axios

```
    axios({
            method: 'DELETE',
            url: "http://localhost:3001/user",
            withCredentials: true,
            data:{
                id:1111111111111
            }
          }
        )
            .then((r) => console.log(r))
            .catch((e) => console.log(e))
```

### 5. update user using axios

```
    axios({
            method: 'PUT',
            url: "http://localhost:3001/user",
            withCredentials: true,
            data:{
                id:1111111111111,
                firstname:"sample",
                lastname:"test",
            }
          }
        )
            .then((r) => console.log(r))
            .catch((e) => console.log(e))
```

### 6. upload image using axios

```
    axios({
            method: 'PUT',
            url: "http://localhost:3001/user",
            withCredentials: true,
            data:{
                id:1111111111111,
                profile_image:"https://something.com/something.jpg"
            }
          }
        )
            .then((r) => console.log(r))
            .catch((e) => console.log(e))
```
