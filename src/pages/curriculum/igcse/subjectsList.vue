<template>
  <div class="mx-8 mt-8 rounded-xl bg-gray-300 px-8 py-4">
    <h2 class="text-center text-4xl">Choose Your Major</h2>
    <div class="mt-12">
      <div class="grid grid-cols-5 gap-2">
        <button
          class="flex flex-col items-center justify-center gap-5 rounded-lg bg-primary py-4 px-4 text-white"
          v-for="(major, index) in majors"
          :key="index"
          @click="onMajorClick(major.name)"
        >
          <img
            :src="major.icon"
            :alt="`${major.name} Icon`"
            width="100"
            height="100"
          />
          <div>{{ major.name }}</div>
        </button>
      </div>
    </div>
  </div>

  <div class="mx-8 mt-12">
    <h2 class="mb-8 text-4xl">Subject Guide</h2>
    <div class="flex" v-if="currentMajor.name != ''">
      <div class="flex-1">
        <h3 class="mb-4 text-3xl">Core Subjects</h3>
        <div v-for="(subject, index) in currentMajor.coreSubjects" :key="index">
          {{ subject }}
        </div>
      </div>
      <div class="flex-1">
        <h3 class="mb-4 text-3xl">Non-Essential Subjects</h3>
        <div
          v-for="(subject, index) in currentMajor.optionalSubjects"
          :key="index"
        >
          {{ subject }}
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive, ref, onMounted } from "vue";
import { majors } from "./subjectsData";

export default defineComponent({
  name: "SubjectList",
  components: {},
  setup() {
    const defaultMajor = {
      icon: "",
      name: "",
      coreSubjects: [],
      optionalSubjects: [],
    };
    const currentMajor = reactive(defaultMajor);

    const onMajorClick = (majorName: string) => {
      const selectedMajor = majors.filter((major) => {
        return major.name == majorName;
      });

      for (const key in selectedMajor[0]) {
        currentMajor[key] = selectedMajor[0][key];
      }
    };

    return { majors, currentMajor, onMajorClick };
  },
});

// <a href="https://www.flaticon.com/free-icons/medical" title="medical icons">Medical icons created by Freepik - Flaticon</a>
// <a href="https://www.flaticon.com/free-icons/engineer" title="engineer icons">Engineer icons created by Eucalyp - Flaticon</a>
// <a href="https://www.flaticon.com/free-icons/computer-science" title="computer-science icons">Computer-science icons created by Freepik - Flaticon</a>
// <a href="https://www.flaticon.com/free-icons/business" title="business icons">Business icons created by Freepik - Flaticon</a>
// <a href="https://www.flaticon.com/free-icons/budget" title="budget icons">Budget icons created by Freepik - Flaticon</a>
// <a href="https://www.flaticon.com/free-icons/recession" title="recession icons">Recession icons created by Freepik - Flaticon</a>
// <a href="https://www.flaticon.com/free-icons/law" title="law icons">Law icons created by Freepik - Flaticon</a>
// <a href="https://www.flaticon.com/free-icons/psychology" title="psychology icons">Psychology icons created by Freepik - Flaticon</a>
// <a href="https://www.flaticon.com/free-icons/biologist" title="biologist icons">Biologist icons created by monkik - Flaticon</a>
// <a href="https://www.flaticon.com/free-icons/art" title="art icons">Art icons created by Freepik - Flaticon</a>
</script>
