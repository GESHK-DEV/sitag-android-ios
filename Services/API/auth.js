export const loginUser = async (email, password) => {
  try {
    const response = await fetch(
      "https://node-test-api-9ju9.onrender.com/api/login",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json", // Asegura que el backend reciba JSON
        },
        body: JSON.stringify({
          email: email,
          password: password,
        }),
      }
    );

    const data = await response.json();

    if (!response.ok) {
      // Si la respuesta no es exitosa, lanza un error con el mensaje recibido
      return { success: false, error: data?.message || "Error desconocido" };
    }

    return { success: true, data }; // Devuelve el objeto de respuesta exitoso
  } catch (error) {
    console.error("Error de conexión:", error);
    return { success: false, error: "No se pudo conectar al servidor" };
  }
};
