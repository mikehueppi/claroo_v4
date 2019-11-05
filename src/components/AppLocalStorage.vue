<script>
    import users from '../data/users.json'
    import messages from '../data/messages.json'
    import tasks from '../data/tasks.json'
    import taskData from '../data/taskData.json'
    import educationMaterial from '../data/educationMaterial.json'
    export default {
        name: "AppLocalStorage.vue",
        data: () => ({
            userObj: users,
            messObj: messages,
            taskObj: tasks,
            taskDataObj: taskData,
            eduObj: educationMaterial,
        }),
        created () {
            window.localStorage.clear('storeUserObj');
            window.localStorage.clear('storeMessObj');
            window.localStorage.clear('storeTaskObj');
            window.localStorage.clear('storeTaskDataObj');
            window.localStorage.clear('storeEduObj');
            localStorage.setItem('storeUserObj', JSON.stringify(this.userObj));
            localStorage.setItem('storeMessObj', JSON.stringify(this.messObj));
            localStorage.setItem('storeTaskObj', JSON.stringify(this.taskObj));
            localStorage.setItem('storeTaskDataObj', JSON.stringify(this.taskDataObj));
            localStorage.setItem('storeEduObj', JSON.stringify(this.eduObj));
        },
    }
</script>
