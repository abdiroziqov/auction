<template>
  <div>
    <div class="flex flex-col gap-4">
      <FormGroup label="Username" for-id="username">
        <FormInput
          v-model="values.username"
          input-id="username"
          placeholder="Enter username"
          input-class="pl-3 py-2.5 !bg-[#F4F7F5] !font-medium text-black"
          :error="form.$v.value.username.$error"
        />
      </FormGroup>
      <FormGroup label="Password" for-id="password">
        <FormInputPassword
          v-model="values.password"
          input-id="password"
          placeholder="Enter password"
          input-class="pl-3 py-2.5 !bg-[#F4F7F5] !font-medium text-black"
          :error="form.$v.value.password.$error"
        />
      </FormGroup>
      <div>
        <button
          class="text-sm leading-20 font-medium underline text-blue text-left w-auto inline-block transition-300 hover:text-dark"
          @click="$emit('password')"
        >
          Forgot Password
        </button>
      </div>
    </div>

    <BaseButton
      class="w-full mt-5"
      :text="'Login'"
      variant="orange"
      :disabled="isDisabled"
      :loading="loading"
      @click="submit"
    />
    <div class="flex-center gap-2 mt-3">
      <p class="text-dark/50 leading-20 text-sm font-medium">
        Don't have an account?
      </p>
      <button
        class="text-sm leading-20 font-medium text-dark hover:text-blue transition-300"
        @click="$emit('register')"
      >
        Registration
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { TForm } from '~/composables/useForm'

interface Props {
  form: TForm<any>
  loading: boolean
}

const props = defineProps<Props>()
const emit = defineEmits(['on-submit', 'password', 'register'])

const { form } = unref(props)
const { values, $v } = form

const isDisabled = ref(true)

function submit() {
  $v.value.$touch()
  if (!$v.value.$invalid) {
    emit('on-submit')
  }
}

watch(
  () => values,
  () => {
    if (values?.email?.length && values?.password?.length) {
      isDisabled.value = false
    } else {
      isDisabled.value = false
    }
  },
  {
    deep: true,
    immediate: true,
  },
)
</script>
