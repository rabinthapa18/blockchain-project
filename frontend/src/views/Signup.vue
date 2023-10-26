<template>
    <div class="bg-dark" style="height: 100vh">
        <div class="container h-100">
            <div class="row justify-content-center align-items-center h-100">
                <div class="col-md-6">
                    <div class="card">
                        <div class="card-body p-4">
                            <h1 class="card-title text-center">Signup</h1>
                            <form @submit.prevent="createProfile">
                                <div class="form-group mb-3">
                                    <label for="name">Name:</label>
                                    <input
                                        v-model="name"
                                        type="text"
                                        class="form-control"
                                        id="name"
                                        required
                                    />
                                </div>
                                <div class="form-group mb-3">
                                    <label for="age">Age:</label>
                                    <input
                                        v-model.number="age"
                                        type="number"
                                        class="form-control"
                                        id="age"
                                        required
                                    />
                                </div>
                                <div class="form-group mb-3">
                                    <label for="phoneNumber"
                                        >Phone Number:</label
                                    >
                                    <input
                                        v-model="phoneNumber"
                                        type="tel"
                                        class="form-control"
                                        id="phoneNumber"
                                        required
                                    />
                                </div>
                                <div class="form-group mb-3">
                                    <label for="email">Email:</label>
                                    <input
                                        v-model="email"
                                        type="email"
                                        class="form-control"
                                        id="email"
                                        required
                                    />
                                </div>
                                <div class="form-group mb-3">
                                    <label for="password">Password:</label>
                                    <input
                                        v-model="password"
                                        type="password"
                                        class="form-control"
                                        id="password"
                                        required
                                    />
                                </div>
                                <div class="form-group mb-3">
                                    <label for="patientAddress"
                                        >Patient Address:</label
                                    >
                                    <input
                                        v-model="patientAddress"
                                        type="text"
                                        class="form-control"
                                        id="patientAddress"
                                        required
                                    />
                                </div>
                                <div class="text-center">
                                    <button
                                        type="submit"
                                        class="btn btn-primary"
                                    >
                                        Signup
                                    </button>
                                </div>
                                <div class="text-center mt-3">
                                    <p>
                                        Already have an account?
                                        <router-link to="/login"
                                            >Sign in here.</router-link
                                        >
                                    </p>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import axios from "axios";

export default {
    data() {
        return {
            name: "",
            age: null,
            phoneNumber: "",
            email: "",
            password: "",
            patientAddress: "",
        };
    },
    methods: {
        async createProfile() {
            try {
                const response = await axios.post("patient/createProfile", {
                    name: this.name,
                    age: this.age,
                    phoneNumber: this.phoneNumber,
                    email: this.email,
                    password: this.password,
                    patientAddress: this.patientAddress,
                });
                console.log(response.data);
                alert("Profile created successfully!");
                this.$router.push({ path: "/login" });
            } catch (error) {
                console.error("Error creating profile:", error);
                alert("Error creating profile");
            }
        },
    },
};
</script>
