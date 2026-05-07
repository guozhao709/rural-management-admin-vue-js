import request from "@/utils/request";

// 登录
export const login = (data) => {
  return request.post("api/v1/admin/auth/login", data);
};
// 注册
export const register = (data) => {
  return request.post("api/v1/admin/auth/register", data);
};
// 获取管理员列表
export const getAdminList = () => {
  return request.get("api/v1/admin/administrator/lists");
};
// 删除管理员
export const deleteAdmin = (data) => {
  return request.delete(`api/v1/admin/administrator/${data.adminID}`);
};
// 更新管理员
export const updateAdmin = (data) => {
  return request.put(`api/v1/admin/administrator/${data.adminID}`, data);
};
// 获取村民列表
export const getVillagersList = (params) => {
  return request.get("api/v1/admin/villagers/lists", { params });
};
// 删除某个村民
export const deleteVillager = (id) => {
  return request.delete(`api/v1/admin/villagers/${id}`);
}

// 更新某个村民
export const updateVillager = (data) => {
  return request.put(`api/v1/admin/villagers/${data.id}`, data);
}