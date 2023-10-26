<template>
    <div>
        <nav class="navbar bg-body-tertiary">
            <div class="container-fluid">
                <a class="navbar-brand">
                    <h3 style="padding-left: 20px">
                        {{ patientData.name }}
                    </h3></a
                >

                <button type="button" class="btn btn-secondary" @click="logout">
                    Logout
                </button>
            </div>
        </nav>

        <div class="container">
            <p>Age: {{ patientData.age }}</p>
            <p>Phone Number: {{ patientData.phoneNumber }}</p>
            <p>Email: {{ patientData.email }}</p>
        </div>
    </div>
</template>

<script>
import { getCookie } from "../utils";

export default {
    name: "Dashboard",
    props: {
        msg: String,
    },
    data() {
        return {
            patientData: {},
        };
    },
    mounted() {
        this.getPatientData();
    },
    methods: {
        async getPatientData() {
            try {
                const response = await fetch(
                    "http://localhost:3000/patient/getProfile",
                    {
                        method: "GET",
                        headers: {
                            "Content-Type": "application/json",
                            Authorization: `Bearer ${getCookie(
                                "access_token"
                            )}`,
                        },
                    }
                );

                if (response.ok) {
                    const data = await response.json();
                    console.log("profile", data.profile);
                    this.patientData = data.profile;

                    console.log("patientData", this.patientData);
                }
            } catch (error) {
                console.error(error);
            }
        },
        logout() {
            document.cookie = "access_token=undefined; ";
            this.$router.push({ name: "login" }).catch((err) => {
                console.error("Navigation failed:", err);
            });
        },
    },
};
</script>

<style></style>
