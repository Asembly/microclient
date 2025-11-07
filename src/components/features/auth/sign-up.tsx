'use client'
import { signUp } from "@/utils/actions";
import { Button, Field, Input, Link, Stack, Text, VStack } from "@chakra-ui/react";
import { useActionState } from "react";

export default function SignUp()
{
    const [_, formAction] = useActionState(signUp, {} as any)

    return(
        <form action={formAction}>
            <Stack gap="8" maxW="sm" css={{ "--field-label-width": "96px" }} >
                <Field.Root orientation="horizontal">
                    <Field.Label>Username</Field.Label>
                    <Input name="username" placeholder="user" flex="1" />
                </Field.Root>

                <Field.Root orientation="horizontal">
                    <Field.Label>Password</Field.Label>
                    <Input name="password" type="password" placeholder="password" flex="1" />
                </Field.Root>

                <Field.Root orientation="horizontal">
                    <Button type="submit" w={"full"}>Зарегистрироваться</Button>
                </Field.Root>

                <Field.Root orientation="horizontal" flexDirection={'row'} justifyContent={'center'}>
                    <Text>
                        есть аккаунт? {" "} 
                        <Link
                            variant="underline"
                            href="/sign-in"
                            colorPalette="teal"
                        >
                            логин
                        </Link>
                    </Text>
                </Field.Root>
            </Stack>
        </form>
    )
}