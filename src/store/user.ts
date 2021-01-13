import {ref, reactive} from 'vue'

enum Role {
    BASIC = 'basic',
    ADMIN = 'admin',
}

export const state = reactive({
    role: Role.BASIC
})

export const users = ref([
    {
        id: Math.trunc(Date.now() * Math.random() * 100000),
        email: 'iresonancei@mail.ru'
    }
])

export const getUsers = () => users

export const modifiedRoleUser = async () => {
    state.role = Role.ADMIN
}

export default {users, getUsers}


