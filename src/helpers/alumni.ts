import AlumniBoy1 from "@assets/alumni/AlumniBoy-1.png";
import AlumniBoy2 from "@assets/alumni/AlumniBoy-2.png";
import AlumniBoy3 from "@assets/alumni/AlumniBoy-3.png";
import AlumniGirl1 from "@assets/alumni/AlumniGirl-1.png";
import AlumniGirl2 from "@assets/alumni/AlumniGirl-2.png";
import AlumniGirl3 from "@assets/alumni/AlumniGirl-3.png";

export const getRandomImage = (gender: string) => {
  const boyImages = [AlumniBoy1.src, AlumniBoy2.src, AlumniBoy3.src];
  const girlImages = [AlumniGirl1.src, AlumniGirl2.src, AlumniGirl3.src];

  if (gender == "Male") {
    return boyImages[Math.floor(Math.random() * boyImages.length)];
  } else {
    return girlImages[Math.floor(Math.random() * girlImages.length)];
  }
};

// Each subject columns represent the corresponding grades
// 360 - A*  (100%)
// 120 - A*  (90% - 99%)
// 40  - A   (80% - 89%)
// 10  - B   (70% - 79%)
// 6   - C   (60% - 69%)
// 4   - D   (50% - 59%)
// 2   - E   (40% - 49%)
// -2  - F   (30% - 39%)
// -4  - G   (20% - 29%)
// -8  - U   (0% - 19%)
// 0   - N/A

export const intToGrade = {
  360: "A* (100%)",
  120: "A*",
  40: "A",
  10: "B",
  6: "C",
  4: "D",
  2: "E",
  "-2": "F",
  "-4": "G",
  "-8": "U",
  0: "-",
};
export type IntGradesType = keyof typeof intToGrade;

export const getShortGrades = (grades: { [key: string]: number }) => {
  let count100Percent = 0;
  let countAStar = 0;
  let countA = 0;
  let countB = 0;
  let countC = 0;
  let countD = 0;
  let countE = 0;
  let countF = 0;
  let countG = 0;
  let countU = 0;

  // Counting the grades for each subject
  for (const subject in grades) {
    switch (grades[subject]) {
      case 360:
        count100Percent++;
        break;
      case 120:
        countAStar++;
        break;
      case 40:
        countA++;
        break;
      case 10:
        countB++;
        break;
      case 6:
        countC++;
        break;
      case 4:
        countD++;
        break;
      case 2:
        countE++;
        break;
      case -2:
        countF++;
        break;
      case -4:
        countG++;
        break;
      case -8:
        countU++;
        break;
      default:
        // Code for default case (when none of the cases match)
        break;
    }
  }

  const gradeTexts = [];
  if (count100Percent > 0) {
    gradeTexts.push(`${count100Percent} A*(100%)`);
  }
  if (countAStar > 0) {
    gradeTexts.push(`${countAStar} A*`);
  }
  if (countA > 0) {
    gradeTexts.push(`${countA} A`);
  }
  if (countB > 0) {
    gradeTexts.push(`${countB} B`);
  }
  if (countC > 0) {
    gradeTexts.push(`${countC} C`);
  }
  if (countD > 0) {
    gradeTexts.push(`${countD} D`);
  }
  if (countE > 0) {
    gradeTexts.push(`${countE} E`);
  }

  let gradeCount = 0;
  let text = "";
  for (const gradeText of gradeTexts) {
    text = `${text} ${gradeText}`;

    if (gradeCount >= 2) return text;
    gradeCount++;
  }

  return text;
};
