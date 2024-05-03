
                // Function to set the color of the icon
                function setIconColor(color) {
                    document.getElementById("likeIcon").style.color = color;
                }
                
                // Function to handle the click event
                function handleButtonClick(event) {
                    // Prevent the default behavior of the link
                    event.preventDefault();
                
                    // Get the current color of the icon
                    var currentColor = document.getElementById("likeIcon").style.color;
                
                    // Toggle the color of the icon
                    if (currentColor === "black") {
                        setIconColor(""); // Remove color
                        localStorage.removeItem("likeColor"); // Remove color from storage
                    } else {
                        setIconColor("black"); // Set color to black
                        localStorage.setItem("likeColor", "black"); // Store color in storage
                    }
                
                    // Navigate to the link
                    window.location.href = event.currentTarget.href;
                }
                
                // Add event listener to handle button click
                document.getElementById("likeButton").addEventListener("click", handleButtonClick);
                
                // Check if there's a stored color and apply it
                document.addEventListener("DOMContentLoaded", function() {
                    var storedColor = localStorage.getItem("likeColor");
                    if (storedColor === "black") {
                        setIconColor("black");
                    }
                });
                