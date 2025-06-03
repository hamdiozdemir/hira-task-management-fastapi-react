import React from "react";
import { Container, Image, Input, Text } from "@chakra-ui/react"

import { type SubmitHandler, useForm } from "react-hook-form"
import { FiLock, FiMail } from "react-icons/fi"

import type { Body_login_login_access_token as AccessToken } from "../client"
import { Button } from "../components/ui/button"
import { Field } from "../components/ui/field"
import { InputGroup } from "../components/ui/input-group"
import { PasswordInput } from "../components/ui/password-input"
import useAuth from "../hooks/useAuth"
import { emailPattern, passwordRules } from "../utils"

import { Link } from "react-router";


function Login() {


  const { loginMutation, error, resetError } = useAuth()
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<AccessToken>({
    mode: "onBlur",
    criteriaMode: "all",
    defaultValues: {
      username: "",
      password: "",
    },
  })

  const onSubmit: SubmitHandler<AccessToken> = async (data) => {
    if (isSubmitting) return

    resetError()

    try {
      await loginMutation.mutateAsync(data)
    } catch {
      // error is handled by useAuth hook
    }
  }

  return (
    <>
      <Container
        as="form"
        onSubmit={handleSubmit(onSubmit)}
        // h="100vh"
        maxW="sm"
        alignItems="stretch"
        justifyContent="center"
        gap={4}
        centerContent
        p={4}
      >
        <Field
          invalid={!!errors.username}
          errorText={errors.username?.message || !!error}
        >
          <InputGroup w="100%" startElement={<FiMail />}>
            <Input
              id="username"
              {...register("username", {
                required: "Username is required",
                pattern: emailPattern,
              })}
              placeholder="Email"
              type="email"
            />
          </InputGroup>
        </Field>
        <PasswordInput
          type="password"
          startElement={<FiLock />}
          {...register("password", passwordRules())}
          placeholder="Password"
          errors={errors}
        />
        <Link to="/recover-password" className="main-link">
          Forgot Password?
        </Link>
        <Button variant="solid" type="submit" loading={isSubmitting} size="md">
          Log In
        </Button>
        <Text>
          Don't have an account?{" "}
          <Link to="/signup" className="main-link">
            Sign Up
          </Link>
        </Text>
      </Container>
    </>
  )
}

export default Login;
