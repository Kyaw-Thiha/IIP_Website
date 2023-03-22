<template>
  <div>
    <AlumniList
      v-for="alumni in alumniList"
      :name="alumni.name"
      :year="alumni.year"
      :major="alumni.major"
      :subjects="alumni.subjects"
    />
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive, ref, onMounted } from "vue";
import Alumni from "./Alumni.vue";

export default defineComponent({
  name: "AlumniList",
  components: { Alumni },
  setup() {
    const variable = ref("");
    const alumniList = reactive([
      {
        name: "Minn Thiha Chit",
        year: 2023,
        major: "Computer Science",
        subjects: "Math, Physics, Chemistry",
      },
    ]);

    const method = () => {};

    return { variable, alumniList };
  },
});
</script>
