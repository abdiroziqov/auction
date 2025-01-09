<template>
  <div>
    <FormGroup label="email" for-id="email">
      <FormInput
        v-model="values.email"
        input-id="email"
        placeholder="Enter email"
        :error="form.$v.value.email.$error"
      />
    </FormGroup>

    <BaseButton
      class="w-full mt-5"
      :disabled="!values.email"
      v-bind="{ loading }"
      text="Reset"
      @click="submit"
    />
  </div>
</template>

<script setup lang="ts">
import { useCustomToast } from '~/composables/useCustomToast'
import type { TForm } from '~/composables/useForm'
// import { useAuthStore } from '~/store/auth'
// import type { TCheckEmailData, TRequestOtpData } from '~/types/auth'

interface Props {
  form: TForm<any>
}

// const { showToast } = useCustomToast()
const props = defineProps<Props>()

const { form } = unref(props)
const { values, $v } = form
// const store = useAuthStore()
const emit = defineEmits(['next'])
const loading = ref(false)
async function submit() {
  $v.value.$touch()
  if (!$v.value.$invalid) {
    // try {
    //   loading.value = true
    //   const data: TCheckEmailData = await store.checkAccount(values.email)
    //   if (data?.exists) {
    //     const result: TRequestOtpData = await store.requestOtp(values.email)
    //     store.requestOtpData = result
    //     emit('next')
    //   } else {
    //     showToast(('email_not_available_in_system'''), 'error')
    //   }
    //   loading.value = false
    // } catch (e) {
    //   loading.value = false
    //   console.log(e)
    // }
  }
}
</script>
