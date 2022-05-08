<template>
  <div class="list row">
    <div class="col-md-6">
      <h4> Mission Commanders </h4>
      <ul class="list-group">
        <li class="list-group-item"
          :class="{ active: index == currentIndex }"
          v-for="(missionCommander, index) in missionCommanders"
          :key="index"
          @click="setActiveMissionComander(missionCommander, index)"
        >
          {{ missionCommander.username }}
        </li>

      </ul>
    </div>
    <div class="col-md-6">
      <div v-if="currentMissionCommander">
        <h4>Mission Commander</h4>
        <div>
          <br><label><strong>Nombre:</strong></label> {{ currentMissionCommander.name}}
          <br><label><strong>Username:</strong></label> {{ currentMissionCommander.username}}
          <br><label><strong>Main Stacks:</strong></label> {{ currentMissionCommander.mainStack}}
        
          <br><label class="label-checkbox" :class="{ 'checked': currentMissionCommander.currentEnrollment }">
             <input type="checkbox" class="check-day" disabled/>
              Current Enrollment
          </label>

           <br><label class="label-checkbox" :class="{ 'checked': currentMissionCommander.hasAzureCertification }">
             <input type="checkbox" class="check-day" disabled/>
              Has Azure Certification
          </label>

        </div>
        <router-link :to="'/missionCommander/' + currentMissionCommander.id" class="btn btn-info"> Editar</router-link>
      </div>
      <div v-else>
        <br />
        <p> Selecciona un mission commandeer.</p>
      </div>
    </div>
  </div>
</template>
<script>

import MissionComanderService from "../services/MissionCommanderService";

export default {
  name: "missionCommander-list",
  data() {
    return {
      missionCommanders: [],
      currentMissionCommander: null,
      currentIndex: -1
    };
  },
  methods: {
    getAllMissionComanders(){
      MissionComanderService.getAll()
        .then(response => {
          this.missionCommanders = response.data;
        })
        .catch(e => {
          console.log(e);
        });
    },
    setActiveMissionComander(missionCommander, index) {
      this.currentMissionCommander= missionCommander;
      this.currentIndex = missionCommander? index : -1;
    }
  },
  mounted() {
    this.getAllMissionComanders();
  }
};
</script>
