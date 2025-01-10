import {test as myTest} from "@playwright/test";

type alex = {
    age: number,
    email: string
}

const myFixtureTest = myTest.extend<alex>({
    age: 20,
    email: "alex@example.com",
})

export const test = myFixtureTest;