import Vue from 'vue';

export async function isInGroup(group: string): Promise<any> {
   const user = await Vue.prototype.$auth.getUser();
   return !!user && user.groups.includes(group);
}