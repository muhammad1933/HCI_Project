<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Mauritius Sports Council Register</title>
    <!-- Bootstrap CSS -->
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css">
    <!-- Custom CSS -->
    <link rel="stylesheet" href="register.css">
    <!-- Font Awesome for eye icon -->
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css">
    <!-- BotUI CSS -->
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/botui/build/botui.min.css">
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/botui/build/botui-theme-default.min.css">
</head>

<body>
    <div class="container">
        <div class="row justify-content-center">
            <div class="col-md-6">
                <h1 class="text-center text-success mt-5">Registration Form</h1>
                <form id="registrationform" class="mt-3">
                    <div class="form-group">
                        <label for="username">Username:</label>
                        <input type="text" class="form-control" id="username" placeholder="Enter username" required>
                    </div>
                    <div class="form-group">
                        <label for="email">Email:</label>
                        <input type="email" class="form-control" id="email" placeholder="Enter email" required>
                    </div>
                    <div class="form-group">
                        <label for="address">Address:</label>
                        <input type="text" class="form-control" id="address" placeholder="Enter address" required>
                    </div>
                    <div class="form-group position-relative">
                        <label for="password">Password:</label>
                        <input type="password" class="form-control" id="password" placeholder="Enter password" required>
                        <i id="togglePassword" class="fas fa-eye position-absolute"
                            style="top: 38px; right: 10px; cursor: pointer; color: black;"></i>
                    </div>
                    <div class="form-group">
                        <label for="confirm-password">Confirm Password:</label>
                        <input type="password" class="form-control" id="confirm-password" placeholder="Confirm password"
                            required>
                    </div>
                    <button type="submit" class="btn btn-primary btn-block">Register</button>
                </form>
            </div>
        </div>
    </div>

    <!-- Chatbot Widget -->
    <div id="botui-app"></div>

    <!-- jQuery, Popper.js, and Bootstrap JS -->
    <script src="https://code.jquery.com/jquery-3.5.1.slim.min.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.9.3/dist/umd/popper.min.js"></script>
    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.2/js/bootstrap.min.js"></script>
    <!-- BotUI and Vue.js -->
    <script src="https://cdn.jsdelivr.net/npm/vue@2"></script>
    <script src="https://cdn.jsdelivr.net/npm/botui/build/botui.min.js"></script>
    <!-- Custom JavaScript -->
    <script src="register.js"></script>
    <script src="chatbot.js"></script>
</body>

</html>