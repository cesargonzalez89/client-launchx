<template>
  <div class="list row">
    <div class="col-md-6">
      <h4> Mission Commanders </h4>
      <ul class="list-group">
        <li class="list-group-item"
          :class="{ active: index == currentIndex }"
          v-for="(missionCommander, index) in missionCommanders"
          :key="index"
          @click="setActiveExplorer(missionCommander, index)"
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
          <br><label><strong>Principal:</strong></label> {{ currentMissionCommander.mainStack}}
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
      tutorials: [],
      missionCommanders: [],
      currentTutorial: null,
      currentMissionComander: null,
      currentIndex: -1,
      title: "",
      missionCommanderId: ""
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
    setActiveExplorer(missionCommander, index) {
      this.currentMissionComander= missionCommander;
      this.currentIndex = missionCommander? index : -1;
    }
  },
  mounted() {
    this.getAllMissionComanders();
  }
};
</script>
