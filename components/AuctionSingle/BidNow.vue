<template>
  <div class="shadow-[5px_7px_35px_0px_rgba(113,113,113,0.1)] rounded p-4 mt-6">
    <h3
      class="text-[20px] font-extrabold text-gray-100 inline-block uppercase mb-2.5"
    >
      bid now
    </h3>
    <p class="font-bold text-gray-100 mb-6">Bid Amount : Minimum Bid 20.00$</p>
    <div class="flex items-center">
      <FormInput
        v-model="form.values.bid_amount"
        is-transparent
        type="number"
        :error="form.$v.value.bid_amount?.$error"
        placeholder="Enter your email"
        input-class="pl-3 py-2.5 !bg-[#F4F7F5] !font-medium text-black   w-full"
        class="!font-medium !w-full rounded-tl-[5px] rounded-bl-[5px] rounded-tr-[0px] rounded-br-[0px]"
      />
      <BaseButton
        class="w-max !text-sm !font-bold !leading-none p-5 !text-white hover:!text-black rounded-none rounded-tr-[5px] rounded-br-[5px] rounded-tl-[0px] rounded-bl-[0px]"
        variant="disabled"
        :text="'Send'"
        @click="sendMail"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import { required } from '@vuelidate/validators'

const form = useForm(
  {
    bid_amount: '',
  },
  {
    bid_amount: { required },
  },
)
const sendMail = () => {
  form.$v.value.$touch()
  if (!form.$v.value.$invalid) {
    try {
      useApi()
        .$post('auction/bid', {
          body: {
            bid_amount: form.values.bid_amount,
            auction: props.auction.id,
          },
        })
        .then(() => {
          form.$v.value.$reset()
          form.values.bid_amount = ''
        })
    } catch (e) {
      console.log(e)
    }
  }
}

interface Props {
  auction: {
    id: number
  }
}

const props = defineProps<Props>()
</script>
