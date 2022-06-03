export const URL = "http://localhost:9292";

export const login = async (userInfo) => {
  return (
    fetch(`${URL}/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userInfo),
      })
      .then((r) => r.json())
  )
}

export const signup = async (newUser) => {
    return (
      fetch(`${URL}/signup`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newUser),
        })
        .then((r) => r.json())
    )
}

export const editUser = (id, data) => {
    return (
      fetch(`${URL}/user/${id}`, {
        method: 'PATCH',
        headers: {
          'content-type': 'application/json'
        }, body: JSON.stringify(data)
      })
    )
}

export const deleteUser = (id) => {
  return (
    fetch(`${URL}/user/${id}`, {
      method: "DELETE",
    })
  )
}

export const addExercise = (exercise) => {
  return (
    fetch(`${URL}/exercise/new`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(exercise),
      })
      .then(r => r.json())
  )
}

export const getInfo = (id) => {
  return (
    fetch(`${URL}/user/${id}`)
      .then((r) => r.json())
  )
}

export const deleteExercise = (id) => {
  return (
    fetch(`${URL}/exercise/${id}`, {
      method: 'DELETE'
    })
  )
}
