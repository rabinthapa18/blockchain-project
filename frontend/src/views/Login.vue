<template>
    <div class="bg-dark" style="height: 100vh">
        <div class="container h-100">
            <div class="row justify-content-center align-items-center h-100">
                <div class="col-md-6">
                    <div class="card">
                        <div class="card-body p-4">
                            <h1 class="card-title text-center">Login</h1>
                            <form @submit.prevent="login">
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
                                        Login
                                    </button>
                                </div>
                                <div class="text-center mt-3">
                                    <p>
                                        Don't have an account?
                                        <router-link to="/signup"
                                            >Sign up here.</router-link
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
export default {
    data() {
        return {
            email: "",
            password: "",
            patientAddress: "",
        };
    },
    methods: {
        async login() {
            try {
                const response = await fetch(
                    "http://localhost:3000/patient/login",
                    {
                        method: "POST",
                        headers: {
                            "Content-Type": "application/json",
                        },
                        body: JSON.stringify({
                            email: this.email,
                            password: this.password,
                            patientAddress: this.patientAddress,
                        }),
                    }
                );

                if (response.ok) {
                    const data = await response.json();
                    document.cookie = `access_token=${data.token}`;
                    console.log("access_token", data.token);
                    this.$router.push({ name: "dashboard" }).catch((err) => {
                        console.error("Navigation failed:", err);
                    });
                } else {
                    console.error("Login failed");
                    alert("Login failed");
                }
            } catch (error) {
                console.error("Error fetching profile:", error);
                alert("Login failsed");
            }
        },
    },
};
</script>
