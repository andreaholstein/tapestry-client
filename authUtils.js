import jwt from "jsonwebtoken";

// Utility function to get the user ID from the JWT token stored in localStorage
export const getUserId = () => {
  try {
    const token = localStorage.getItem("authToken"); // Assuming token is saved in localStorage

    if (!token) {
      return null; // No token found, user is not logged in
    }

    // Decode the token without verifying it (since we can't verify it in the frontend securely)
    const decoded = jwt.decode(token); // This just decodes the token without verification
    return decoded ? decoded.userId : null; // Return userId if decoded successfully
  } catch (error) {
    console.error("Error decoding the token:", error);
    return null; // If there's an error, return null
  }
};
