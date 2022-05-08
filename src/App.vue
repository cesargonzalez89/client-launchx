<template>
  <div id="app">
    <nav class="navbar navbar-expand navbar-light bg-white">
      <router-link to="/" class="navbar-brand">LaunchX</router-link>
      <div class="navbar-nav mr-auto">
        <li class="nav-item">
          <router-link to="/explorers" class="nav-link">Explorers</router-link>
        </li>
        <li class="nav-item">
          <router-link to="/add" class="nav-link">Agregar Explorer</router-link>
        </li>
         <li class="nav-item">
          <router-link to="/missionCommanders" class="nav-link">Mission Commanders</router-link>
        </li>
        <li class="nav-item">
          <router-link to="/addMissionCommander" class="nav-link">Agregar Mission Commander</router-link>
        </li>
      </div>
    </nav>
    <div class="container mt-3">
      <router-view />
    </div>
  </div>
</template>
<script>
export default {
  name: "app"
};
</script>
<style>
.label-checkbox {
  margin-right: 0.87rem;
  margin-left: auto;
  border: 1px solid #4273DE;
  box-sizing: border-box;
  border-radius: 10px;
  padding: 5px 10px;
  text-align: center;
  display: inline-block;
  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 16px;
  color: #4273DE;
}

.check-day {
  visibility: hidden;
  position: absolute;
  right: 0;
  appearance: none;
  -webkit-appearance: none;
  -moz-appearance: none;
}

.checked {
  background: #4273DE;
  color: #fff;
}

.checked::before {
  content: "✔";
}
</style>
