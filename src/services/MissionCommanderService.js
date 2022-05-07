import http from "../http-common";

class MissionCommanderService {
  getAll() {
    return http.get("/missionCommander");
  }
  get(id) {
    return http.get(`/missionComander/${id}`);
  }
  create(data) {
    return http.post("/missionComander", data);
  }
  update(id, data) {
    return http.put(`/missionComander/${id}`, data);
  }
  delete(id) {
    return http.delete(`/missionComander/${id}`);
  }
}

export default new MissionCommanderService();
