<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Contact Us</title>
    <link rel="stylesheet" href="contact.css?v=1.0">
    <link rel="stylesheet" href="all.css">
    
    <!-- style for components -->
    <link rel="stylesheet" href="comp.css">
</head>
<body>
    <?php include 'header.php'; ?>

    <section class="top-banner">
        <div class="banner-image">
            <img src="asset/topbanner2.jpg" alt="Top Banner">
        </div>
    </section>


    <section class="contact-section">
        <div class="container">
            <div class="contact-info">
                <h1>Ask An Expert</h1>
                <p>Send us your question and our animal nutrition experts can help.</p>
                <div class="contact-block">
                    <h3>Corporate Headquarters:</h3>
                    <p>FeedMasters Co.<br>123 Nutrition Ave<br>Farmtown, FT 45678</p>
                </div>
                <div class="contact-block">
                    <h3>Phone:</h3>
                    <p>123-456-7890</p>
                </div>
                <div class="contact-block">
                    <h3>Email:</h3>
                    <p>support@feedmasters.com</p>
                </div>
            </div>
            <div class="contact-form">
                <?php
                if ($_SERVER["REQUEST_METHOD"] == "POST") {
                    $species = htmlspecialchars($_POST["species"]);
                    $question = htmlspecialchars($_POST["question"]);
                    $firstName = htmlspecialchars($_POST["first_name"]);
                    $lastName = htmlspecialchars($_POST["last_name"]);
                    $email = htmlspecialchars($_POST["email"]);
                    $phone = htmlspecialchars($_POST["phone"]);
                    echo "<p class='success-message'>Thank you, $firstName! Your question has been received.</p>";
                }
                ?>
                <form method="POST" action="">
                    <select name="species" required>
                        <option value="">Select Species</option>
                        <option value="Fish">Fish</option>
                        <option value="Chicken">Chicken</option>
                        <option value="Duck">Duck</option>
                        <option value="Quail">Quail</option>
                        <option value="Pig">Pig</option>
                    </select>
                    <textarea name="question" placeholder="Your question..." required></textarea>
                    <input type="text" name="first_name" placeholder="First Name" required>
                    <input type="text" name="last_name" placeholder="Last Name" required>
                    <input type="email" name="email" placeholder="Email" required>
                    <input type="text" name="phone" placeholder="Phone Number">
                    <button type="submit">Submit</button>
                </form>
            </div>
        </div>
    </section>
    <script src="contact.js"></script>
    <?php include 'footer.php'; ?>
</body>
</html>

