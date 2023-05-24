<template>
    <div class="card flex justify-content-center">
        <MultiSelect v-model="selectedCountries"
                     :options="countries"
                     class="w-full md:w-20rem pt-5"
                     display="chip"
                     optionLabel="name"
                     placeholder="Select Countries">
            <template #option="slotProps">
                <div class="flex align-items-center">
                    <img :alt="slotProps.option.name"
                         :class="`flag flag-${slotProps.option.code.toLowerCase()} mr-2`"
                         src="https://primefaces.org/cdn/primevue/images/flag/flag_placeholder.png"
                         style="width: 18px" />
                    <div>{{ slotProps.option.name }}</div>
                </div>
            </template>
            <template #footer>
                <div class="py-2 px-3">
                    <b>{{ selectedCountries ? selectedCountries.length : 0 }}</b> item{{
                        (selectedCountries ? selectedCountries.length : 0) > 1 ? 's' : ''
                    }} selected.
                </div>
            </template>
        </MultiSelect>
    </div>
</template>

<script lang="ts" setup>
import MultiSelect from 'primevue/multiselect';
import { ref } from 'vue';

const selectedCountries = ref();
const countries = ref([
    { name: 'Australia', code: 'AU' },
    { name: 'Brazil', code: 'BR' },
    { name: 'China', code: 'CN' },
    { name: 'Egypt', code: 'EG' },
    { name: 'France', code: 'FR' },
    { name: 'Germany', code: 'DE' },
    { name: 'India', code: 'IN' },
    { name: 'Japan', code: 'JP' },
    { name: 'Spain', code: 'ES' },
    { name: 'United States', code: 'US' },
]);
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
h3 {
  margin: 40px 0 0;
}

ul {
  padding: 0;
  list-style-type: none;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
