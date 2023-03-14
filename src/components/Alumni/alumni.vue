<template>
  <div></div>
</template>

<script lang="ts">
import { defineComponent, reactive, ref, onMounted } from "vue";
import { majors } from "./subjectsData";

export default defineComponent({
  name: "Alumni",
  components: {},
  setup() {
    const variable = ref("");
    const data = reactive([
      {
        name: "",
      },
    ]);

    interface Alumni {
      name: string;
      year: number;
      major: string;
      subjects: string;
    }

    const method = () => {};

    return { variable, method };
  },
});
</script>
