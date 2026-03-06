<template>
  <div class="opening-hours">
    <table class="opening-hours-table" aria-label="Öppettider">
      <caption class="visually-hidden">Möllans Falafels öppettider</caption>
      <tbody>
        <tr
          v-for="entry in hours"
          :key="entry.days"
          :class="{ today: isToday(entry.dayNumbers) }"
        >
          <td>
            <span v-if="isToday(entry.dayNumbers)" class="fw-bold" aria-current="true">
              {{ entry.days }}
              <span class="badge rounded-pill ms-2" style="background-color:#C75B39; font-size:0.65rem;">Idag</span>
            </span>
            <span v-else>{{ entry.days }}</span>
          </td>
          <td>{{ entry.time }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script setup>
// 0 = Sunday, 1 = Monday, ... 6 = Saturday
const hours = [
  { days: 'Måndag – Torsdag', time: '11:00 – 21:00', dayNumbers: [1, 2, 3, 4] },
  { days: 'Fredag – Lördag', time: '11:00 – 23:00', dayNumbers: [5, 6] },
  { days: 'Söndag', time: '12:00 – 20:00', dayNumbers: [0] }
]

function isToday(dayNumbers) {
  const today = new Date().getDay()
  return dayNumbers.includes(today)
}
</script>
