<template>
    <div>
        <div class="user-list">
            <div class="user-item">
                <div class="user-email"></div>
            </div>
        </div>
    </div>
</template>

<script>
import {getUsers} from "@/store/user"

export default {
    name: 'Users',
    setup() {
        const users = getUsers()
        console.log(users.value, 'users')
       users.value.push({
            id: 1,
            email: 'test'
        })
        console.log(users.value, 'users')
    }
}
</script>