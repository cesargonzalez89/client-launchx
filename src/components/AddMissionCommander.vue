<template>
  <div class="submit-form">
    <div v-if="!submitted">
    <h3>Nuevo Mission Commander</h3>
      <div class="form-group">
        <label for="title">Nombre </label>
        <input
          type="text"
          class="form-control"
          id="title"
          required
          v-model="missionCommander.name"
          name="title"
        />
      </div>
      <div class="form-group">
        <label for="title">Username</label>
        <input
          type="text"
          class="form-control"
          id="username"
          required
          v-model="missionCommander.username"
          name="username"
        />
      </div>
      <div class="form-group">
        <label for="title">Main Stack</label>
        <input
          type="text"
          class="form-control"
          id="mainStack"
          required
          v-model="missionCommander.mainStack"
          name="mainStack"
        />
      </div>
      <div class="form-group">
           <label class="label-checkbox" :class="{ 'checked': missionCommander.currentEnrollment }">
             <input type="checkbox"
             class="check-day"
            id="currentEnrollment" 
             v-model="missionCommander.currentEnrollment" />
              Current Enrollment
          </label>
      </div>
      <div class="form-group">
          <label class="label-checkbox" :class="{ 'checked': missionCommander.hasAzureCertification }">
             <input type="checkbox" 
             class="check-day"
            id="hasAzureCertification"
            v-model="missionCommander.hasAzureCertification"/>
              Has Azure Certification
          </label>
    </div>
      <button @click="saveMissionCommander" class="btn btn-success">Agregar</button>
    </div>
    <div v-else>
      <h4> Explorer creado exitosamente. </h4>
      <button class="btn btn-success" @click="newMissionCommander">Add</button>
    </div>
  </div>
</template>

<script>
import MissionCommanderService from "../services/MissionCommanderService";
export default {
  name: "add-missionCommander",
  data() {
    return {
      missionCommander: {
        id: null,
        name: "",
        username: "",
        mainStack: "",
        currentEnrollment: false,
        hasAzureCertification: false
      },
      submitted: false
    };
  },
  methods: {
    saveMissionCommander() {
      var data = {
        name: this.missionCommander.name,
        username: this.missionCommander.username,
        mainStack: this.missionCommander.mainStack,
        currentEnrollment: this.missionCommander.currentEnrollment,
        hasAzureCertification: this.missionCommander.hasAzureCertification
      };
      MissionCommanderService.create(data)
        .then(response => {
          this.missionCommander.id = response.data.id;
          this.submitted = true;
        })
        .catch(e => {
          console.log(e);
        });
    },
    newMissionCommander() {
      this.submitted = false;
      this.missionCommander = {};
    }
  }
};
</script>
