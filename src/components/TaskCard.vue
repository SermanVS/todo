<template>
    <v-card class="mx-auto my-4" width="70vw">
        <v-card-text>
            <p class="handle headline">{{ task }}</p>
        </v-card-text>
        <v-card-actions>
            <v-btn color="success" outlined @click="doneTask">
                <v-icon>mdi-check</v-icon>
                {{ $t("buttons.done") }}
            </v-btn>
            <v-btn color="error" outlined @click="deleteTask">
                <v-icon>mdi-delete</v-icon>
                {{ $t("buttons.delete") }}
            </v-btn>
        </v-card-actions>
    </v-card>
</template>

<script>
    import api from "../plugins/api"

    export default {
        name: "TaskCard",
        props: {
            task: String
        },
        methods: {
            doneTask() {
                this.$store.commit("setDone", this.task);
                let idx = this.$store.state.tasks.indexOf(this.task);
                this.$store.commit("deleteTask", idx);
                api.updTasks(this.$store.state.user, this.$store.state.tasks);
                api.updDone(this.$store.state.user, this.$store.state.done);

            },
            deleteTask() {
                let idx = this.$store.state.tasks.indexOf(this.task);
                this.$store.commit("deleteTask", idx);
                api.updTasks(this.$store.state.user, this.$store.state.tasks);
            }
        }
    }
</script>
