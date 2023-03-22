<template>
  <div></div>
</template>

<script lang="ts">
import { defineComponent, reactive, ref, onMounted } from "vue";

export default defineComponent({
  name: "Alumni",
  components: {},
  props: {
    name: {
      type: String,
      required: true,
    },
    year: {
      type: Number,
      required: true,
    },
    major: {
      type: String,
      required: true,
    },
    subjects: {
      type: String,
      required: true,
    },
  },
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
