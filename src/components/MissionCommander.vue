<template>
<h4>Mission Commander</h4>
  <div v-if="currentMissionCommander" class="edit-form">
    <form>
      <div class="form-group">
        <label for="title">Nombre</label>
        <input type="text" disabled class="form-control" id="title"
          v-model="currentMissionCommander.name"
        />
      </div>
      <div class="form-group">
        <label for="title">Username</label>
        <input type="text" disabled class="form-control" id="title"
          v-model="currentMissionCommander.username"
        />
      </div>
      <div class="form-group">
        <label for="title">Main Stack principal</label>
        <input type="text" class="form-control" id="title"
          v-model="currentMissionCommander.mainStack"
        />
      </div>
      <div class="form-group">
      <input type="checkbox"
           id="currentEnrollment" 
           :checked="currentMissionCommander.currentEnrollment"
           v-model="currentMissionCommander.currentEnrollment" disabled> 
          <label for="currentEnrollment"> Current Enrollment</label>
      </div>
      <div class="form-group">
          <input type="checkbox"
          id="hasAzureCertification"
          :checked="currentMissionCommander.hasAzureCertification"
          v-model="currentMissionCommander.hasAzureCertification" disabled> 
          <label for="hasAzureCertification"> Has Azure Certification</label>
    </div>

    </form>
    <button class="btn btn-danger mr-2" @click="deleteMissionCommander">
      Eliminar Mission Commander
    </button>
    <button type="submit" class="btn btn-info mr-2" @click="updateMissionCommander">
      Actualizar
    </button>
    <p>{{ message }}</p>
  </div>
  <div v-else>
    <br />
    <p> Selecciona un mission commander. </p>
  </div>
</template>
<script>
import MissionCommanderService from "../services/MissionCommanderService";
export default {
  name: "explorer",
  data() {
    return {
      currentMissionCommander: null,
      message: ''
    };
  },
  methods: {
    getMissionCommander(id) {
      MissionCommanderService.get(id)
        .then(response => {
          this.currentMissionCommander= response.data;
        })
        .catch(e => {
          console.log(e);
        });
    },
    deleteMissionCommander() {
      MissionCommanderService.delete(this.currentMissionCommander.id)
      .then(response => {
        console.log(response.data);
        this.$router.push({ name: "missionCommanders" });
      })
      .catch(e => {
          console.log(e);
      });
    },
    updateMissionCommander() {
      MissionCommanderService.update(this.currentMissionCommander.id, this.currentMissionCommander)
        .then(response => {
          console.log(response.data);
          this.message = 'Se actualizó correctamente';
        })
        .catch(e => {
          console.log(e);
        });
    }
  },
  mounted() {
    this.message = '';
    this.getMissionCommander(this.$route.params.id);
  }
};
</script>

<style>
.edit-form {
  max-width: 300px;
  margin: auto;
}
</style>
