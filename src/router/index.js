import { createRouter, createWebHistory } from 'vue-router';
import HomePage from '../views/HomePage.vue';
import HelloWorld from "@/components/HelloWorld.vue";
import SignupPage from "@/views/SignupPage.vue";
import LoginPage from "@/views/LoginPage.vue";
import TaskPage from "@/views/Task/TaskPage.vue";
import AddTaskPage from "@/views/Task/AddTaskPage.vue";
import EditTaskPage from "@/views/Task/EditTaskPage.vue";


const routes = [
    { path: '/', component: HelloWorld },
    {path: '/signup', component: SignupPage},
    {path: '/login', component: LoginPage},
    {path: '/home', component: HomePage},
    { path: '/tasks', component: TaskPage },
    { path: '/add-task', component: AddTaskPage },
    { path: '/edit-task/:id', component: EditTaskPage, props: true }, // Paramètre d'ID pour éditer la tâche

];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;
