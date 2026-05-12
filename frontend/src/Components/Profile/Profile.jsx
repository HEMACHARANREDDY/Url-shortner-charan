import { Avatar, Container, Stack } from '@mantine/core'
import React from 'react'

export default function Profile() {
    const dummy={
        name:"Charan Reddy",
        userId:"123456789",
        email:"hemacharan499@gmail.com",
        avatar:"https://avatars.githubusercontent.com/u/123456789?v=4"
    }
    return (
        <Container size="sm" mt="xl">
               <Stack
      h={300}
      bg="var(--mantine-color-body)"
      align="center"
      justify="center"
      gap="md"
    >
            <Avatar src={dummy.avatar} alt="Profile avatar" />
            <h1> {dummy.name}</h1>
            <p>User Id: {dummy.userId}</p>
            <p>Email: {dummy.email}</p>
            </Stack>
        </Container>
    )
}
